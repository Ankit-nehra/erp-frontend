import React, { useState } from "react";
import {
  FaUpload,
  FaFilePdf,
  FaDownload,
  FaEye,
  FaTrash,
} from "react-icons/fa";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Algebra Notes",
      subject: "Mathematics",
      className: "10-A",
      chapter: "Polynomials",
      date: "09 July 2026",
    },
    {
      id: 2,
      title: "Physics Chapter 1",
      subject: "Science",
      className: "10-A",
      chapter: "Motion",
      date: "05 July 2026",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    subject: "",
    className: "",
    chapter: "",
    description: "",
    file: null,
  });

  const uploadNotes = () => {
    if (!form.title) return;

    setNotes([
      {
        id: Date.now(),
        title: form.title,
        subject: form.subject,
        className: form.className,
        chapter: form.chapter,
        date: new Date().toLocaleDateString(),
      },
      ...notes,
    ]);

    setForm({
      title: "",
      subject: "",
      className: "",
      chapter: "",
      description: "",
      file: null,
    });
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Study Notes
        </h1>

        <p className="text-gray-600">
          Upload and manage study materials
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-indigo-700 flex gap-2 items-center">
          <FaUpload />
          Upload Notes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <input
            className="inputStyle"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <input
            className="inputStyle"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({
                ...form,
                subject: e.target.value,
              })
            }
          />

          <input
            className="inputStyle"
            placeholder="Class"
            value={form.className}
            onChange={(e) =>
              setForm({
                ...form,
                className: e.target.value,
              })
            }
          />

          <input
            className="inputStyle"
            placeholder="Chapter"
            value={form.chapter}
            onChange={(e) =>
              setForm({
                ...form,
                chapter: e.target.value,
              })
            }
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx,image/*"
            className="border rounded-lg p-3"
            onChange={(e) =>
              setForm({
                ...form,
                file: e.target.files[0],
              })
            }
          />

          <textarea
            className="inputStyle md:col-span-2 h-28"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />
        </div>

        <button
          onClick={uploadNotes}
          className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl flex gap-2 items-center hover:bg-indigo-700"
        >
          <FaUpload />
          Upload Notes
        </button>
      </div>

      {/* Notes Library */}
      <h2 className="text-2xl font-bold text-indigo-700 mt-8 mb-4">
        Notes Library
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaFilePdf />
              </div>

              <h3 className="font-bold text-lg text-indigo-700">
                {note.title}
              </h3>
            </div>

            <div className="mt-4 space-y-1 text-gray-600">
              <p>
                Subject:
                <b className="ml-2">{note.subject}</b>
              </p>

              <p>
                Class:
                <b className="ml-2">{note.className}</b>
              </p>

              <p>
                Chapter:
                <b className="ml-2">{note.chapter}</b>
              </p>

              <p>
                Uploaded:
                <b className="ml-2">{note.date}</b>
              </p>
            </div>

            <div className="flex gap-4 mt-5">
              <button className="text-blue-600 flex gap-1 items-center">
                <FaEye />
                View
              </button>

              <button className="text-green-600 flex gap-1 items-center">
                <FaDownload />
                Download
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-600 flex gap-1 items-center"
              >
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 export default Notes;
// import React, { useEffect, useState } from "react";

// import {
//     FaBullhorn,
//     FaPaperPlane,
//     FaTrash
// } from "react-icons/fa";

// import API from "../../utils/axiosInstance";



// const Notices = () => {


//     const [assignedClasses, setAssignedClasses] = useState([]);

//     const [notices, setNotices] = useState([]);


//     const [selectedClass, setSelectedClass] = useState("");

//     const [selectedSection, setSelectedSection] = useState("");



//     const [form, setForm] = useState({

//         title:"",

//         description:""

//     });





//     useEffect(()=>{

//         loadAssignedClasses();

//         loadNotices();

//     },[]);








//     // Get teacher assigned classes

//     const loadAssignedClasses = async()=>{

//         try{


//             const res = await API.get(
//                 "/teacher/notices/assigned-classes"
//             );


//             setAssignedClasses(
//                 res.data.data
//             );


//         }
//         catch(error){

//             console.log(
//                 "Assigned Class Error",
//                 error
//             );

//         }


//     };








//     // Get notices

//     const loadNotices = async()=>{

//         try{


//             const res = await API.get(
//                 "/teacher/notices/all"
//             );


//             setNotices(
//                 res.data.data
//             );


//         }
//         catch(error){

//             console.log(
//                 "Notice Fetch Error",
//                 error
//             );

//         }

//     };










//     // Create Notice

//     const publishNotice = async()=>{


//         if(
//             !selectedClass ||
//             !selectedSection ||
//             !form.title ||
//             !form.description
//         ){

//             alert(
//                 "Please fill all fields"
//             );

//             return;

//         }




//         try{


//             await API.post(

//                 "/teacher/notices/create",

//                 {

//                     session_id:1,

//                     class_id:selectedClass,

//                     section_id:selectedSection,

//                     title:form.title,

//                     description:form.description

//                 }

//             );





//             setForm({

//                 title:"",

//                 description:""

//             });



//             setSelectedClass("");

//             setSelectedSection("");



//             loadNotices();



//         }
//         catch(error){


//             console.log(
//                 "Create Notice Error",
//                 error
//             );


//         }


//     };









//     // Delete Notice


//     const removeNotice = async(id)=>{


//         try{


//             await API.delete(

//                 `/teacher/notices/delete/${id}`

//             );



//             loadNotices();



//         }
//         catch(error){


//             console.log(
//                 "Delete Notice Error",
//                 error
//             );


//         }


//     };










//     // Unique classes

//     const classes = [

//         ...new Map(

//             assignedClasses.map(item=>[

//                 item.class_id,

//                 item

//             ])

//         ).values()

//     ];









//     // Sections according to class

//     const sections =

//     assignedClasses.filter(

//         item=>

//         item.class_id == selectedClass

//     );









//     return (


//         <div className="min-h-screen bg-gray-100 p-4 md:p-6">



//             {/* Header */}

//             <div className="mb-6">


//                 <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">


//                     <FaBullhorn/>

//                     Notice Board


//                 </h1>



//                 <p className="text-gray-600 mt-1">

//                     Create and manage class notices

//                 </p>



//             </div>









//             {/* Create Notice */}


//             <div className="bg-white rounded-xl shadow p-5 md:p-6">


//                 <h2 className="text-xl font-bold text-indigo-700">

//                     Create Notice

//                 </h2>





//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">





//                     {/* Class */}

//                     <select

//                         className="border rounded-xl p-3 outline-none"

//                         value={selectedClass}

//                         onChange={(e)=>{


//                             setSelectedClass(
//                                 e.target.value
//                             );


//                             setSelectedSection("");

//                         }}

//                     >


//                         <option value="">

//                             Select Class

//                         </option>



//                         {

//                         classes.map(item=>(


//                             <option

//                                 key={item.class_id}

//                                 value={item.class_id}

//                             >

//                                 {item.class_name}


//                             </option>


//                         ))

//                         }



//                     </select>









//                     {/* Section */}


//                     <select


//                         className="border rounded-xl p-3 outline-none"


//                         value={selectedSection}


//                         onChange={(e)=>

//                             setSelectedSection(
//                                 e.target.value
//                             )

//                         }


//                     >


//                         <option value="">


//                             Select Section


//                         </option>




//                         {

//                         sections.map(item=>(


//                             <option

//                                 key={item.section_id}

//                                 value={item.section_id}

//                             >

//                                 {item.section_name}

//                             </option>


//                         ))

//                         }



//                     </select>









//                     {/* Title */}


//                     <input


//                         className="border rounded-xl p-3 md:col-span-2"


//                         placeholder="Notice Title"


//                         value={form.title}


//                         onChange={(e)=>

//                             setForm({

//                                 ...form,

//                                 title:e.target.value

//                             })

//                         }


//                     />









//                     {/* Description */}


//                     <textarea


//                         className="border rounded-xl p-3 h-32 md:col-span-2 resize-none"


//                         placeholder="Notice Description"


//                         value={form.description}


//                         onChange={(e)=>

//                             setForm({

//                                 ...form,

//                                 description:e.target.value

//                             })

//                         }


//                     />




//                 </div>







//                 <button


//                     onClick={publishNotice}


//                     className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"


//                 >

//                     <FaPaperPlane/>

//                     Publish Notice


//                 </button>




//             </div>









//             {/* Notices List */}



//             <div className="mt-8">


//                 <h2 className="text-xl font-bold text-gray-800 mb-4">

//                     My Notices

//                 </h2>







//                 {

//                 notices.length === 0 ?


//                 (


//                     <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">


//                         No notices found


//                     </div>


//                 )


//                 :



//                 (


//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">


//                     {

//                     notices.map(notice=>(


//                         <div


//                             key={notice.id}


//                             className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"


//                         >




//                             <h3 className="font-bold text-lg text-indigo-700">


//                                 {notice.title}


//                             </h3>





//                             <p className="text-gray-500 text-sm mt-2">


//                                 {new Date(

//                                     notice.created_at

//                                 ).toLocaleDateString()}


//                             </p>







//                             <p className="text-gray-700 mt-4">


//                                 {notice.description}


//                             </p>







//                             <div className="mt-4 text-sm">


//                                 <p>


//                                     Class:


//                                     <span className="font-semibold ml-2">


//                                         {notice.class_name}


//                                     </span>


//                                 </p>




//                                 <p>


//                                     Section:


//                                     <span className="font-semibold ml-2">


//                                         {notice.section_name}


//                                     </span>


//                                 </p>



//                             </div>








//                             <button


//                                 onClick={()=>removeNotice(notice.id)}


//                                 className="mt-5 text-red-600 flex items-center gap-2 hover:text-red-700"


//                             >


//                                 <FaTrash/>


//                                 Delete


//                             </button>






//                         </div>


//                     ))

//                     }



//                 </div>


//                 )

//                 }



//             </div>





//         </div>


//     );

// };



// export default Notices;