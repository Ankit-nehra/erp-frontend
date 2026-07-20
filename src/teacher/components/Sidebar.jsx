import { NavLink, useNavigate } from "react-router-dom";
import {
  HiX,
  HiAcademicCap,
  HiHome,
  HiUserGroup,
  HiClipboardCheck,
  HiPencilAlt,
  HiBookOpen,
  HiSpeakerphone,
  HiDocumentText,
  HiCalendar,
  HiLogout,
} from "react-icons/hi";

function Sidebar({ mobile = false, setOpenSidebar }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("teacherToken");
    navigate("/teacher/login");
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/teacher",
      icon: <HiHome size={22} />,
    },
    {
      name: "Students",
      path: "/teacher/students",
      icon: <HiUserGroup size={22} />,
    },
    {
      name: "Attendance",
      path: "/teacher/attendance",
      icon: <HiClipboardCheck size={22} />,
    },
    {
      name: "Marks Upload",
      path: "/teacher/marks",
      icon: <HiPencilAlt size={22} />,
    },
    {
      name: "Syllabus",
      path: "/teacher/syllabus",
      icon: <HiBookOpen size={22} />,
    },
    {
      name: "Notices",
      path: "/teacher/notices",
      icon: <HiSpeakerphone size={22} />,
    },
    {
      name: "Notes",
      path: "/teacher/notes",
      icon: <HiDocumentText size={22} />,
    },
    {
      name: "Timetable",
      path: "/teacher/timetable",
      icon: <HiCalendar size={22} />,
    },
  ];

  return (
    <aside
      className={`bg-gradient-to-b from-indigo-700 to-blue-900 text-white ${
        mobile
          ? "fixed top-0 left-0 w-72 h-screen"
          : "w-72 h-screen sticky top-0"
      } flex flex-col`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <HiAcademicCap size={30} />
          </div>

          <div>
            <h1 className="text-xl font-bold">Teacher ERP</h1>
            <p className="text-xs text-indigo-100">Faculty Portal</p>
          </div>
        </div>

        {mobile && (
          <button
            onClick={() => setOpenSidebar(false)}
            className="md:hidden"
          >
            <HiX size={28} />
          </button>
        )}
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-blue-900">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/teacher"}
            onClick={() => mobile && setOpenSidebar(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-white text-indigo-700 font-semibold shadow"
                  : "hover:bg-white/10"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10 flex-shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition"
        >
          <HiLogout size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;