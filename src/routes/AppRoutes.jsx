import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admission from "../pages/Admission";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

import AdminDashboard from "../admin/AdminDashboard";
import AdminNotices from "../admin/AdminNotices";
import AdminGallery from "../admin/AdminGallery";
import AdminAchievements from "../admin/AdminAchievements";
import AdminSessions from "../admin/Sessions";
import AdminClasses from "../admin/Classes";
import AdminPeriods from "../admin/Periods";
import AdminSections from "../admin/Section";
import AdminSubjects from "../admin/Subjects";
import AdminTeacherAssignedClass from "../admin/TeacherAssignedClass";
import AdminClassSectionSubjectMapping from "../admin/ClassSectionSubjectMapping";
import StudentAdmission from "../admin/StudentAdmission";
import AdminTimetable from "../admin/Timetable";

import TeacherDashboard from "../teacher/TeacherDashboard";
import TeacherLogin from "../teacher/TeacherLogin";
import TeacherPrivateRoute from "../teacher/PrivateRoute";
import TeacherHome from "../teacher/pages/TeacherHome";
import AttendanceUpload from "../teacher/pages/AttendanceUpload";
import MarksUpload from "../teacher/pages/MarksUpload";
import Syllabus from "../teacher/pages/Syllabus";
import Notices from "../teacher/pages/Notices";
import Notes from "../teacher/pages/Notes";
import Timetable from "../teacher/pages/Timetable";
import Students  from "../teacher/pages/Students";

import StudentDashboard from "../student/StudentDashboard";
import StudentLogin from "../student/StudentLogin";
import StudentPrivateRoute from "../student/PrivateRoute";
import Profile from "../student/pages/Profile";
import Subjects from "../student/pages/Subjects";
import Attendance from "../student/pages/Attendance";
import Results from "../student/pages/Results";
import StudentNotes from "../student/pages/StudentNotes";
import StudentTimetable from "../student/pages/StudentTimetable";
import TeacherNotices from '../student/pages/Notices';
import Studentsyllabus from "../student/pages/Syllabus";


import PrincipalDashboard from "../principal/PrincipalDashboard";
 import PrincipalLogin from "../principal/PrincipalLogin";
import PrincipalPrivateRoute from "../principal/PrivateRoute";

import PrincipalHome from "../principal/pages/PrincipalHome";
import PrincipalStudents from "../principal/pages/Students";
import PrincipalTeachers from "../principal/pages/Teachers";
import AttendanceReport from "../principal/pages/AttendanceReport";
import PrincipalResults from "../principal/pages/Results";
import SyllabusMonitoring from "../principal/pages/SyllabusMonitoring";
import PrincipalTimetable from "../principal/pages/Timetable";
import PrincipalNotices from "../principal/pages/Notices";
import PrincipalProfile from "../principal/pages/Profile";


import AdminLogin from "../admin/AdminLogin";
import AdminPrivateRoute from "../admin/PrivateRoute";

import Loader from "../components/LoaderBus/Loader";

// ✅ NProgress imports
import { startLoading, stopLoading } from "../components/Loader";


// Scroll to top + trigger NProgress on route change
function ScrollToTopHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    startLoading(); // start top bar
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Stop progress after short delay to ensure visibility
    const timer = setTimeout(() => stopLoading(), 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  

  return (
   
    <BrowserRouter>
      <ScrollToTopHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/notices"
          element={
            <AdminPrivateRoute>
              <AdminNotices />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <AdminPrivateRoute>
              <AdminGallery />
            </AdminPrivateRoute>
          }
        />
        <Route
  path="/admin/achievements"
  element={
  <AdminPrivateRoute>
    <AdminAchievements />
  </AdminPrivateRoute>
  }
/>
<Route
  path="/admin/sessions"
  element={
  <AdminPrivateRoute>
    <AdminSessions/>
  </AdminPrivateRoute>
  }
/>
<Route
  path="/admin/classes"
  element={
  <AdminPrivateRoute>
    <AdminClasses/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/periods"
  element={
  <AdminPrivateRoute>
    <AdminPeriods/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/sections"
  element={
  <AdminPrivateRoute>
    <AdminSections/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/subjects"
  element={
  <AdminPrivateRoute>
    <AdminSubjects/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/AssignTeacherTheirClass"
  element={
  <AdminPrivateRoute>
    <AdminTeacherAssignedClass/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/DoingClassSectionSubjectMapping"
  element={
  <AdminPrivateRoute>
    <AdminClassSectionSubjectMapping/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/StudentAdmission"
  element={
  <AdminPrivateRoute>
    <StudentAdmission/>
  </AdminPrivateRoute>
  }
/>

<Route
  path="/admin/timetable"
  element={
  <AdminPrivateRoute>
    <AdminTimetable/>
  </AdminPrivateRoute>
  }
/>




---------------------------------------------------------------------------------------------
        <Route path="/teacher/login" element={<TeacherLogin />} />
<Route
  path="/teacher"
  element={
    <TeacherPrivateRoute>
      <TeacherDashboard />
    </TeacherPrivateRoute>
  }
>
  <Route index element={<TeacherHome />} />
  <Route
    path="attendance"
    element={<AttendanceUpload />}
  />
  <Route
    path="marks"
    element={<MarksUpload />}
  />
  <Route
    path="syllabus"
    element={<Syllabus />}
  />
  <Route
    path="notices"
    element={<Notices />}
  />
  <Route
    path="notes"
    element={<Notes />}
  />
  <Route
    path="timetable"
    element={<Timetable />}
  />
    <Route
    path="students"
    element={<Students />}
  />
</Route>

--------------------------------------------------------------------------------------
        <Route path="/student/login" element={<StudentLogin />} />
<Route
  path="/student"
  element={
    <StudentPrivateRoute>
      <StudentDashboard />
    </StudentPrivateRoute>
  }
>
  <Route index element={<Profile />} />
  <Route path="profile" element={<Profile />} />
  <Route path="subjects" element={<Subjects />} />
  <Route path="attendance" element={<Attendance />} />
  <Route path="results" element={<Results />} />
  <Route path="notices" element={<TeacherNotices />} />
  <Route path="Notes" element={<StudentNotes />} />
  <Route path="Timetable" element={<StudentTimetable/>} />
  <Route path="syllabus" element={<Studentsyllabus/>}/>
</Route>

-------------------------------------------------------------------------------------
<Route 
  path="/principal/login" 
  element={<PrincipalLogin />} 
/> 


<Route
  path="/principal"
  element={
     <PrincipalPrivateRoute>
      <PrincipalDashboard />
     </PrincipalPrivateRoute>
  }
>

  {/* Dashboard Home */}
  <Route 
    index 
    element={<PrincipalHome />} 
  />


  {/* Students Management */}
  <Route
    path="students"
    element={<PrincipalStudents />}
  />


  {/* Teachers Management */}
  <Route
    path="teachers"
    element={<PrincipalTeachers />}
  />


  {/* Attendance Monitoring */}
  <Route
    path="attendance"
    element={<AttendanceReport />}
  />


  {/* Result Monitoring */}
  <Route
    path="results"
    element={<PrincipalResults />}
  />


  {/* Syllabus Monitoring */}
  <Route
    path="syllabus"
    element={<SyllabusMonitoring />}
  />


  {/* Timetable */}
  <Route
    path="timetable"
    element={<PrincipalTimetable />}
  />


  {/* Notices */}
  <Route
    path="notices"
    element={<PrincipalNotices />}
  />


  {/* Profile */}
  <Route
    path="profile"
    element={<PrincipalProfile />}
  />

</Route>
      </Routes>
      
    </BrowserRouter>
    
  );

}

export default AppRoutes;
