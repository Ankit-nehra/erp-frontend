
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
  HiSpeakerphone,
  HiHome,
  HiUserGroup
} from "react-icons/hi";


function Sidebar({ mobile = false, setOpenSidebar }) {


  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("principalToken");

    navigate("/principal/login");

  };



  const menu = [

    {
      name:"Dashboard",
      icon:<HiHome size={22}/>,
      path:"/principal"
    },

    {
      name:"Students",
      icon:<HiUserGroup size={22}/>,
      path:"/principal/students"
    },

    {
      name:"Teachers",
      icon:<HiAcademicCap size={22}/>,
      path:"/principal/teachers"
    },

    {
      name:"Attendance",
      icon:<HiClipboardCheck size={22}/>,
      path:"/principal/attendance"
    },

    {
      name:"Results",
      icon:<HiChartBar size={22}/>,
      path:"/principal/results"
    },

    {
      name:"Syllabus",
      icon:<HiBookOpen size={22}/>,
      path:"/principal/syllabus"
    },

    {
      name:"Timetable",
      icon:<HiCalendar size={22}/>,
      path:"/principal/timetable"
    },

    {
      name:"Notices",
      icon:<HiSpeakerphone size={22}/>,
      path:"/principal/notices"
    },

    {
      name:"Profile",
      icon:<HiUser size={22}/>,
      path:"/principal/profile"
    }

  ];




  return (

    <aside

      className={`
      
      bg-indigo-700
      text-white

      ${
        mobile
        ?
        "fixed left-0 top-0 w-72 h-screen"
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
      border-indigo-500
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
              Principal ERP
            </h2>

            <p className="text-xs text-indigo-200">
              Administration Portal
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
      scrollbar-thumb-indigo-400
      scrollbar-track-indigo-800
      "

      >


        {
          menu.map((item)=>(

<NavLink

key={item.path}

to={item.path}

end={item.path === "/principal"}

onClick={() =>
  mobile && setOpenSidebar(false)
}

className={({isActive}) =>

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
  "bg-white text-indigo-700 font-semibold"
  :
  "hover:bg-indigo-600"
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







      {/* Logout Fixed Bottom */}

      <div

      className="
      p-4
      border-t
      border-indigo-500
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

