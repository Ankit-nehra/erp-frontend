// import { useEffect, useMemo, useState } from "react";
// import {
//   FaUsers,
//   FaChartLine,
//   FaEye,
//   FaSearch,
// } from "react-icons/fa";
// import API from "../../utils/axiosInstance";

// function Students() {
//   const [options, setOptions] = useState([]);

//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSection, setSelectedSection] = useState(null);

//   const [students, setStudents] = useState([]);
//   const [summary, setSummary] = useState(null);

//   const [search, setSearch] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   /*
//   |--------------------------------------------------------------------------
//   | Load Teacher Assigned Classes
//   |--------------------------------------------------------------------------
//   */

//   useEffect(() => {
//     fetchOptions();
//   }, []);

//   const fetchOptions = async () => {
//     try {
//       setError("");

//       const response = await API.get("/teacher/students/options");

//       setOptions(response.data.data || []);
//     } catch (err) {
//       console.error(err);
//       setError("Unable to load class information.");
//     }
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Unique Classes
//   |--------------------------------------------------------------------------
//   */

//   const classes = useMemo(() => {
//     return [
//       ...new Map(
//         options.map((item) => [item.class_id, item])
//       ).values(),
//     ];
//   }, [options]);

//   /*
//   |--------------------------------------------------------------------------
//   | Sections
//   |--------------------------------------------------------------------------
//   */

//   const sections = useMemo(() => {
//     if (!selectedClass) return [];

//     return [
//       ...new Map(
//         options
//           .filter(
//             (item) =>
//               item.class_id === selectedClass.class_id
//           )
//           .map((item) => [item.section_id, item])
//       ).values(),
//     ];
//   }, [options, selectedClass]);

//   /*
//   |--------------------------------------------------------------------------
//   | Fetch Students
//   |--------------------------------------------------------------------------
//   */

//   const loadStudents = async (
//     classId,
//     sectionId
//   ) => {
//     try {
//       setLoading(true);
//       setError("");

//       setStudents([]);
//       setSummary(null);

//       const response = await API.get(
//         "/teacher/students",
//         {
//           params: {
//             class_id: classId,
//             section_id: sectionId,
//           },
//         }
//       );

//       setStudents(response.data.students || []);
//       setSummary(response.data.summary || {});
//     } catch (err) {
//       console.error(err);
//       setError("Unable to load students.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | Automatically Load Students
//   |--------------------------------------------------------------------------
//   */

//   useEffect(() => {
//     if (selectedClass && selectedSection) {
//       loadStudents(
//         selectedClass.class_id,
//         selectedSection.section_id
//       );
//     }
//   }, [selectedClass, selectedSection]);

//   /*
//   |--------------------------------------------------------------------------
//   | Search Filter
//   |--------------------------------------------------------------------------
//   */

//   const filteredStudents = students.filter((student) => {
//     const keyword = search.toLowerCase();

//     return (
//       student.student_name
//         ?.toLowerCase()
//         .includes(keyword) ||
//       String(student.roll_number)
//         .toLowerCase()
//         .includes(keyword)
//     );
//   });

//   /*
//   |--------------------------------------------------------------------------
//   | Average Attendance
//   |--------------------------------------------------------------------------
//   */

//   const averageAttendance =
//     summary?.class_attendance ??
//     (
//       students.reduce(
//         (sum, student) =>
//           sum +
//           Number(
//             student.attendance_percentage || 0
//           ),
//         0
//       ) / (students.length || 1)
//     ).toFixed(1);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 lg:p-6 space-y-6">

//       {/* Header */}

//       <div>
//         <h1 className="text-3xl font-bold text-indigo-700">
//           My Students
//         </h1>

//         <p className="text-gray-600 mt-1">
//           View assigned students and attendance
//           details
//         </p>
//       </div>

//       {/* Error */}

//       {error && (
//         <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
//           {error}
//         </div>
//       )}

//       {/* Filters */}

//       <div className="bg-white rounded-xl shadow p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

//         {/* Class */}

//         <select
//           value={
//             selectedClass
//               ? classes.findIndex(
//                   (item) =>
//                     item.class_id ===
//                     selectedClass.class_id
//                 )
//               : ""
//           }
//           className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
//           onChange={(e) => {
//             const value =
//               classes[e.target.value] || null;

//             setSelectedClass(value);
//             setSelectedSection(null);
//             setStudents([]);
//             setSummary(null);
//           }}
//         >
//           <option value="">
//             Select Class
//           </option>

//           {classes.map((item, index) => (
//             <option
//               key={item.class_id}
//               value={index}
//             >
//               {item.class_name}
//             </option>
//           ))}
//         </select>

//         {/* Section */}

//         <select
//           disabled={!selectedClass}
//           value={
//             selectedSection
//               ? sections.findIndex(
//                   (item) =>
//                     item.section_id ===
//                     selectedSection.section_id
//                 )
//               : ""
//           }
//           className="border rounded-xl p-3 disabled:bg-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
//           onChange={(e) => {
//             const value =
//               sections[e.target.value] || null;

//             setSelectedSection(value);
//           }}
//         >
//           <option value="">
//             Select Section
//           </option>

//           {sections.map((item, index) => (
//             <option
//               key={item.section_id}
//               value={index}
//             >
//               {item.section_name}
//             </option>
//           ))}
//         </select>

//         {/* Search */}

//         <div className="relative sm:col-span-2 lg:col-span-1">
//           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

//           <input
//             type="text"
//             placeholder="Search by name or roll no..."
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             className="w-full border rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none"
//           />
//         </div>
//       </div>
//             {/* Loading */}

//       {loading && (
//         <div className="bg-white rounded-xl shadow p-8">
//           <div className="flex flex-col items-center justify-center gap-3">
//             <div className="h-10 w-10 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>

//             <p className="text-gray-600 font-medium">
//               Loading students...
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Statistics */}

//       {!loading && summary && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

//           <StatCard
//             title="Total Students"
//             value={summary.total_students ?? students.length}
//             icon={<FaUsers />}
//           />

//           <StatCard
//             title="Average Attendance"
//             value={`${averageAttendance}%`}
//             icon={<FaChartLine />}
//           />

//           <StatCard
//             title="Selected Class"
//             value={
//               selectedClass && selectedSection
//                 ? `${selectedClass.class_name} - ${selectedSection.section_name}`
//                 : "-"
//             }
//             icon={<FaUsers />}
//           />

//         </div>
//       )}

//       {/* Empty State */}

//       {!loading &&
//         selectedClass &&
//         selectedSection &&
//         students.length === 0 && (
//           <div className="bg-white rounded-xl shadow p-12 text-center">

//             <div className="text-6xl mb-4">
//               📚
//             </div>

//             <h2 className="text-xl font-semibold text-gray-700">
//               No Students Found
//             </h2>

//             <p className="text-gray-500 mt-2">
//               There are no students assigned to this
//               class and section.
//             </p>

//           </div>
//         )}

//       {/* Desktop Table */}

//       {!loading && students.length > 0 && (
//         <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">

//           <div className="overflow-x-auto">

//             <table className="min-w-full">

//               <thead className="bg-indigo-600 text-white">

//                 <tr>

//                   <th className="p-4 text-left whitespace-nowrap">
//                     Roll No
//                   </th>

//                   <th className="p-4 text-left whitespace-nowrap">
//                     Student Name
//                   </th>

//                   <th className="p-4 text-center whitespace-nowrap">
//                     Attendance
//                   </th>

//                   <th className="p-4 text-center whitespace-nowrap">
//                     Action
//                   </th>

//                 </tr>

//               </thead>

//               <tbody>

//                 {filteredStudents.length > 0 ? (

//                   filteredStudents.map((student) => (

//                     <tr
//                       key={
//                         student.admission_number ??
//                         student.roll_number
//                       }
//                       className="border-b hover:bg-indigo-50 transition"
//                     >

//                       <td className="p-4">
//                         {student.roll_number}
//                       </td>

//                       <td className="p-4">

//                         <div>

//                           <p className="font-semibold text-gray-800">
//                             {student.student_name}
//                           </p>

//                           {student.admission_number && (
//                             <p className="text-sm text-gray-500">
//                               Adm No :
//                               {" "}
//                               {student.admission_number}
//                             </p>
//                           )}

//                         </div>

//                       </td>

//                       <td className="p-4 text-center">

//                         <span
//                           className={`px-3 py-1 rounded-full text-sm font-medium ${
//                             Number(student.attendance_percentage) >= 90
//                               ? "bg-green-100 text-green-700"
//                               : Number(student.attendance_percentage) >= 75
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >
//                           {student.attendance_percentage}%
//                         </span>

//                       </td>

//                       <td className="p-4 text-center">

//                         <button
//                           className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
//                         >
//                           <FaEye />

//                           View
//                         </button>

//                       </td>

//                     </tr>

//                   ))

//                 ) : (

//                   <tr>

//                     <td
//                       colSpan={4}
//                       className="text-center py-10 text-gray-500"
//                     >
//                       No matching students found.
//                     </td>

//                   </tr>

//                 )}

//               </tbody>

//             </table>

//           </div>

//         </div>
//       )}

//       {/* Mobile Cards */}

//       {!loading &&
//         students.length > 0 &&
//         filteredStudents.length === 0 && (

//           <div className="md:hidden bg-white rounded-xl shadow p-8 text-center">

//             <p className="text-gray-500">
//               No matching students found.
//             </p>

//           </div>

//       )}
//             {/* Mobile Cards */}

//       {!loading &&
//         students.length > 0 &&
//         filteredStudents.length > 0 && (
//           <div className="md:hidden space-y-4">

//             {filteredStudents.map((student) => (

//               <div
//                 key={
//                   student.admission_number ??
//                   student.roll_number
//                 }
//                 className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-5"
//               >

//                 {/* Header */}

//                 <div className="flex items-center gap-4">

//                   <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">

//                     {student.student_name
//                       ?.charAt(0)
//                       ?.toUpperCase()}

//                   </div>

//                   <div className="flex-1">

//                     <h3 className="font-bold text-lg text-indigo-700">

//                       {student.student_name}

//                     </h3>

//                     <p className="text-gray-500 text-sm">

//                       Roll No : {student.roll_number}

//                     </p>

//                     {student.admission_number && (

//                       <p className="text-gray-400 text-xs">

//                         Admission No :
//                         {" "}
//                         {student.admission_number}

//                       </p>

//                     )}

//                   </div>

//                 </div>

//                 {/* Divider */}

//                 <div className="border-t my-4"></div>

//                 {/* Details */}

//                 <div className="space-y-3">

//                   <div className="flex justify-between">

//                     <span className="text-gray-500">
//                       Attendance
//                     </span>

//                     <span
//                       className={`font-semibold ${
//                         Number(student.attendance_percentage) >= 90
//                           ? "text-green-600"
//                           : Number(student.attendance_percentage) >= 75
//                           ? "text-yellow-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {student.attendance_percentage}%
//                     </span>

//                   </div>

//                   {selectedClass && (

//                     <div className="flex justify-between">

//                       <span className="text-gray-500">
//                         Class
//                       </span>

//                       <span className="font-medium">

//                         {selectedClass.class_name}

//                       </span>

//                     </div>

//                   )}

//                   {selectedSection && (

//                     <div className="flex justify-between">

//                       <span className="text-gray-500">
//                         Section
//                       </span>

//                       <span className="font-medium">

//                         {selectedSection.section_name}

//                       </span>

//                     </div>

//                   )}

//                 </div>

//                 {/* Button */}

//                 <button
//                   className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
//                 >

//                   <FaEye />

//                   View Profile

//                 </button>

//               </div>

//             ))}

//           </div>
//         )}

//     </div>
//   );
// }

// /*
// |--------------------------------------------------------------------------
// | Statistics Card
// |--------------------------------------------------------------------------
// */

// const StatCard = ({
//   title,
//   value,
//   icon,
// }) => (

//   <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-5 flex items-center justify-between">

//     <div>

//       <p className="text-gray-500 text-sm">

//         {title}

//       </p>

//       <h2 className="text-2xl font-bold text-indigo-700 mt-1 break-words">

//         {value}

//       </h2>

//     </div>

//     <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl">

//       {icon}

//     </div>

//   </div>

// );

// export default Students;
import {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    FaUsers,
    FaChartLine,
    FaEye,
    FaSearch,
    FaTimes
} from "react-icons/fa";

import API from "../../utils/axiosInstance";



function Students(){


const [options,setOptions] = useState([]);


const [selectedClass,setSelectedClass] =
useState(null);


const [selectedSection,setSelectedSection] =
useState(null);



const [students,setStudents] =
useState([]);


const [summary,setSummary] =
useState(null);



const [selectedStudent,setSelectedStudent] =
useState(null);



const [search,setSearch] =
useState("");



const [loading,setLoading] =
useState(false);



const [error,setError] =
useState("");





/*
|--------------------------------------------------------------------------
| Fetch Teacher Classes
|--------------------------------------------------------------------------
*/


useEffect(()=>{

fetchOptions();

},[]);





const fetchOptions = async()=>{


try{


setError("");

const response =
await API.get(
"/teacher/students/options"
);



setOptions(
response.data.data || []
);



}
catch(err){


console.log(err);


setError(
"Unable to load class information."
);


}


};









/*
|--------------------------------------------------------------------------
| Unique Classes
|--------------------------------------------------------------------------
*/


const classes = useMemo(()=>{


return [

...new Map(

options.map(item=>[

item.class_id,

item

])

).values()

];


},[options]);









/*
|--------------------------------------------------------------------------
| Sections
|--------------------------------------------------------------------------
*/


const sections = useMemo(()=>{


if(!selectedClass)
return [];



return [

...new Map(


options

.filter(

item=>

item.class_id ===

selectedClass.class_id

)


.map(item=>[

item.section_id,

item

])


).values()


];


},[
options,
selectedClass
]);









/*
|--------------------------------------------------------------------------
| Load Students
|--------------------------------------------------------------------------
*/


const loadStudents = async(

classId,

sectionId

)=>{


try{


setLoading(true);


setStudents([]);


setSummary(null);



const response =

await API.get(

"/teacher/students",

{

params:{


class_id:classId,


section_id:sectionId


}


}

);



setStudents(

response.data.students || []

);



setSummary(

response.data.summary || {}

);



}

catch(err){


console.log(err);


setError(
"Unable to load students."
);


}

finally{


setLoading(false);


}


};









useEffect(()=>{


if(

selectedClass &&

selectedSection

){


loadStudents(

selectedClass.class_id,

selectedSection.section_id

);


}


},[

selectedClass,

selectedSection

]);









/*
|--------------------------------------------------------------------------
| Search Filter
|--------------------------------------------------------------------------
*/


const filteredStudents =

students.filter(student=>{


const keyword =
search.toLowerCase();



return (

student.student_name

?.toLowerCase()

.includes(keyword)



||

String(

student.roll_number

)

.toLowerCase()

.includes(keyword)



);


});









/*
|--------------------------------------------------------------------------
| Attendance
|--------------------------------------------------------------------------
*/


const averageAttendance =


summary?.class_attendance ||


(

students.reduce(

(sum,student)=>


sum +

Number(

student.attendance_percentage || 0

),


0

)

/

(students.length || 1)


).toFixed(1);




return (

<div className="min-h-screen bg-gray-100 p-4 lg:p-6 space-y-6">


{/* Header */}

<div>

<h1 className="text-3xl font-bold text-indigo-700">
My Students
</h1>


<p className="text-gray-600 mt-1">
View assigned students and complete profile details
</p>


</div>






{/* Error */}

{

error &&

<div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4">

{error}

</div>

}








{/* Filters */}


<div className="bg-white rounded-xl shadow p-5 grid grid-cols-1 md:grid-cols-3 gap-4">



{/* Class */}


<select

className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"


value={

selectedClass

?

classes.findIndex(

item=>

item.class_id === selectedClass.class_id

)

:

""

}



onChange={(e)=>{


const value =
classes[e.target.value];


setSelectedClass(value || null);


setSelectedSection(null);


setStudents([]);


setSummary(null);



}}



>


<option value="">
Select Class
</option>


{

classes.map(

(item,index)=>(


<option

key={item.class_id}

value={index}

>

{item.class_name}

</option>


)

)


}



</select>









{/* Section */}


<select


disabled={!selectedClass}


className="border rounded-xl p-3 disabled:bg-gray-100 outline-none focus:ring-2 focus:ring-indigo-500"


value={

selectedSection

?

sections.findIndex(

item=>

item.section_id === selectedSection.section_id

)

:

""

}



onChange={(e)=>{


setSelectedSection(

sections[e.target.value] || null

);


}}


>



<option value="">
Select Section
</option>



{

sections.map(

(item,index)=>(


<option

key={item.section_id}

value={index}

>

{item.section_name}

</option>


)

)


}


</select>









{/* Search */}


<div className="relative">


<FaSearch

className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"

/>



<input


type="text"


placeholder="Search student name or roll number"


value={search}


onChange={e=>setSearch(e.target.value)}


className="w-full border rounded-xl py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-indigo-500"



/>


</div>





</div>









{/* Loading */}


{

loading &&

<div className="bg-white rounded-xl shadow p-8 text-center">


<div className="h-10 w-10 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full animate-spin">


</div>


<p className="mt-3 text-gray-600">

Loading students...

</p>


</div>


}











{/* Statistics */}


{

!loading && summary &&

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


<StatCard

title="Total Students"

value={
summary.total_students
}

icon={<FaUsers/>}

/>



<StatCard

title="Total Boys"

value={
summary.total_boys
}

icon={<FaUsers/>}

/>




<StatCard

title="Total Girls"

value={
summary.total_girls
}

icon={<FaUsers/>}

/>





<StatCard

title="Average Attendance"

value={`${averageAttendance}%`}

icon={<FaChartLine/>}

/>




</div>

}









{/* Desktop Table */}



{

!loading &&

students.length>0 &&


<div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">


<div className="overflow-x-auto">


<table className="min-w-full">


<thead className="bg-indigo-600 text-white">


<tr>


<th className="p-4 text-left">
Photo
</th>



<th className="p-4 text-left">
Roll No
</th>



<th className="p-4 text-left">
Student
</th>



<th className="p-4 text-center">
Attendance
</th>



<th className="p-4 text-center">
Action
</th>



</tr>


</thead>





<tbody>



{

filteredStudents.length>0

?

filteredStudents.map(student=>(



<tr

key={student.admission_number}

className="border-b hover:bg-indigo-50 transition"

>





<td className="p-4">


{

student.profile_photo

?


<img

src={student.profile_photo}

className="w-14 h-14 rounded-full object-cover border"

/>



:


<div

className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold"

>

{

student.student_name
?.charAt(0)

}


</div>


}


</td>








<td className="p-4">

{student.roll_number}

</td>








<td className="p-4">


<p className="font-semibold text-gray-800">

{student.student_name}

</p>


<p className="text-sm text-gray-500">

Admission :
{student.admission_number}

</p>



</td>









<td className="p-4 text-center">


<span

className={`px-3 py-1 rounded-full text-sm font-medium

${

Number(student.attendance_percentage)>=90

?

"bg-green-100 text-green-700"

:

Number(student.attendance_percentage)>=75

?

"bg-yellow-100 text-yellow-700"

:

"bg-red-100 text-red-700"

}

`}

>


{student.attendance_percentage}%


</span>


</td>










<td className="p-4 text-center">


<button


onClick={()=>setSelectedStudent(student)}



className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto"


>


<FaEye/>

View


</button>


</td>





</tr>



))


:


<tr>

<td

colSpan="5"

className="text-center py-10 text-gray-500"

>

No matching students found.

</td>

</tr>


}



</tbody>



</table>


</div>


</div>


}









{/* Mobile Cards */}


{

!loading &&

filteredStudents.length>0 &&


<div className="md:hidden space-y-4">



{

filteredStudents.map(student=>(



<div

key={student.admission_number}

className="bg-white rounded-xl shadow p-5"

>


<div className="flex items-center gap-4">


{

student.profile_photo

?


<img

src={student.profile_photo}

className="w-16 h-16 rounded-full object-cover"

/>


:

<div

className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-700"

>

{student.student_name?.charAt(0)}

</div>


}



<div>


<h3 className="font-bold text-indigo-700 text-lg">

{student.student_name}

</h3>


<p className="text-sm text-gray-500">

Roll No : {student.roll_number}

</p>


</div>



</div>






<div className="border-t my-4"/>



<div className="space-y-2 text-sm">


<p className="flex justify-between">

<span>
Admission
</span>

<b>
{student.admission_number}
</b>

</p>



<p className="flex justify-between">

<span>
Attendance
</span>

<b>
{student.attendance_percentage}%
</b>

</p>



</div>







<button

onClick={()=>setSelectedStudent(student)}

className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-lg flex justify-center items-center gap-2"

>


<FaEye/>

View Profile


</button>



</div>



))


}



</div>


}
{/* Student Profile Modal */}


{

selectedStudent && (


<div

className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"

>


<div

className="bg-white w-full max-w-3xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"

>





{/* Modal Header */}


<div className="sticky top-0 bg-white flex justify-between items-center p-5 border-b z-10">


<h2 className="text-2xl font-bold text-indigo-700">

Student Complete Profile

</h2>



<button


onClick={()=>setSelectedStudent(null)}


className="text-gray-500 hover:text-red-600 text-xl"

>


<FaTimes/>


</button>



</div>








{/* Profile Header */}



<div className="p-6">


<div className="text-center">


{

selectedStudent.profile_photo

?


<img

src={selectedStudent.profile_photo}

alt={selectedStudent.student_name}

className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-indigo-100"

/>



:


<div

className="w-36 h-36 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-5xl font-bold mx-auto"

>

{

selectedStudent.student_name
?.charAt(0)
?.toUpperCase()

}


</div>


}





<h2 className="text-3xl font-bold text-indigo-700 mt-4">

{selectedStudent.student_name}

</h2>



<p className="text-gray-500">

Admission No :

{" "}

{selectedStudent.admission_number}

</p>


<p className="text-gray-500">

Roll No :

{" "}

{selectedStudent.roll_number}

</p>



</div>









<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">








{/* Personal Information */}



<ProfileCard title="Personal Information">


<ProfileRow

label="Gender"

value={selectedStudent.gender}

/>


<ProfileRow

label="Date of Birth"

value={selectedStudent.date_of_birth}

/>


<ProfileRow

label="Blood Group"

value={selectedStudent.blood_group}

/>



<ProfileRow

label="Attendance"

value={`${selectedStudent.attendance_percentage}%`}

/>



</ProfileCard>











{/* Father Details */}



<ProfileCard title="Father Details">


<ProfileRow

label="Father Name"

value={selectedStudent.father_name}

/>



<ProfileRow

label="Mobile"

value={selectedStudent.father_mobile}

/>



<ProfileRow

label="Occupation"

value={selectedStudent.father_occupation}

/>



</ProfileCard>













{/* Mother Details */}



<ProfileCard title="Mother Details">


<ProfileRow

label="Mother Name"

value={selectedStudent.mother_name}

/>



<ProfileRow

label="Mobile"

value={selectedStudent.mother_mobile}

/>



<ProfileRow

label="Occupation"

value={selectedStudent.mother_occupation}

/>



</ProfileCard>












{/* Contact Details */}



<ProfileCard title="Contact Information">


<ProfileRow

label="Email"

value={selectedStudent.email}

/>



<ProfileRow

label="Address"

value={selectedStudent.address}

/>


<ProfileRow

label="City"

value={selectedStudent.city}

/>


<ProfileRow

label="State"

value={selectedStudent.state}

/>


<ProfileRow

label="Pincode"

value={selectedStudent.pincode}

/>


</ProfileCard>












{/* School Details */}



<ProfileCard title="School Details">


<ProfileRow

label="Class"

value={selectedClass?.class_name}

/>



<ProfileRow

label="Section"

value={selectedSection?.section_name}

/>



<ProfileRow

label="Class Average Attendance"

value={
selectedStudent.class_attendance_percentage
?
`${selectedStudent.class_attendance_percentage}%`
:
"-"
}

/>



</ProfileCard>













{/* Facilities */}



<ProfileCard title="Facilities">


<ProfileRow

label="Transport"

value={

selectedStudent.transport

?

"Available"

:

"Not Available"

}

/>



<ProfileRow

label="Hostel"

value={

selectedStudent.hostel

?

"Yes"

:

"No"

}

/>



</ProfileCard>









</div>



</div>





</div>



</div>


)


}








</div>


);

}









/*
|--------------------------------------------------------------------------
| Statistics Card
|--------------------------------------------------------------------------
*/


const StatCard = ({

title,

value,

icon

})=>{


return (


<div

className="bg-white rounded-xl shadow p-5 flex items-center justify-between"

>


<div>


<p className="text-gray-500 text-sm">

{title}

</p>


<h2 className="text-2xl font-bold text-indigo-700">

{value}

</h2>


</div>



<div

className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl"

>


{icon}


</div>


</div>


);


};









/*
|--------------------------------------------------------------------------
| Profile Card
|--------------------------------------------------------------------------
*/


const ProfileCard = ({

title,

children

})=>{


return (


<div

className="bg-gray-50 rounded-xl p-5 border"

>


<h3 className="text-lg font-bold text-indigo-700 mb-4">

{title}

</h3>


<div className="space-y-3">

{children}

</div>



</div>


);


};









/*
|--------------------------------------------------------------------------
| Profile Row
|--------------------------------------------------------------------------
*/


const ProfileRow = ({

label,

value

})=>(


<div

className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b pb-2"

>


<span className="text-gray-500">

{label}

</span>



<span className="font-medium text-gray-800 sm:text-right break-words">

{value || "-"}

</span>



</div>


);



export default Students;