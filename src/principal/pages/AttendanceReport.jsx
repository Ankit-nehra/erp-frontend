import React, { useState } from "react";
import {
  FaUserCheck,
  FaUserTimes,
  FaUsers,
  FaChalkboardTeacher
} from "react-icons/fa";
import StatsCard from "../components/StatsCard";

const AttendanceReport = () => {
  const [filters, setFilters] = useState({
    date: "",
    className: "",
    section: ""
  });

  const studentAttendance = [
    {
      className: "10-A",
      present: 38,
      absent: 2,
      percentage: "95%"
    },
    {
      className: "10-B",
      present: 36,
      absent: 4,
      percentage: "90%"
    },
    {
      className: "9-A",
      present: 40,
      absent: 1,
      percentage: "98%"
    },
    {
      className: "9-B",
      present: 35,
      absent: 5,
      percentage: "88%"
    }
  ];

  const teacherAttendance = [
    {
      name: "Amit Sharma",
      present: 26,
      absent: 1,
      percentage: "96%"
    },
    {
      name: "Neha Verma",
      present: 25,
      absent: 2,
      percentage: "93%"
    },
    {
      name: "Rahul Singh",
      present: 24,
      absent: 3,
      percentage: "89%"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Attendance Report
        </h1>
        <p className="text-gray-600">
          Monitor student and teacher attendance
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatsCard
          title="Present Students"
          value="820"
          icon={<FaUserCheck />}
          color="green"
        />

        <StatsCard
          title="Absent Students"
          value="30"
          icon={<FaUserTimes />}
          color="red"
        />

        <StatsCard
          title="Present Teachers"
          value="43"
          icon={<FaChalkboardTeacher />}
          color="blue"
        />

        <StatsCard
          title="Attendance Rate"
          value="94%"
          icon={<FaUsers />}
          color="indigo"
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-5 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="date"
          className="border rounded-lg p-3"
          value={filters.date}
          onChange={(e) =>
            setFilters({
              ...filters,
              date: e.target.value
            })
          }
        />

        <select
          className="border rounded-lg p-3"
          value={filters.className}
          onChange={(e) =>
            setFilters({
              ...filters,
              className: e.target.value
            })
          }
        >
          <option value="">All Classes</option>
          <option>10</option>
          <option>9</option>
        </select>

        <select
          className="border rounded-lg p-3"
          value={filters.section}
          onChange={(e) =>
            setFilters({
              ...filters,
              section: e.target.value
            })
          }
        >
          <option value="">All Sections</option>
          <option>A</option>
          <option>B</option>
        </select>
      </div>

      {/* Student Attendance */}
      <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-xl font-semibold text-indigo-700">
            Student Attendance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4">Class</th>
                <th className="p-4">Present</th>
                <th className="p-4">Absent</th>
                <th className="p-4">Attendance %</th>
              </tr>
            </thead>

            <tbody>
              {studentAttendance.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-indigo-50"
                >
                  <td className="p-4 text-center">
                    {item.className}
                  </td>

                  <td className="p-4 text-center text-green-600 font-semibold">
                    {item.present}
                  </td>

                  <td className="p-4 text-center text-red-600 font-semibold">
                    {item.absent}
                  </td>

                  <td className="p-4 text-center">
                    {item.percentage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Teacher Attendance */}
      <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-xl font-semibold text-indigo-700">
            Teacher Attendance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4">Teacher</th>
                <th className="p-4">Present Days</th>
                <th className="p-4">Absent Days</th>
                <th className="p-4">Attendance %</th>
              </tr>
            </thead>

            <tbody>
              {teacherAttendance.map((teacher, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-indigo-50"
                >
                  <td className="p-4">
                    {teacher.name}
                  </td>

                  <td className="p-4 text-center">
                    {teacher.present}
                  </td>

                  <td className="p-4 text-center">
                    {teacher.absent}
                  </td>

                  <td className="p-4 text-center">
                    {teacher.percentage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;