// import React, { useState } from "react";
// import {
//   FaBullhorn,
//   FaEdit,
//   FaTrash,
//   FaPaperPlane,
//   FaSave,
// } from "react-icons/fa";

// const Notices = () => {
//   const [notices, setNotices] = useState([
//     {
//       id: 1,
//       title: "Parent Meeting",
//       description:
//         "Parents are requested to attend the monthly meeting.",
//       audience: "All Students",
//       priority: "Important",
//       date: "09 July 2026",
//     },
//     {
//       id: 2,
//       title: "Assignment Submission",
//       description:
//         "Submit mathematics assignment before Friday.",
//       audience: "Class Specific",
//       priority: "Normal",
//       date: "08 July 2026",
//     },
//   ]);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     audience: "All Students",
//     priority: "Normal",
//   });

//   const addNotice = () => {
//     if (!form.title) return;

//     setNotices([
//       {
//         id: Date.now(),
//         ...form,
//         date: new Date().toLocaleDateString(),
//       },
//       ...notices,
//     ]);

//     setForm({
//       title: "",
//       description: "",
//       audience: "All Students",
//       priority: "Normal",
//     });
//   };

//   const deleteNotice = (id) => {
//     setNotices(
//       notices.filter((notice) => notice.id !== id)
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-indigo-700">
//           Notice Board
//         </h1>

//         <p className="text-gray-600">
//           Create and manage school notices
//         </p>
//       </div>

//       {/* Create Notice */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
//           <FaBullhorn />
//           Create Notice
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//           <input
//             className="inputStyle"
//             placeholder="Notice Title"
//             value={form.title}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 title: e.target.value,
//               })
//             }
//           />

//           <select
//             className="inputStyle"
//             value={form.audience}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 audience: e.target.value,
//               })
//             }
//           >
//             <option>All Students</option>
//             <option>Class Specific</option>
//             <option>Parents</option>
//           </select>

//           <textarea
//             className="inputStyle md:col-span-2 h-32"
//             placeholder="Notice Description"
//             value={form.description}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 description: e.target.value,
//               })
//             }
//           />

//           <select
//             className="inputStyle"
//             value={form.priority}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 priority: e.target.value,
//               })
//             }
//           >
//             <option>Normal</option>
//             <option>Important</option>
//             <option>Urgent</option>
//           </select>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 mt-5">
//           <button
//             onClick={addNotice}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700"
//           >
//             <FaPaperPlane />
//             Publish Notice
//           </button>

//           <button className="bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
//             <FaSave />
//             Save Draft
//           </button>
//         </div>
//       </div>

//       {/* Notice List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
//         {notices.map((notice) => (
//           <div
//             key={notice.id}
//             className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
//           >
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-bold text-indigo-700">
//                 {notice.title}
//               </h3>

//               <PriorityBadge priority={notice.priority} />
//             </div>

//             <p className="text-gray-500 text-sm mt-2">
//               {notice.date}
//             </p>

//             <p className="text-gray-700 mt-4">
//               {notice.description}
//             </p>

//             <div className="mt-4 text-sm">
//               Audience:
//               <span className="font-semibold ml-2">
//                 {notice.audience}
//               </span>
//             </div>

//             <div className="flex gap-4 mt-5">
//               <button className="text-blue-600 flex items-center gap-1">
//                 <FaEdit />
//                 Edit
//               </button>

//               <button
//                 onClick={() => deleteNotice(notice.id)}
//                 className="text-red-600 flex items-center gap-1"
//               >
//                 <FaTrash />
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const PriorityBadge = ({ priority }) => {
//   const colors = {
//     Normal: "bg-gray-100 text-gray-700",
//     Important: "bg-yellow-100 text-yellow-700",
//     Urgent: "bg-red-100 text-red-700",
//   };

//   return (
//     <span
//       className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[priority]}`}
//     >
//       {priority}
//     </span>
//   );
// };

// export default Notices;
import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaTrash,
  FaPaperPlane,
} from "react-icons/fa";

import API from "../../utils/axiosInstance";


const Notices = () => {


  const [assignedClasses, setAssignedClasses] = useState([]);

  const [notices, setNotices] = useState([]);


  const [selectedClass, setSelectedClass] = useState("");

  const [selectedSection, setSelectedSection] = useState("");


  const [form, setForm] = useState({
    title: "",
    description: "",
  });



  useEffect(() => {

    fetchAssignedClasses();

    fetchNotices();

  }, []);





  // Fetch teacher assigned classes

  const fetchAssignedClasses = async () => {

    try {

      const res = await API.get(
        "/teacher/notices/assigned-classes"
      );
        console.log(
            "ASSIGNED CLASS RESPONSE:",
            res.data
        );

      setAssignedClasses(
        res.data.data
      );


    } catch (error) {

      console.log(
        "Assigned Class Error",
        error
      );

    }

  };






  // Fetch teacher notices

  const fetchNotices = async () => {

    try {

      const res = await API.get(
        "/teacher/notices/all"
      );


      setNotices(
        res.data.data
      );


    } catch (error) {

      console.log(
        "Notice Fetch Error",
        error
      );

    }

  };







  // Create Notice

  const handlePublish = async () => {


    if (
      !selectedClass ||
      !selectedSection ||
      !form.title ||
      !form.description
    ) {

      alert(
        "Please fill all fields"
      );

      return;

    }




    try {


      await API.post(
        "/teacher/notices/create",
        {

          // temporary
          // later active session API se ayega

          session_id: 1,

          class_id: selectedClass,

          section_id: selectedSection,

          title: form.title,

          description: form.description,

        }
      );



      setForm({
        title:"",
        description:""
      });


      setSelectedClass("");

      setSelectedSection("");



      fetchNotices();



    } catch(error){

      console.log(
        "Create Notice Error",
        error
      );

    }


  };








  // Delete Notice


  const handleDelete = async(id)=>{


    try{


      await API.delete(
        `/teacher/notices/delete/${id}`
      );


      fetchNotices();



    }
    catch(error){

      console.log(
        "Delete Error",
        error
      );

    }


  };









  // unique classes

  const uniqueClasses = [
    ...new Map(
      assignedClasses.map(item => [
        item.class_id,
        item
      ])
    ).values()
  ];







  // sections based on selected class

  const filteredSections =
    assignedClasses.filter(
      item =>
        item.class_id == selectedClass
    );









  return (

    <div className="min-h-screen bg-gray-100 p-4 md:p-6">


      {/* Header */}

      <div className="mb-6">


        <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">

          <FaBullhorn />

          Notice Board

        </h1>


        <p className="text-gray-600 mt-1">

          Create and manage class notices

        </p>


      </div>







      {/* Create Notice */}

      <div className="bg-white rounded-xl shadow p-5 md:p-6">


        <h2 className="text-xl font-bold text-indigo-700">

          Create Notice

        </h2>





        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">



          {/* Class */}

          <select

            value={selectedClass}

            onChange={(e)=>{

              setSelectedClass(
                e.target.value
              );

              setSelectedSection("");

            }}

            className="border rounded-xl p-3 outline-none"

          >

            <option value="">

              Select Class

            </option>


           {
  uniqueClasses.map((item,index)=>(

    <option

      key={`${item.class_id}-${index}`}

      value={item.class_id}

    >

      {item.class_name}

    </option>

  ))
}

          </select>







          {/* Section */}


          <select

            value={selectedSection}

            onChange={(e)=>
              setSelectedSection(
                e.target.value
              )
            }

            className="border rounded-xl p-3 outline-none"

          >


            <option value="">

              Select Section

            </option>



          {
 filteredSections.map((item,index)=>(

   <option

     key={`${item.class_id}-${item.section_id}-${index}`}

     value={item.section_id}

   >

     {item.section_name}

   </option>

 ))
}



          </select>







          {/* Title */}


          <input

            className="border rounded-xl p-3 md:col-span-2"

            placeholder="Notice Title"

            value={form.title}

            onChange={(e)=>

              setForm({

                ...form,

                title:e.target.value

              })

            }

          />







          {/* Description */}


          <textarea

            className="border rounded-xl p-3 h-32 md:col-span-2 resize-none"

            placeholder="Notice Description"

            value={form.description}

            onChange={(e)=>

              setForm({

                ...form,

                description:e.target.value

              })

            }

          />




        </div>






        <button

          onClick={handlePublish}

          className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"

        >

          <FaPaperPlane/>

          Publish Notice


        </button>



      </div>









      {/* Notice List */}



      <div className="mt-8">


        <h2 className="text-xl font-bold text-gray-800 mb-4">

          Published Notices

        </h2>




        {
          notices.length === 0 ?


          (

            <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

              No notices published yet

            </div>


          )


          :


          (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">


            {
              notices.map(notice=>(


                <div

                  key={notice.id}

                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"

                >



                  <h3 className="text-lg font-bold text-indigo-700">

                    {notice.title}

                  </h3>



                  <p className="text-sm text-gray-500 mt-2">

                    {
                      new Date(
                        notice.created_at
                      ).toLocaleDateString()
                    }

                  </p>





                  <p className="text-gray-700 mt-4">

                    {notice.description}

                  </p>






                  <div className="mt-4 text-sm">


                    <p>

                      Class :

                      <span className="font-semibold ml-2">

                        {notice.class_name}

                      </span>

                    </p>



                    <p>

                      Section :

                      <span className="font-semibold ml-2">

                        {notice.section_name}

                      </span>

                    </p>


                  </div>







                  <button

                    onClick={()=>
                      handleDelete(
                        notice.id
                      )
                    }

                    className="mt-5 text-red-600 flex items-center gap-2 hover:text-red-700"

                  >

                    <FaTrash/>

                    Delete

                  </button>



                </div>


              ))
            }


          </div>

          )

        }



      </div>



    </div>

  );

};


export default Notices;