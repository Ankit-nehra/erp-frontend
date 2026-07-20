import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // remove JWT
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-blue-900">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <Link to="/admin/notices">
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 border">
              
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">📢</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Manage Notices
                </h2>
              </div>

              <p className="text-gray-600">
                Add, edit, or delete school notices displayed on the website.
              </p>

            </div>
          </Link>

          <Link to="/admin/gallery">
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 border">
              
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">🖼️</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Manage Gallery
                </h2>
              </div>

              <p className="text-gray-600">
                Upload new images or remove old images from the gallery.
              </p>

            </div>
          </Link>

          <Link to="/admin/achievements">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Manage Achievements
      </h2>
    </div>

    <p className="text-gray-600">
      Add, edit or remove school achievements.
    </p>

  </div>
</Link>

<Link to="/admin/sessions">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Manage sessions
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove school sessions.
    </p>

  </div>
</Link>

<Link to="/admin/classes">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Add classes
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove school classes.
    </p>

  </div>
</Link>

<Link to="/admin/periods">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Add Periods
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove school periods.
    </p>

  </div>
</Link>

<Link to="/admin/sections">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Add sections
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove school sections.
    </p>

  </div>
</Link>

<Link to="/admin/subjects">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Add subjects
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove school subjects.
    </p>

  </div>
</Link>

<Link to="/admin/AssignTeacherTheirClass">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        Asign teacher to their class
      </h2>
    </div>

    <p className="text-gray-600">
      Add, see or remove Asign teacher to their class.
    </p>

  </div>
</Link>

<Link to="/admin/DoingClassSectionSubjectMapping">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
        DoingClassSectionSubjectMapping
      </h2>
    </div>

    <p className="text-gray-600">
      click to do this "DoingClassSectionSubjectMapping".
    </p>

  </div>
</Link>

<Link to="/admin/StudentAdmission">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
      student-admission
      </h2>
    </div>

    <p className="text-gray-600">
      click to take admission of student.
    </p>

  </div>
</Link>

<Link to="/admin/timetable">
  <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition border">

    <div className="flex items-center gap-4 mb-3">
      <div className="text-3xl">🏆</div>

      <h2 className="text-xl font-semibold">
      timetable
      </h2>
    </div>

    <p className="text-gray-600">
      click to create timetable.
    </p>

  </div>
</Link>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;