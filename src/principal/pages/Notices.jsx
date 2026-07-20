import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";

const Notices = () => {

  const [notices] = useState([
    {
      title: "Parent Teacher Meeting",
      audience: "Parents",
      priority: "Important",
      date: "12 July 2026",
      description: "PTM will be held on Saturday."
    },
    {
      title: "Holiday Notice",
      audience: "Students",
      priority: "Normal",
      date: "15 July 2026",
      description: "School will remain closed."
    }
  ]);

  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-indigo-700">
          Notice Board
        </h1>

        <p className="text-gray-600">
          School announcements
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {notices.map((notice, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <h2 className="font-bold text-lg text-indigo-700">
                {notice.title}
              </h2>

              <FaBullhorn className="text-indigo-600" />

            </div>

            <p className="text-sm text-gray-500 mt-2">
              {notice.date}
            </p>

            <div className="flex gap-2 mt-3">

              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {notice.audience}
              </span>

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                {notice.priority}
              </span>

            </div>

            <p className="mt-4 text-gray-600">
              {notice.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Notices;