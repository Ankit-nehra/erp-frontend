import { useStudent } from "../../context/StudentContext";



import { useEffect, useState } from "react";
import {
  HiMenu,
  HiBell,
  HiCalendar,
  HiClock,
} from "react-icons/hi";

function Navbar({ setOpenSidebar }) {
  
const {student} = useStudent();


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
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="h-20 px-4 md:px-8 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setOpenSidebar(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <HiMenu size={28} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Student Dashboard
            </h1>

            <p className="text-sm text-gray-500 hidden sm:block">
              Welcome back 👋
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Date */}
          <div className="hidden lg:flex items-center gap-2 text-gray-600">
            <HiCalendar className="text-emerald-600" size={20} />

            <span className="text-sm font-medium">
              {currentDate}
            </span>
          </div>

          {/* Time */}
          <div className="hidden md:flex items-center gap-2 text-gray-600">
            <HiClock className="text-blue-600" size={20} />

            <span className="text-sm font-medium">
              {currentTime}
            </span>
          </div>

          {/* Notification */}
          <button className="relative p-2 rounded-xl hover:bg-slate-100">
            <HiBell size={24} />

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="font-semibold text-slate-800">
                {
                  student?.student_name
                }
              </p>

              <p className="text-sm text-gray-500">
                Class {student?.class_name}-{student?.section}
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow">
              { student?.student_name?.charAt(0)}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Date & Time */}
      <div className="md:hidden px-4 pb-3 flex justify-between text-xs text-gray-500">
        <span>{currentDate}</span>

        <span>{currentTime}</span>
      </div>
    </header>
  );
}

export default Navbar;