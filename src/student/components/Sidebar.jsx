// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   HiX,
//   HiUser,
//   HiBookOpen,
//   HiClipboardCheck,
//   HiChartBar,
//   HiLogout,
//   HiAcademicCap,
//   HiCalendar,
//   HiSpeakerphone
// } from "react-icons/hi";

// function Sidebar({ mobile = false, setOpenSidebar }) {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("studentToken");
//     navigate("/student/login");
//   };

//   const menu = [
//     {
//       name: "Profile",
//       icon: <HiUser size={22} />,
//       path: "/student/profile",
//     },
//     {
//       name: "Subjects",
//       icon: <HiBookOpen size={22} />,
//       path: "/student/subjects",
//     },
//         {
//       name: "Notes",
//       icon: <HiSpeakerphone size={22} />,
//       path: "/student/Notes",
//     },
//     {
//       name: "Attendance",
//       icon: <HiClipboardCheck size={22} />,
//       path: "/student/attendance",
//     },
//     {
//       name: "Results",
//       icon: <HiChartBar size={22} />,
//       path: "/student/results",
//     },
//     {
//       name: "Timetable",
//       icon: <HiCalendar size={22} />,
//       path: "/student/Timetable",
//     }
//   ];

//   return (
//     <aside
//       className={`bg-gradient-to-b from-emerald-700 to-green-900 text-white
//       ${
//         mobile
//           ? "w-72 min-h-screen"
//           : "w-72 h-screen sticky top-0"
//       } flex flex-col`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-between p-6 border-b border-white/10">
//         <div className="flex items-center gap-3">
//           <div className="bg-white/20 p-2 rounded-xl">
//             <HiAcademicCap size={28} />
//           </div>

//           <div>
//             <h2 className="font-bold text-xl">Student ERP</h2>
//             <p className="text-xs text-green-100">
//               Academic Portal
//             </p>
//           </div>
//         </div>

//         {mobile && (
//           <button
//             onClick={() => setOpenSidebar(false)}
//             className="md:hidden"
//           >
//             <HiX size={28} />
//           </button>
//         )}
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 p-4 space-y-2">
//         {menu.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             onClick={() => mobile && setOpenSidebar(false)}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
//               ${
//                 isActive
//                   ? "bg-white text-emerald-700 font-semibold"
//                   : "hover:bg-white/10"
//               }`
//             }
//           >
//             {item.icon}
//             {item.name}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t border-white/10">
//         <button
//           onClick={logout}
//           className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition rounded-xl py-3 font-semibold"
//         >
//           <HiLogout size={20} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;

import { NavLink, useNavigate } from "react-router-dom";

import {
  HiX,
  HiUser,
  HiBookOpen,
  HiClipboardCheck,
  HiChartBar,
  HiLogout,
  HiAcademicCap,
  HiCalendar,
  HiSpeakerphone
} from "react-icons/hi";


function Sidebar({ mobile = false, setOpenSidebar }) {


  const navigate = useNavigate();



  const logout = () => {

    localStorage.removeItem("studentToken");

    navigate("/student/login");

  };




  const menu = [

    {
      name:"Profile",
      icon:<HiUser size={22}/>,
      path:"/student/profile"
    },


    {
      name:"Subjects",
      icon:<HiBookOpen size={22}/>,
      path:"/student/subjects"
    },


    {
      name:"Notes",
      icon:<HiSpeakerphone size={22}/>,
      path:"/student/Notes"
    },


    {
      name:"Attendance",
      icon:<HiClipboardCheck size={22}/>,
      path:"/student/attendance"
    },


    {
      name:"Results",
      icon:<HiChartBar size={22}/>,
      path:"/student/results"
    },

        {
      name:"Notices",
      icon:<HiChartBar size={22}/>,
      path:"/student/notices"
    },

    {
      name:"syllabus",
      icon:<HiChartBar size={22}/>,
      path:"/student/syllabus"
    },


    {
      name:"Timetable",
      icon:<HiCalendar size={22}/>,
      path:"/student/Timetable"
    }

  ];





  return (


    <aside

    className={`

    bg-gradient-to-b 
    from-emerald-700 
    to-green-900

    text-white


    ${
      mobile

      ?

      "fixed top-0 left-0 w-72 h-screen"

      :

      "w-72 h-screen sticky top-0"

    }


    flex
    flex-col

    `}

    >





      {/* Logo */}

      <div

      className="
      flex 
      items-center 
      justify-between 
      p-6 
      border-b 
      border-white/10
      flex-shrink-0
      "

      >



        <div className="flex items-center gap-3">


          <div

          className="
          bg-white/20 
          p-2 
          rounded-xl
          "

          >

            <HiAcademicCap size={28}/>

          </div>




          <div>


            <h2 className="font-bold text-xl">

              Student ERP

            </h2>


            <p className="text-xs text-green-100">

              Academic Portal

            </p>


          </div>



        </div>





        {
          mobile && (

            <button

            onClick={()=>setOpenSidebar(false)}

            className="md:hidden"

            >

              <HiX size={28}/>


            </button>


          )
        }



      </div>







      {/* Scrollable Menu */}


      <nav

      className="
      flex-1
      p-4
      space-y-2
      overflow-y-auto
      scrollbar-thin
      scrollbar-thumb-emerald-400
      scrollbar-track-emerald-900
      "

      >



        {
          menu.map((item)=>(


            <NavLink


            key={item.path}


            to={item.path}


            onClick={()=> mobile && setOpenSidebar(false)}



            className={({isActive})=>

            `

            flex
            items-center
            gap-3

            px-4
            py-3

            rounded-xl

            transition-all
            duration-200


            ${
              isActive

              ?

              "bg-white text-emerald-700 font-semibold"

              :

              "hover:bg-white/10"

            }


            `

            }


            >


              {item.icon}


              <span>

                {item.name}

              </span>



            </NavLink>



          ))
        }




      </nav>







      {/* Logout */}

      <div

      className="
      p-4
      border-t
      border-white/10
      flex-shrink-0
      "

      >



        <button

        onClick={logout}


        className="
        w-full

        flex
        items-center
        justify-center

        gap-3

        bg-red-500

        hover:bg-red-600

        transition

        rounded-xl

        py-3

        font-semibold
        "

        >


          <HiLogout size={20}/>


          Logout



        </button>



      </div>





    </aside>


  );

}


export default Sidebar;

