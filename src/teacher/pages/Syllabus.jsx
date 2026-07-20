// import React, { useState } from "react";
// import {
//   FaBook,
//   FaPlus,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";

// const Syllabus = () => {
//   const [chapters, setChapters] = useState([
//     {
//       id: 1,
//       chapter: "Real Numbers",
//       description: "Introduction to numbers and properties",
//       status: "Completed",
//       date: "12-07-2026",
//     },
//     {
//       id: 2,
//       chapter: "Polynomials",
//       description: "Polynomial equations and graphs",
//       status: "In Progress",
//       date: "20-07-2026",
//     },
//   ]);

//   const [form, setForm] = useState({
//     chapter: "",
//     description: "",
//     date: "",
//     status: "Pending",
//   });

//   const addChapter = () => {
//     if (!form.chapter) return;

//     setChapters([
//       ...chapters,
//       {
//         id: Date.now(),
//         ...form,
//       },
//     ]);

//     setForm({
//       chapter: "",
//       description: "",
//       date: "",
//       status: "Pending",
//     });
//   };

//   const deleteChapter = (id) => {
//     setChapters(
//       chapters.filter((item) => item.id !== id)
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-indigo-700">
//           Syllabus Management
//         </h1>

//         <p className="text-gray-600">
//           Manage subject syllabus and chapter completion
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <select className="inputStyle">
//           <option>Select Class</option>
//           <option>Class 10-A</option>
//         </select>

//         <select className="inputStyle">
//           <option>Select Subject</option>
//           <option>Mathematics</option>
//         </select>

//         <select className="inputStyle">
//           <option>Academic Year</option>
//           <option>2026-27</option>
//         </select>
//       </div>

//       {/* Current Syllabus */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
//         <SyllabusCard
//           title="Subject"
//           value="Mathematics"
//         />

//         <SyllabusCard
//           title="Class"
//           value="10-A"
//         />

//         <SyllabusCard
//           title="Progress"
//           value="75% Completed"
//         />
//       </div>

//       {/* Add Chapter */}
//       <div className="bg-white rounded-xl shadow p-6 mt-6">
//         <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
//           <FaPlus />
//           Add Chapter
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//           <input
//             placeholder="Chapter Name"
//             className="inputStyle"
//             value={form.chapter}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 chapter: e.target.value,
//               })
//             }
//           />

//           <input
//             type="date"
//             className="inputStyle"
//             value={form.date}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 date: e.target.value,
//               })
//             }
//           />

//           <textarea
//             placeholder="Description"
//             className="inputStyle md:col-span-2 h-28"
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
//             value={form.status}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 status: e.target.value,
//               })
//             }
//           >
//             <option>Completed</option>
//             <option>Pending</option>
//             <option>In Progress</option>
//           </select>
//         </div>

//         <button
//           onClick={addChapter}
//           className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl flex gap-2 items-center hover:bg-indigo-700"
//         >
//           <FaPlus />
//           Add Chapter
//         </button>
//       </div>

//       {/* Desktop Table */}
//       <div className="hidden md:block bg-white rounded-xl shadow mt-6 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-indigo-600 text-white">
//             <tr>
//               <th className="p-4 text-left">Chapter</th>
//               <th className="p-4 text-left">Description</th>
//               <th className="p-4">Status</th>
//               <th className="p-4">Completion Date</th>
//               <th className="p-4">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {chapters.map((item) => (
//               <tr
//                 key={item.id}
//                 className="border-b hover:bg-indigo-50"
//               >
//                 <td className="p-4 font-medium">
//                   {item.chapter}
//                 </td>

//                 <td className="p-4">
//                   {item.description}
//                 </td>

//                 <td className="p-4 text-center">
//                   <StatusBadge status={item.status} />
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.date}
//                 </td>

//                 <td className="p-4 flex justify-center gap-3">
//                   <button className="text-blue-600">
//                     <FaEdit />
//                   </button>

//                   <button
//                     onClick={() => deleteChapter(item.id)}
//                     className="text-red-600"
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="md:hidden mt-6 space-y-4">
//         {chapters.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-xl shadow p-5"
//           >
//             <h3 className="text-lg font-bold text-indigo-700">
//               {item.chapter}
//             </h3>

//             <p className="text-gray-600 mt-2">
//               {item.description}
//             </p>

//             <div className="mt-3">
//               <StatusBadge status={item.status} />
//             </div>

//             <p className="mt-2">
//               Completion:
//               <b className="ml-2">
//                 {item.date}
//               </b>
//             </p>

//             <div className="flex gap-4 mt-4">
//               <button className="text-blue-600">
//                 <FaEdit />
//               </button>

//               <button
//                 onClick={() => deleteChapter(item.id)}
//                 className="text-red-600"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const SyllabusCard = ({ title, value }) => (
//   <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
//     <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
//       <FaBook />
//     </div>

//     <div>
//       <p className="text-gray-500">{title}</p>

//       <h3 className="font-bold text-lg">
//         {value}
//       </h3>
//     </div>
//   </div>
// );

// const StatusBadge = ({ status }) => {
//   const colors = {
//     Completed: "bg-green-100 text-green-700",
//     Pending: "bg-yellow-100 text-yellow-700",
//     "In Progress": "bg-blue-100 text-blue-700",
//   };

//   return (
//     <span
//       className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}
//     >
//       {status}
//     </span>
//   );
// };

// export default Syllabus;

import React, {
    useEffect,
    useState
} from "react";


import {
    FaBook,
    FaPlus,
    FaEdit,
    FaTrash
} from "react-icons/fa";


import API from "../../utils/axiosInstance.js";



const Syllabus = () => {


    const [options,setOptions] = useState([]);

    const [syllabus,setSyllabus] = useState([]);


    const [loading,setLoading] = useState(false);


    const [editId,setEditId] = useState(null);


    const [editStatus,setEditStatus] = useState("");



    const [form,setForm] = useState({

        session_id:"",
        class_id:"",
        section_id:"",
        subject_id:"",

        chapter_title:"",
        description:"",
        completion_date:"",
        status:"Pending"

    });






    // =========================
    // LOAD DATA
    // =========================


    useEffect(()=>{

        fetchOptions();

        fetchSyllabus();


    },[]);






    const fetchOptions = async()=>{


        try{


            const res =
            await API.get(
                "/teacher/syllabus/options"
            );


            setOptions(
                res.data.data || []
            );


        }
        catch(error){

            console.log(error);

        }

    };






    const fetchSyllabus = async()=>{


        try{


            const res =
            await API.get(
                "/teacher/syllabus"
            );


            setSyllabus(
                res.data.data || []
            );


        }
        catch(error){

            console.log(error);

        }

    };

const updateStatus = async()=>{


try{


await API.patch(

`/teacher/syllabus/${editId}`,

{

status:editStatus

}

);



alert(
"Status Updated"
);



setEditId(null);


fetchSyllabus();



}
catch(error){


console.log(error);


alert(
"Update Failed"
);


}


};
// =========================
// DELETE API
// =========================
const deleteSyllabus = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this syllabus?"
);



if(!confirmDelete)
return;



try{


await API.delete(

`/teacher/syllabus/${id}`

);



alert(
"Deleted Successfully"
);



fetchSyllabus();



}
catch(error){


console.log(error);


alert(
"Delete Failed"
);


}



};






    // =========================
    // HANDLE INPUT
    // =========================


    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });


    };








    // =========================
    // CREATE SYLLABUS
    // =========================


    const submitSyllabus = async()=>{


        if(
            !form.session_id ||
            !form.class_id ||
            !form.section_id ||
            !form.subject_id ||
            !form.chapter_title
        ){

            alert(
                "Please fill required fields"
            );

            return;

        }



        try{


            setLoading(true);


            await API.post(
                "/teacher/syllabus",
                form
            );



            alert(
                "Syllabus Uploaded"
            );



            setForm({

                session_id:"",
                class_id:"",
                section_id:"",
                subject_id:"",

                chapter_title:"",
                description:"",
                completion_date:"",
                status:"Pending"

            });



            fetchSyllabus();



        }
        catch(error){


            console.log(error);


            alert(
                error.response?.data?.message ||
                "Upload Failed"
            );


        }
        finally{


            setLoading(false);


        }


    };









    // =========================
    // FILTER DROPDOWN DATA
    // =========================



    const classes = [

        ...new Map(

            options.map(item=>[

                item.class_id,
                item

            ])

        ).values()

    ];




    const sections = [

        ...new Map(

            options
            .filter(

                item=>

                item.class_id ==
                form.class_id

            )
            .map(item=>[

                item.section_id,
                item

            ])

        ).values()

    ];





    const subjects = [

        ...new Map(

            options
            .filter(

                item=>

                item.class_id ==
                form.class_id
                &&
                item.section_id ==
                form.section_id

            )
            .map(item=>[

                item.subject_id,
                item

            ])

        ).values()

    ];






    const sessions = [

        ...new Map(

            options
            .filter(

                item=>

                item.class_id ==
                form.class_id

            )
            .map(item=>[

                item.session_id,
                item

            ])

        ).values()

    ];






    const completed =
    syllabus.filter(
        item=>
        item.status==="Completed"
    ).length;



    const progress =
    syllabus.length
    ?
    Math.round(
        completed /
        syllabus.length *
        100
    )
    :
    0;





return (

<div className="
min-h-screen
bg-gray-100
p-5
">



<div className="mb-6">


<h1 className="
text-3xl
font-bold
text-indigo-700
">

Syllabus Management

</h1>


<p className="
text-gray-600
">

Manage your subject syllabus

</p>


</div>





{/* CARDS */}

<div className="
grid
md:grid-cols-3
gap-5
">


<SyllabusCard

title="Total Chapters"

value={syllabus.length}

/>



<SyllabusCard

title="Completed"

value={completed}

/>




<SyllabusCard

title="Progress"

value={`${progress}%`}

/>


</div>






{/* FORM */}


<div className="
bg-white
shadow
rounded-xl
p-6
mt-6
">


<h2 className="
text-xl
font-bold
text-indigo-700
flex
items-center
gap-2
">

<FaPlus/>

Add Chapter

</h2>




<div className="
grid
md:grid-cols-2
gap-4
mt-5
">



<select

name="class_id"

value={form.class_id}

onChange={handleChange}

className="inputStyle"

>

<option>

Select Class

</option>


{

classes.map(item=>(

<option

key={item.class_id}

value={item.class_id}

>

{item.class_name}

</option>


))

}


</select>





<select

name="section_id"

value={form.section_id}

onChange={handleChange}

className="inputStyle"

>

<option>

Select Section

</option>


{

sections.map(item=>(

<option

key={item.section_id}

value={item.section_id}

>

{item.section_name}

</option>

))

}


</select>






<select

name="subject_id"

value={form.subject_id}

onChange={handleChange}

className="inputStyle"

>

<option>

Select Subject

</option>


{

subjects.map(item=>(

<option

key={item.subject_id}

value={item.subject_id}

>

{item.subject_name}

</option>

))

}


</select>





<select

name="session_id"

value={form.session_id}

onChange={handleChange}

className="inputStyle"

>

<option>

Select Session

</option>


{

sessions.map(item=>(

<option

key={item.session_id}

value={item.session_id}

>

{item.session_name}

</option>

))

}


</select>






<input

name="chapter_title"

placeholder="Chapter Title"

value={form.chapter_title}

onChange={handleChange}

className="inputStyle"

/>





<input

type="date"

name="completion_date"

value={form.completion_date}

onChange={handleChange}

className="inputStyle"

/>






<textarea

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

className="
inputStyle
md:col-span-2
h-28
"

/>





<select

name="status"

value={form.status}

onChange={handleChange}

className="inputStyle"

>

<option>
Pending
</option>

<option>
In Progress
</option>

<option>
Completed
</option>


</select>



</div>





<button

onClick={submitSyllabus}

disabled={loading}

className="
mt-5
bg-indigo-600
text-white
px-6
py-3
rounded-xl
flex
gap-2
items-center
"

>

<FaPlus/>

{
loading
?
"Saving..."
:
"Upload Syllabus"
}


</button>



</div>
{/* =========================
    DESKTOP TABLE
========================= */}


<div className="
hidden
md:block
bg-white
shadow
rounded-xl
mt-6
overflow-hidden
">


<table className="w-full">


<thead className="
bg-indigo-600
text-white
">

<tr>

<th className="p-4 text-left">
Class
</th>


<th className="p-4 text-left">
Subject
</th>


<th className="p-4 text-left">
Chapter
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Date
</th>


<th className="p-4">
Action
</th>


</tr>

</thead>



<tbody>


{

syllabus.length === 0 ?

<tr>

<td

colSpan="6"

className="
text-center
p-5
text-gray-500
"

>

No syllabus uploaded

</td>

</tr>


:


syllabus.map(item=>(


<tr

key={item.id}

className="
border-b
hover:bg-indigo-50
"

>


<td className="p-4">


{item.class_name}

</td>



<td className="p-4">


{item.subject_name}


</td>



<td className="p-4">


<div className="font-semibold">

{item.chapter_title}

</div>


<p className="
text-sm
text-gray-500
">

{item.description}

</p>


</td>



<td className="p-4 text-center">


<StatusBadge

status={item.status}

/>


</td>



<td className="p-4 text-center">


{
item.completion_date
?
new Date(
item.completion_date
)
.toLocaleDateString()
:
"-"
}


</td>




<td className="
p-4
flex
justify-center
gap-3
">


<button

onClick={()=>{

setEditId(item.id);

setEditStatus(item.status);

}}

className="
text-blue-600
"

>

<FaEdit/>

</button>



<button

onClick={()=>deleteSyllabus(item.id)}

className="
text-red-600
"

>

<FaTrash/>

</button>



</td>



</tr>


))


}



</tbody>


</table>



</div>







{/* =========================
    MOBILE CARDS
========================= */}



<div className="
md:hidden
mt-6
space-y-4
">


{

syllabus.map(item=>(


<div

key={item.id}

className="
bg-white
rounded-xl
shadow
p-5
"

>


<h3 className="
text-lg
font-bold
text-indigo-700
">

{item.chapter_title}

</h3>



<p className="
text-gray-600
mt-2
">

{item.description}

</p>



<div className="mt-3">

<StatusBadge

status={item.status}

/>

</div>




<p className="
mt-3
text-sm
">

Class:

<b className="ml-2">

{item.class_name}

</b>

</p>




<p className="
text-sm
">

Subject:

<b className="ml-2">

{item.subject_name}

</b>

</p>




<p className="
text-sm
">

Date:

<b className="ml-2">

{
item.completion_date
?
new Date(
item.completion_date
)
.toLocaleDateString()
:
"-"
}

</b>

</p>





<div className="
flex
gap-5
mt-4
">


<button

onClick={()=>{

setEditId(item.id);

setEditStatus(item.status);

}}

className="
text-blue-600
"

>

<FaEdit/>

</button>




<button

onClick={()=>deleteSyllabus(item.id)}

className="
text-red-600
"

>

<FaTrash/>

</button>



</div>



</div>


))


}



</div>







{/* =========================
    EDIT STATUS MODAL
========================= */}



{

editId &&


<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-xl
p-6
w-96
">


<h2 className="
text-xl
font-bold
mb-4
text-indigo-700
">

Update Status

</h2>




<select

value={editStatus}

onChange={(e)=>
setEditStatus(
e.target.value
)
}

className="inputStyle"

>


<option>
Pending
</option>


<option>
In Progress
</option>


<option>
Completed
</option>


</select>




<div className="
flex
gap-3
mt-5
">


<button

onClick={()=>{
setEditId(null)
}}

className="
px-4
py-2
bg-gray-200
rounded-lg
"

>

Cancel

</button>




<button

onClick={updateStatus}

className="
px-4
py-2
bg-indigo-600
text-white
rounded-lg
"

>

Update

</button>



</div>


</div>


</div>


}



</div>

);

};

// =========================
// UPDATE STATUS API
// =========================



// =========================
// CARD COMPONENT
// =========================


const SyllabusCard = ({
title,
value
})=>{


return (

<div className="
bg-white
rounded-xl
shadow
p-5
flex
items-center
gap-4
">


<div className="
bg-indigo-100
text-indigo-600
p-4
rounded-full
">

<FaBook/>

</div>



<div>


<p className="
text-gray-500
">

{title}

</p>


<h2 className="
text-xl
font-bold
">

{value}

</h2>


</div>


</div>

);


};
// =========================
// STATUS BADGE
// =========================


const StatusBadge=({
status
})=>{


const colors={

Completed:
"bg-green-100 text-green-700",


Pending:
"bg-yellow-100 text-yellow-700",


"In Progress":
"bg-blue-100 text-blue-700"

};



return (

<span className={`
px-3
py-1
rounded-full
text-sm
font-medium
${colors[status]}
`}>

{status}

</span>


);


};
export default Syllabus;