import React from "react";
import { FaCalendarAlt, FaClock, FaDoorOpen } from "react-icons/fa";

const schedule = [
  {
    time: "09:00 AM",
    className: "10-A",
    subject: "Mathematics",
    teacher: "Amit Sharma",
    room: "Room 12",
  },
  {
    time: "10:00 AM",
    className: "9-B",
    subject: "Science",
    teacher: "Neha Verma",
    room: "Room 08",
  },
  {
    time: "11:00 AM",
    className: "10-B",
    subject: "English",
    teacher: "Rahul Singh",
    room: "Room 15",
  },
];

const Timetable = () => {
  return (
    <div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          School Timetable
        </h1>

        <p className="text-gray-600">
          Monitor today's class schedule
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-indigo-600 text-white">

            <tr>
              <th className="p-4">Time</th>
              <th className="p-4">Class</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Teacher</th>
              <th className="p-4">Room</th>
            </tr>

          </thead>

          <tbody>

            {schedule.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-indigo-50"
              >

                <td className="p-4 text-center">{item.time}</td>
                <td className="p-4 text-center">{item.className}</td>
                <td className="p-4 text-center">{item.subject}</td>
                <td className="p-4 text-center">{item.teacher}</td>
                <td className="p-4 text-center">{item.room}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="md:hidden space-y-4">

        {schedule.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-5"
          >

            <h3 className="font-bold text-indigo-700 text-lg">
              {item.className}
            </h3>

            <div className="mt-3 space-y-2">

              <p className="flex items-center gap-2">
                <FaClock />
                {item.time}
              </p>

              <p>{item.subject}</p>

              <p>{item.teacher}</p>

              <p className="flex items-center gap-2">
                <FaDoorOpen />
                {item.room}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Timetable;