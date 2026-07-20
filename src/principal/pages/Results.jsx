import React, { useState } from "react";
import {
  FaChartLine,
  FaTrophy,
  FaUserGraduate,
  FaBookOpen
} from "react-icons/fa";
import StatsCard from "../components/StatsCard";

const Results = () => {
  const [exam, setExam] = useState("Final Exam");

  const classPerformance = [
    {
      className: "10-A",
      average: "86%",
      highest: "96%",
      students: "42"
    },
    {
      className: "10-B",
      average: "82%",
      highest: "94%",
      students: "40"
    },
    {
      className: "9-A",
      average: "88%",
      highest: "97%",
      students: "45"
    },
    {
      className: "9-B",
      average: "79%",
      highest: "92%",
      students: "38"
    }
  ];

  const subjectPerformance = [
    {
      subject: "Mathematics",
      average: "84%"
    },
    {
      subject: "Science",
      average: "81%"
    },
    {
      subject: "English",
      average: "90%"
    },
    {
      subject: "Computer",
      average: "93%"
    }
  ];

  const toppers = [
    {
      name: "Rahul Sharma",
      className: "10-A",
      marks: "96%"
    },
    {
      name: "Neha Verma",
      className: "9-A",
      marks: "95%"
    },
    {
      name: "Priya Singh",
      className: "10-B",
      marks: "94%"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Result Analysis
        </h1>
        <p className="text-gray-600">
          Monitor student academic performance
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <select
          className="border rounded-lg p-3"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
        >
          <option>Unit Test</option>
          <option>Half Yearly</option>
          <option>Final Exam</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatsCard
          title="Total Students"
          value="850"
          icon={<FaUserGraduate />}
          color="indigo"
        />

        <StatsCard
          title="Average Result"
          value="84%"
          icon={<FaChartLine />}
          color="green"
        />

        <StatsCard
          title="Highest Score"
          value="97%"
          icon={<FaTrophy />}
          color="orange"
        />

        <StatsCard
          title="Subjects"
          value="12"
          icon={<FaBookOpen />}
          color="blue"
        />
      </div>

      <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
        <div className="p-5">
          <h2 className="text-xl font-bold text-indigo-700">
            Class Performance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4">Class</th>
                <th className="p-4">Students</th>
                <th className="p-4">Average</th>
                <th className="p-4">Highest</th>
              </tr>
            </thead>

            <tbody>
              {classPerformance.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-indigo-50"
                >
                  <td className="p-4 text-center">
                    {item.className}
                  </td>
                  <td className="p-4 text-center">
                    {item.students}
                  </td>
                  <td className="p-4 text-center">
                    {item.average}
                  </td>
                  <td className="p-4 text-center">
                    {item.highest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">
            Subject Performance
          </h2>

          <div className="space-y-4">
            {subjectPerformance.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.subject}</span>
                  <b className="text-indigo-700">
                    {item.average}
                  </b>
                </div>

                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: item.average }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-bold text-indigo-700 mb-4">
            Top Performers
          </h2>

          <div className="space-y-3">
            {toppers.map((student, index) => (
              <div
                key={index}
                className="bg-indigo-50 rounded-lg p-4 flex justify-between"
              >
                <div>
                  <h3 className="font-semibold">
                    {student.name}
                  </h3>
                  <p className="text-gray-600">
                    {student.className}
                  </p>
                </div>

                <div className="text-indigo-700 font-bold">
                  {student.marks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;