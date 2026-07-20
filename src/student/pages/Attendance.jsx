
import { useEffect, useState } from "react";

import {
  HiCheckCircle,
  HiXCircle,
  HiExclamationCircle,
  HiAcademicCap,
  HiClock,
  HiRefresh,
} from "react-icons/hi";

import API from "../../utils/axiosInstance";

function Attendance() {
  const [loading, setLoading] = useState(true);

  const [summary, setSummary] = useState({
    percentage: 0,
    present: 0,
    absent: 0,
    leave: 0,
    total: 0,
  });

  const [monthlyAttendance, setMonthlyAttendance] = useState([]);

  const [subjectAttendance, setSubjectAttendance] = useState([]);

  const [history, setHistory] = useState([]);

  const [monthlyDetail, setMonthlyDetail] = useState([]);

  const [showHistory, setShowHistory] = useState(false);

  const [showDetail, setShowDetail] = useState(false);

  const [historyLoading, setHistoryLoading] = useState(false);

  const [detailLoading, setDetailLoading] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    fetchAttendance();
  }, []);

  // ===============================
  // MAIN ATTENDANCE
  // ===============================

  const fetchAttendance = async () => {
    try {
      setLoading(true);

      const response = await API.get("/student/attendance");

      console.log("Attendance Response", response.data);

      const data = response.data.data;

      setSummary(data.summary || {});

      setMonthlyAttendance(data.monthly || []);

      setSubjectAttendance(data.subjectWise || []);
    } catch (error) {
      console.log("Attendance Error", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // COMPLETE HISTORY
  // ===============================

  const fetchHistory = async () => {
    try {
      setHistoryLoading(true);

      const response = await API.get("/student/attendance/history");

      console.log("History Response", response.data);

      setHistory(response.data.data || []);

      setShowHistory(true);
    } catch (error) {
      console.log("History Error", error.response?.data || error);
    } finally {
      setHistoryLoading(false);
    }
  };

  // ===============================
  // MONTH DETAIL
  // ===============================

  const fetchMonthlyDetail = async (month) => {
    try {
      setDetailLoading(true);

      console.log("Selected Month:", month);

      const response = await API.get(
        `/student/attendance/month/${month}`
      );

      console.log("Monthly Detail Response", response.data);

      setMonthlyDetail(response.data.data || []);

      setSelectedMonth(Number(month));

      setShowDetail(true);
    } catch (error) {
      console.log("Monthly Detail Error", error.response?.data || error);
    } finally {
      setDetailLoading(false);
    }
  };

  const getMonthName = () => {
    const month = monthlyAttendance.find(
      (item) => Number(item.monthNumber) === Number(selectedMonth)
    );

    return month?.month || "";
  };

  const attendanceColor = (percentage) => {
    if (percentage >= 90) return "bg-green-100 text-green-700";

    if (percentage >= 75) return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  };

  const statusStyle = (status) => {
    if (status === "Present") return "bg-green-100 text-green-700";

    if (status === "Absent") return "bg-red-100 text-red-700";

    return "bg-yellow-100 text-yellow-700";
  };

  const overallStatus = () => {
    if (summary.percentage >= 90) return "Excellent";

    if (summary.percentage >= 75) return "Good";

    return "Needs Improvement";
  };

  if (loading) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <div className="animate-spin h-14 w-14 rounded-full border-b-4 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Attendance Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor your academic attendance performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={fetchAttendance}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl transition"
          >
            <HiRefresh />
            Refresh
          </button>

          <button
            onClick={fetchHistory}
            className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-xl"
          >
            <HiClock />
            {historyLoading ? "Loading..." : "History"}
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <p className="text-gray-500">Overall Attendance</p>

          <h2 className="text-4xl font-bold text-emerald-600 mt-3">
            {summary.percentage}%
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Present</p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {summary.present}
              </h2>
            </div>

            <HiCheckCircle className="text-green-600 text-5xl" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Absent</p>

              <h2 className="text-3xl font-bold text-red-600 mt-2">
                {summary.absent}
              </h2>
            </div>

            <HiXCircle className="text-red-600 text-5xl" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Leave</p>

              <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                {summary.leave}
              </h2>
            </div>

            <HiExclamationCircle className="text-yellow-600 text-5xl" />
          </div>
        </div>
      </div>

      {/* PERFORMANCE SECTION */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Overall Performance
            </h2>

            <p className="text-gray-500 mt-1">
              Attendance status based on current records.
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full font-semibold w-fit ${attendanceColor(
              summary.percentage
            )}`}
          >
            {overallStatus()}
          </span>
        </div>





              <div className="mt-6 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            summary.percentage >= 90
              ? "bg-green-500"
              : summary.percentage >= 75
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${summary.percentage}%`,
          }}
        />
      </div>

      <div className="flex justify-between mt-3 text-sm text-gray-500">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>

    {/* SUBJECT WISE ATTENDANCE */}

    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <HiAcademicCap className="text-emerald-600 text-3xl" />

        <h2 className="text-2xl font-bold text-slate-800">
          Subject Wise Attendance
        </h2>
      </div>

      {subjectAttendance.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No subject record available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjectAttendance.map((subject, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-slate-800">
                {subject.subject_name}
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Present</span>

                  <span className="font-bold text-green-600">
                    {subject.present}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Absent</span>

                  <span className="font-bold text-red-600">
                    {subject.absent}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Leave</span>

                  <span className="font-bold text-yellow-600">
                    {subject.leave}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* MONTHLY ATTENDANCE */}

    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Monthly Attendance
        </h2>

        <p className="text-gray-500 mt-2">
          Click month to view complete detail.
        </p>
      </div>

      {monthlyAttendance.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No attendance available.
        </div>
      ) : (
        <div className="space-y-5">
          {monthlyAttendance.map((item) => (
            <div
              key={item.monthNumber}
              onClick={() => fetchMonthlyDetail(item.monthNumber)}
              className="border rounded-2xl p-5 cursor-pointer hover:bg-emerald-50 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-slate-800">
                  {item.month}
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${attendanceColor(
                    item.percentage
                  )}`}
                >
                  {item.percentage}%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Present</p>

                  <p className="font-bold text-green-600 text-xl">
                    {item.present}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Absent</p>

                  <p className="font-bold text-red-600 text-xl">
                    {item.absent}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Leave</p>

                  <p className="font-bold text-yellow-600 text-xl">
                    {item.leave}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Total</p>

                  <p className="font-bold text-slate-700 text-xl">
                    {item.present + item.absent + item.leave}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* POLICY */}

    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-emerald-700">
        Attendance Policy
      </h3>

      <p className="mt-3 text-gray-700">
        Students should maintain minimum
        <span className="font-bold text-emerald-700">
          {" "}75% attendance
        </span>
        for examination eligibility.
      </p>
    </div>

    {/* MONTH DETAIL DRAWER */}

    {showDetail && (
      <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
        <div className="bg-white w-full sm:w-[500px] h-full overflow-y-auto p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {getMonthName()}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Monthly Attendance Detail
              </p>
            </div>

            <button
              onClick={() => setShowDetail(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Close
            </button>
          </div>

          {detailLoading ? (
            <div className="py-20 text-center text-gray-500">
              Loading...
            </div>
          ) : monthlyDetail.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No record found.
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {monthlyDetail.map((item, index) => {
                const status =
                  item.status || item.attendance_status;

                return (
                  <div
                    key={index}
                    className="border rounded-2xl p-5"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="font-bold text-slate-800">
                          {new Date(
                            item.attendance_date
                          ).toLocaleDateString()}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {item.subject_name}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Teacher
                        </p>

                        <p className="font-semibold">
                          {item.teacher_name || "-"}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Period
                        </p>

                        <p className="font-semibold">
                          {item.period_number || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )}

    {/* COMPLETE HISTORY DRAWER */}

    {showHistory && (
      <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
        <div className="bg-white w-full sm:w-[550px] h-full overflow-y-auto p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Complete History
            </h2>

            <button
              onClick={() => setShowHistory(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Close
            </button>



                    </div>

          {history.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No attendance record found.
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {history.map((item, index) => {
                const status =
                  item.status || item.attendance_status;

                return (
                  <div
                    key={index}
                    className="border rounded-2xl p-5"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="font-bold text-slate-800">
                          {new Date(
                            item.attendance_date
                          ).toLocaleDateString()}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {item.subject_name}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Teacher
                        </p>

                        <p className="font-semibold">
                          {item.teacher_name || "-"}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Period
                        </p>

                        <p className="font-semibold">
                          {item.period_number || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )}

    </div>
  );
}

export default Attendance;