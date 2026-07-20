// const results = [
//   {
//     subject: "Mathematics",
//     maxMarks: 100,
//     obtained: 95,
//     grade: "A+",
//   },
//   {
//     subject: "Science",
//     maxMarks: 100,
//     obtained: 91,
//     grade: "A+",
//   },
//   {
//     subject: "English",
//     maxMarks: 100,
//     obtained: 88,
//     grade: "A",
//   },
//   {
//     subject: "Social Science",
//     maxMarks: 100,
//     obtained: 90,
//     grade: "A+",
//   },
//   {
//     subject: "Hindi",
//     maxMarks: 100,
//     obtained: 86,
//     grade: "A",
//   },
//   {
//     subject: "Computer",
//     maxMarks: 100,
//     obtained: 98,
//     grade: "A+",
//   },
// ];

// const total = results.reduce((sum, item) => sum + item.obtained, 0);
// const percentage = ((total / (results.length * 100)) * 100).toFixed(1);

// function Results() {
//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-slate-800">
//           Examination Results
//         </h1>

//         <p className="text-gray-500 mt-2">
//           View your academic performance and subject-wise marks.
//         </p>
//       </div>

//       {/* Summary */}
//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <p className="text-gray-500">Overall Percentage</p>

//           <h2 className="text-4xl font-bold text-emerald-600 mt-3">
//             {percentage}%
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <p className="text-gray-500">Overall Grade</p>

//           <h2 className="text-4xl font-bold text-blue-600 mt-3">
//             A+
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <p className="text-gray-500">Class Rank</p>

//           <h2 className="text-4xl font-bold text-purple-600 mt-3">
//             #12
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <p className="text-gray-500">Status</p>

//           <h2 className="text-3xl font-bold text-green-600 mt-4">
//             PASS
//           </h2>
//         </div>
//       </div>

//       {/* Desktop Table */}
//       <div className="hidden lg:block bg-white rounded-2xl shadow border overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-emerald-700 text-white">
//             <tr>
//               <th className="px-6 py-4 text-left">Subject</th>
//               <th className="px-6 py-4 text-left">Max Marks</th>
//               <th className="px-6 py-4 text-left">Obtained</th>
//               <th className="px-6 py-4 text-left">Grade</th>
//             </tr>
//           </thead>

//           <tbody>
//             {results.map((item) => (
//               <tr
//                 key={item.subject}
//                 className="border-b last:border-none hover:bg-slate-50"
//               >
//                 <td className="px-6 py-4 font-semibold">
//                   {item.subject}
//                 </td>

//                 <td className="px-6 py-4">
//                   {item.maxMarks}
//                 </td>

//                 <td className="px-6 py-4 font-semibold text-emerald-600">
//                   {item.obtained}
//                 </td>

//                 <td className="px-6 py-4">
//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//                     {item.grade}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="grid gap-5 lg:hidden">
//         {results.map((item) => (
//           <div
//             key={item.subject}
//             className="bg-white rounded-2xl shadow border p-5"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="font-bold text-lg">
//                 {item.subject}
//               </h3>

//               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//                 {item.grade}
//               </span>
//             </div>

//             <div className="mt-4">
//               <div className="flex justify-between text-sm mb-2">
//                 <span>
//                   {item.obtained} / {item.maxMarks}
//                 </span>

//                 <span>
//                   {item.obtained}%
//                 </span>
//               </div>

//               <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
//                 <div
//                   className="h-full bg-emerald-500"
//                   style={{
//                     width: `${item.obtained}%`,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Subject Performance */}
//       <div className="bg-white rounded-2xl border shadow-sm p-6">
//         <h2 className="text-xl font-bold mb-6">
//           Subject Performance
//         </h2>

//         <div className="space-y-5">
//           {results.map((item) => (
//             <div key={item.subject}>
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium">
//                   {item.subject}
//                 </span>

//                 <span className="font-semibold">
//                   {item.obtained}%
//                 </span>
//               </div>

//               <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                 <div
//                   className={`h-full rounded-full ${
//                     item.obtained >= 90
//                       ? "bg-green-500"
//                       : item.obtained >= 75
//                       ? "bg-yellow-500"
//                       : "bg-red-500"
//                   }`}
//                   style={{
//                     width: `${item.obtained}%`,
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Performance Note */}
//       <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
//         <h3 className="text-blue-700 font-bold">
//           Performance Summary
//         </h3>

//         <p className="text-gray-600 mt-3 leading-7">
//           Excellent work! Your overall academic performance is
//           outstanding with an average of{" "}
//           <span className="font-semibold">
//             {percentage}%
//           </span>
//           . Keep maintaining your consistency to improve your class
//           rank even further.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Results;

import { useEffect, useState } from "react";

import API from "../../utils/axiosInstance";



function Results(){


const [results,setResults]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

fetchResults();

},[]);





const fetchResults=async()=>{


try{


const response =

await API.get(

"/studentMarks/marks"

);



console.log(

"RESULT RESPONSE",

response.data

);



setResults(

response.data.data || []

);



}
catch(error){


console.log(

error.response?.data || error

);


}
finally{


setLoading(false);


}


};






const getGrade=(marks,max)=>{


const percentage =

(marks/max)*100;



if(percentage>=90)

return "A+";


if(percentage>=80)

return "A";


if(percentage>=70)

return "B";


if(percentage>=60)

return "C";


return "D";


};






const total = results.reduce(

(sum,item)=>

sum + Number(item.obtained_marks)

,0);



const maxTotal = results.reduce(

(sum,item)=>

sum + Number(item.maximum_marks)

,0);



const percentage =

maxTotal

?

((total/maxTotal)*100).toFixed(1)

:

0;





if(loading){

return (

<div className="h-[70vh] flex items-center justify-center">

Loading...

</div>

);

}






return (

<div className="space-y-8">



<div>

<h1 className="text-3xl font-bold text-slate-800">

Examination Results

</h1>


<p className="text-gray-500 mt-2">

View your subject wise academic performance.

</p>

</div>





{/* SUMMARY */}


<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">


<Card

title="Percentage"

value={`${percentage}%`}

color="text-emerald-600"

/>



<Card

title="Total Subjects"

value={results.length}

color="text-blue-600"

/>



<Card

title="Total Marks"

value={`${total}/${maxTotal}`}

color="text-purple-600"

/>



<Card

title="Status"

value="PASS"

color="text-green-600"

/>



</div>







{/* TABLE */}



<div className="bg-white rounded-2xl shadow border overflow-hidden">


<table className="w-full">


<thead className="bg-emerald-700 text-white">


<tr>

<th className="p-4 text-left">
Subject
</th>


<th>
Exam
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

results.map((item,index)=>(


<tr

key={index}

className="border-b hover:bg-slate-50"

>


<td className="p-4 font-semibold">

{item.subject_name}

</td>


<td>

{item.exam_name}

</td>



<td className="text-emerald-600 font-bold">


{item.obtained_marks}

/

{item.maximum_marks}


</td>




<td>


<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

{

getGrade(

item.obtained_marks,

item.maximum_marks

)

}

</span>


</td>




<td>

{item.remarks || "-"}

</td>



</tr>


))


}


</tbody>


</table>


</div>





{/* PERFORMANCE */}


<div className="bg-white rounded-2xl border shadow p-6">


<h2 className="text-xl font-bold mb-5">

Subject Performance

</h2>




<div className="space-y-5">


{

results.map((item,index)=>{


const percent =

(item.obtained_marks/item.maximum_marks)*100;



return (

<div key={index}>


<div className="flex justify-between mb-2">

<span>

{item.subject_name}

</span>


<span className="font-bold">

{percent.toFixed(1)}%

</span>


</div>



<div className="h-3 bg-gray-200 rounded-full">


<div

className="h-full bg-emerald-500 rounded-full"

style={{

width:`${percent}%`

}}

/>


</div>


</div>


)


})


}


</div>


</div>





</div>


);


}





const Card=({title,value,color})=>(

<div className="bg-white rounded-2xl border shadow-sm p-6">


<p className="text-gray-500">

{title}

</p>


<h2 className={`text-4xl font-bold mt-3 ${color}`}>

{value}

</h2>


</div>

);



export default Results;