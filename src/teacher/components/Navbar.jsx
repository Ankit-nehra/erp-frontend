import { useTeacher } from "../../context/TeacherContext";

import { useEffect, useState } from "react";
import {
  HiMenu,
  HiBell,
  HiCalendar,
  HiClock,
} from "react-icons/hi";

function Navbar({ setOpenSidebar }) {

  const {teacher}=useTeacher();

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentDate = dateTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="h-20 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpenSidebar(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <HiMenu size={28} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Teacher Dashboard
            </h1>

            <p className="hidden sm:block text-sm text-gray-500">
              Manage your classes and academics 👋
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-2 text-gray-600">
            <HiCalendar className="text-indigo-600" size={20} />

            <span className="text-sm font-medium">
              {currentDate}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-600">
            <HiClock className="text-blue-600" size={20} />

            <span className="text-sm font-medium">
              {currentTime}
            </span>
          </div>

          <button className="relative p-2 rounded-xl hover:bg-slate-100">
            <HiBell size={24} />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="font-semibold text-slate-800">
                {teacher?.teacher_name}
              </p>

              <p className="text-sm text-gray-500">
                {teacher?.designation}
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow">
              {teacher?.teacher_name?.charAt(0)}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3 flex justify-between text-xs text-gray-500">
        <span>{currentDate}</span>

        <span>{currentTime}</span>
      </div>
    </header>
  );
}

export default Navbar;