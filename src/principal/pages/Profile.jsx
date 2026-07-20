import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {

  return (

    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-indigo-700">
          Principal Profile
        </h1>

      </div>

      <div className="bg-white rounded-xl shadow p-8">

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <FaUserCircle
            className="text-8xl text-indigo-600"
          />

          <div className="grid md:grid-cols-2 gap-6 flex-1">

            <div>
              <label className="text-gray-500">
                Name
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="Dr. Rajesh Kumar"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-500">
                Employee ID
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="PR001"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-500">
                Email
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="principal@school.com"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-500">
                Experience
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="18 Years"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-500">
                Department
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="Administration"
                readOnly
              />
            </div>

            <div>
              <label className="text-gray-500">
                Qualification
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-1"
                value="Ph.D. Education"
                readOnly
              />
            </div>

          </div>

        </div>

        <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;