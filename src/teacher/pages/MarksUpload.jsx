// import React, { useState } from "react";
// import {
//   FaUsers,
//   FaChartLine,
//   FaTrophy,
//   FaSave,
//   FaPaperPlane,
// } from "react-icons/fa";

// const MarksUpload = () => {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       roll: "01",
//       name: "Rahul Sharma",
//       marks: "",
//     },
//     {
//       id: 2,
//       roll: "02",
//       name: "Priya Singh",
//       marks: "",
//     },
//     {
//       id: 3,
//       roll: "03",
//       name: "Amit Kumar",
//       marks: "",
//     },
//     {
//       id: 4,
//       roll: "04",
//       name: "Neha Verma",
//       marks: "",
//     },
//   ]);

//   const getGrade = (marks) => {
//     if (marks >= 90) return "A+";
//     if (marks >= 80) return "A";
//     if (marks >= 70) return "B";
//     if (marks >= 60) return "C";
//     if (marks > 0) return "D";
//     return "-";
//   };

//   const handleMarksChange = (id, value) => {
//     setStudents((prev) =>
//       prev.map((student) =>
//         student.id === id ? { ...student, marks: value } : student
//       )
//     );
//   };

//   const totalStudents = students.length;

//   const enteredMarks = students.filter(
//     (student) => student.marks !== ""
//   ).length;

//   const averageMarks =
//     enteredMarks > 0
//       ? Math.round(
//           students.reduce(
//             (sum, s) => sum + Number(s.marks || 0),
//             0
//           ) / enteredMarks
//         )
//       : 0;

//   const highestMarks =
//     students.length > 0
//       ? Math.max(...students.map((s) => Number(s.marks || 0)))
//       : 0;

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-indigo-700">
//           Upload Marks
//         </h1>

//         <p className="text-gray-600 mt-1">
//           Manage student examination marks and performance
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow p-5 grid grid-cols-1 md:grid-cols-5 gap-4">
//         <select className="inputStyle">
//           <option>Select Class</option>
//           <option>10</option>
//           <option>9</option>
//         </select>

//         <select className="inputStyle">
//           <option>Select Section</option>
//           <option>A</option>
//           <option>B</option>
//         </select>

//         <select className="inputStyle">
//           <option>Select Subject</option>
//           <option>Mathematics</option>
//           <option>Science</option>
//         </select>

//         <select className="inputStyle">
//           <option>Select Exam</option>
//           <option>Unit Test</option>
//           <option>Half Yearly</option>
//           <option>Final</option>
//         </select>

//         <input type="date" className="inputStyle" />
//       </div>

//       {/* Statistics */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
//         <StatCard
//           title="Total Students"
//           value={totalStudents}
//           icon={<FaUsers />}
//         />

//         <StatCard
//           title="Marks Entered"
//           value={enteredMarks}
//           icon={<FaChartLine />}
//         />

//         <StatCard
//           title="Average Marks"
//           value={`${averageMarks}%`}
//           icon={<FaChartLine />}
//         />

//         <StatCard
//           title="Highest Marks"
//           value={highestMarks}
//           icon={<FaTrophy />}
//         />
//       </div>

//       {/* Desktop Table */}
//       <div className="hidden md:block bg-white rounded-xl shadow mt-6 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-indigo-600 text-white">
//             <tr>
//               <th className="p-4 text-left">Roll No</th>
//               <th className="p-4 text-left">Student Name</th>
//               <th className="p-4">Maximum Marks</th>
//               <th className="p-4">Obtained Marks</th>
//               <th className="p-4">Grade</th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {students.map((student) => (
//               <tr
//                 key={student.id}
//                 className="border-b hover:bg-indigo-50"
//               >
//                 <td className="p-4">{student.roll}</td>

//                 <td className="p-4 font-medium">
//                   {student.name}
//                 </td>

//                 <td className="p-4 text-center">100</td>

//                 <td className="p-4">
//                   <input
//                     type="number"
//                     value={student.marks}
//                     onChange={(e) =>
//                       handleMarksChange(
//                         student.id,
//                         e.target.value
//                       )
//                     }
//                     className="w-24 border rounded p-2"
//                   />
//                 </td>

//                 <td className="p-4 text-center font-bold">
//                   {getGrade(student.marks)}
//                 </td>

//                 <td className="p-4 text-center">
//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     Active
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="md:hidden mt-6 space-y-4">
//         {students.map((student) => (
//           <div
//             key={student.id}
//             className="bg-white rounded-xl shadow p-5"
//           >
//             <h3 className="font-bold text-lg text-indigo-700">
//               {student.name}
//             </h3>

//             <p className="text-gray-600">
//               Roll No: {student.roll}
//             </p>

//             <div className="mt-4">
//               <label className="text-sm">
//                 Obtained Marks
//               </label>

//               <input
//                 type="number"
//                 value={student.marks}
//                 onChange={(e) =>
//                   handleMarksChange(
//                     student.id,
//                     e.target.value
//                   )
//                 }
//                 className="w-full border rounded-lg p-2 mt-1"
//               />
//             </div>

//             <div className="mt-3">
//               Grade:
//               <span className="font-bold ml-2">
//                 {getGrade(student.marks)}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
//         <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800">
//           <FaSave />
//           Save Draft
//         </button>

//         <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
//           <FaPaperPlane />
//           Submit Marks
//         </button>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ title, value, icon }) => (
//   <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between hover:shadow-lg transition">
//     <div>
//       <p className="text-gray-500">{title}</p>

//       <h2 className="text-2xl font-bold text-indigo-700">
//         {value}
//       </h2>
//     </div>

//     <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-xl">
//       {icon}
//     </div>
//   </div>
// );

// export default MarksUpload;

import { useEffect, useState } from "react";

import {
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaSave,
  FaPaperPlane,
  FaTrash,
} from "react-icons/fa";

import API from "../../utils/axiosInstance";



function MarksUpload(){


const [assignments,setAssignments]=useState([]);
const [examTypes,setExamTypes]=useState([]);

const [selectedClass,setSelectedClass]=useState(null);

const [selectedSection,setSelectedSection]=useState(null);

const [selectedSubject,setSelectedSubject]=useState(null);


const [students,setStudents]=useState([]);


const [examType,setExamType]=useState("");

const [examDate,setExamDate]=useState("");


const [maxMarks,setMaxMarks]=useState(100);


const [marksId,setMarksId]=useState(null);


const [alreadySubmitted,setAlreadySubmitted]=useState(false);


const [loading,setLoading]=useState(false);

const [submitting,setSubmitting]=useState(false);


const [message,setMessage]=useState("");





useEffect(()=>{

fetchOptions();

},[]);






// Load Teacher Subjects


const fetchOptions=async()=>{


try{


const response =
await API.get(
"/teacher/marks/options"
);



console.log(
"MARKS OPTIONS RESPONSE:",
response.data
);



setAssignments(
response.data.data.assignments
);



setExamTypes(
response.data.data.exams
);



}
catch(error){


console.log(
"Marks Options Error:",
error
);


}



};




// unique class


const classes=[

...new Map(

assignments.map(item=>[

item.class_id,

item

])

).values()

];






// sections


const sections=[

...new Map(

assignments

.filter(

item=>

item.class_id === selectedClass?.class_id

)

.map(item=>[

item.section_id,

item

])

).values()

];








// subjects


const subjects=[

...new Map(

assignments

.filter(

item=>

item.class_id === selectedClass?.class_id &&

item.section_id === selectedSection?.section_id

)

.map(item=>[

item.subject_id,

item

])

).values()

];









// Load Students


const loadStudents=async()=>{


if(
!selectedSubject ||
!examType ||
!examDate
){

setMessage(
"Select all fields first"
);

return;

}



try{


setLoading(true);


const response =
await API.get(

"/teacher/marks/students",

{

params:{


class_id:
selectedSubject.class_id,


section_id:
selectedSubject.section_id,


subject_id:
selectedSubject.subject_id,


exam_type_id:
examType,


exam_date:
examDate


}

}

);





setStudents(

(response.data.students || []).map(
student=>({

...student,

marks:"",

remarks:""

})

)

);





setAlreadySubmitted(

response.data.alreadySubmitted

);



setMarksId(

response.data.marks_id

);



}
catch(error){

console.log(error);

setMessage(
"Unable to load students"
);


}
finally{

setLoading(false);

}



};









// marks change


const changeMarks=(id,value)=>{


setStudents(prev=>

prev.map(student=>


student.admission_number===id

?

{

...student,

marks:value

}

:

student


)

);


};







// remarks


const changeRemarks=(id,value)=>{


setStudents(prev=>

prev.map(student=>


student.admission_number===id

?

{

...student,

remarks:value

}

:

student


)

);


};









const getGrade=(marks)=>{


marks=Number(marks);


if(marks>=90)
return "A+";


if(marks>=80)
return "A";


if(marks>=70)
return "B";


if(marks>=60)
return "C";


if(marks>0)
return "D";


return "-";


};









// submit


const submitMarks=async()=>{


try{


setSubmitting(true);



await API.post(

"/teacher/marks",

{


class_id:
selectedSubject.class_id,


section_id:
selectedSubject.section_id,


subject_id:
selectedSubject.subject_id,


exam_type_id:
examType,


exam_date:
examDate,


maximum_marks:
maxMarks,


students

}


);





setMessage(
"Marks submitted successfully"
);



setAlreadySubmitted(true);



}
catch(error){


console.log(error);


setMessage(

error.response?.data?.message ||

"Submit failed"

);


}
finally{


setSubmitting(false);


}


};









// delete


const deleteMarks=async()=>{


const confirmDelete =
window.confirm(
"Delete this exam marks?"
);


if(!confirmDelete)
return;



try{


await API.delete(

`/teacher/marks/${marksId}`

);



setMessage(
"Marks deleted"
);



setStudents([]);

setAlreadySubmitted(false);

setMarksId(null);



}
catch(error){


console.log(error);


}



};








const entered =
students.filter(
s=>s.marks!==""
).length;



const average =

entered

?

Math.round(

students.reduce(

(sum,s)=>

sum+Number(s.marks||0)

,0

)

/entered

)

:

0;





const highest =

students.length

?

Math.max(

...students.map(

s=>Number(s.marks||0)

)

)

:

0;









return(

<div className="space-y-6">





<h1 className="text-3xl font-bold text-indigo-700">

Upload Marks

</h1>





<p className="text-gray-600">

Manage examination marks

</p>







{
message &&

<div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl">

{message}

</div>

}







{/* FILTER */}


<div className="bg-white rounded-xl shadow p-5 grid md:grid-cols-6 gap-4">



<select
className="border p-3 rounded-xl"

onChange={(e)=>{


const value=classes[e.target.value];

setSelectedClass(value);

setSelectedSection(null);

setSelectedSubject(null);


}}

>


<option>Select Class</option>


{

classes.map((item,index)=>(

<option key={index} value={index}>

{item.class_name}

</option>

))

}


</select>







<select

disabled={!selectedClass}

className="border p-3 rounded-xl"

onChange={(e)=>{


const value=sections[e.target.value];

setSelectedSection(value);

setSelectedSubject(null);


}}

>


<option>Select Section</option>


{

sections.map((item,index)=>(

<option key={index} value={index}>

{item.section_name}

</option>

))

}


</select>









<select

disabled={!selectedSection}

className="border p-3 rounded-xl"

onChange={(e)=>{


setSelectedSubject(

subjects[e.target.value]

);


}}

>


<option>Select Subject</option>


{

subjects.map((item,index)=>(

<option key={index} value={index}>

{item.subject_name}

</option>

))

}


</select>







<select

className="border p-3 rounded-xl"

value={examType}

onChange={
e=>setExamType(e.target.value)
}

>


<option value="">

Select Exam

</option>


{

examTypes.map(exam=>(


<option

key={exam.id}

value={exam.id}

>

{exam.exam_name}

</option>


))


}


</select>







<input

type="date"

className="border p-3 rounded-xl"

value={examDate}

onChange={
e=>setExamDate(e.target.value)
}

/>







<input

type="number"

className="border p-3 rounded-xl"

value={maxMarks}

onChange={
e=>setMaxMarks(e.target.value)
}

/>


</div>









<button

onClick={loadStudents}

className="bg-indigo-700 text-white px-6 py-3 rounded-xl"

>

{

loading

?

"Loading..."

:

"Load Students"

}


</button>









{/* STATS */}



<div className="grid md:grid-cols-4 gap-5">



<Stat title="Students" value={students.length} icon={<FaUsers/>}/>


<Stat title="Entered" value={entered} icon={<FaChartLine/>}/>


<Stat title="Average" value={`${average}%`} icon={<FaChartLine/>}/>


<Stat title="Highest" value={highest} icon={<FaTrophy/>}/>



</div>









{
students.length>0 &&


<div className="bg-white rounded-xl shadow overflow-hidden">


<table className="w-full">


<thead className="bg-indigo-600 text-white">

<tr>

<th className="p-3">
Roll
</th>

<th>
Name
</th>

<th>
Marks
</th>


<th>
Grade
</th>


<th>
Remarks
</th>

</tr>

</thead>



<tbody>


{

students.map(student=>(


<tr
key={student.admission_number}
className="border-b"
>


<td className="p-3">

{student.roll_number}

</td>


<td>

{student.student_name}

</td>



<td>

<input

disabled={alreadySubmitted}

type="number"

value={student.marks}

onChange={
e=>

changeMarks(

student.admission_number,

e.target.value

)

}

className="border rounded p-2 w-24"

/>

</td>




<td className="font-bold">

{
getGrade(student.marks)
}

</td>




<td>

<input

disabled={alreadySubmitted}

value={student.remarks}

onChange={

e=>

changeRemarks(

student.admission_number,

e.target.value

)

}

className="border rounded p-2"

/>

</td>



</tr>


))

}



</tbody>


</table>


</div>


}









{
students.length>0 &&


<div className="flex gap-4">


{

!alreadySubmitted &&


<button

onClick={submitMarks}

disabled={submitting}

className="bg-indigo-700 text-white px-6 py-3 rounded-xl flex gap-2 items-center"

>

<FaPaperPlane/>

{

submitting?

"Submitting":

"Submit Marks"

}

</button>

}






{

alreadySubmitted &&


<button

onClick={deleteMarks}

className="bg-red-600 text-white px-6 py-3 rounded-xl flex gap-2 items-center"

>

<FaTrash/>

Delete Marks

</button>


}



</div>


}





</div>

);



}




const Stat=({title,value,icon})=>(

<div className="bg-white shadow rounded-xl p-5 flex justify-between">

<div>

<p className="text-gray-500">

{title}

</p>

<h2 className="text-2xl font-bold">

{value}

</h2>

</div>


<div className="text-indigo-600 text-xl">

{icon}

</div>


</div>

);


export default MarksUpload;