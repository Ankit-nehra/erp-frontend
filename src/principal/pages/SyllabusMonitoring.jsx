import React from "react";

import {
  FaBook,
  FaCheckCircle,
  FaClock,
  FaChalkboardTeacher
} from "react-icons/fa";

import StatsCard from "../components/StatsCard";


const SyllabusMonitoring = () => {



const syllabusData = [

{
className:"10-A",
subject:"Mathematics",
teacher:"Amit Sharma",
progress:"75%",
status:"In Progress"
},


{
className:"10-A",
subject:"Science",
teacher:"Neha Verma",
progress:"90%",
status:"Almost Completed"
},


{
className:"9-B",
subject:"English",
teacher:"Rahul Singh",
progress:"100%",
status:"Completed"
},


{
className:"9-A",
subject:"Computer",
teacher:"Pooja Mehta",
progress:"60%",
status:"Pending"
}


];





const statusColor=(status)=>{


if(status==="Completed")
return "bg-green-100 text-green-700";


if(status==="Pending")
return "bg-red-100 text-red-700";


return "bg-yellow-100 text-yellow-700";


};






return (

<div>



{/* Header */}


<div className="mb-6">


<h1 className="
text-3xl
font-bold
text-indigo-700
">

Syllabus Monitoring

</h1>


<p className="text-gray-600">

Track class wise syllabus completion

</p>


</div>









{/* Statistics */}



<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
">


<StatsCard

title="Total Subjects"

value="12"

icon={<FaBook/>}

color="indigo"

/>




<StatsCard

title="Completed"

value="8"

icon={<FaCheckCircle/>}

color="green"

/>




<StatsCard

title="Pending"

value="4"

icon={<FaClock/>}

color="orange"

/>




<StatsCard

title="Teachers"

value="45"

icon={<FaChalkboardTeacher/>}

color="blue"

/>


</div>









{/* Syllabus Table */}



<div className="
hidden
md:block
bg-white
rounded-xl
shadow
mt-6
overflow-hidden
">


<table className="w-full">


<thead className="
bg-indigo-600
text-white
">


<tr>


<th className="p-4">
Class
</th>


<th className="p-4">
Subject
</th>


<th className="p-4">
Teacher
</th>


<th className="p-4">
Progress
</th>


<th className="p-4">
Status
</th>


</tr>


</thead>





<tbody>


{

syllabusData.map((item,index)=>(


<tr

key={index}

className="
border-b
hover:bg-indigo-50
"

>


<td className="p-4 text-center">

{item.className}

</td>


<td className="p-4 text-center">

{item.subject}

</td>


<td className="p-4 text-center">

{item.teacher}

</td>


<td className="p-4">


<div className="
flex
items-center
gap-3
">


<div className="
w-full
bg-gray-200
rounded-full
h-3
">


<div

className="
bg-indigo-600
h-3
rounded-full
"

style={{
width:item.progress
}}

>

</div>


</div>



<span>

{item.progress}

</span>


</div>


</td>





<td className="p-4 text-center">


<span className={`
px-3
py-1
rounded-full
text-sm
${statusColor(item.status)}
`}>

{item.status}

</span>


</td>



</tr>


))


}



</tbody>



</table>


</div>









{/* Mobile Cards */}



<div className="
md:hidden
mt-6
space-y-4
">


{

syllabusData.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
shadow
p-5
"

>


<h3 className="
font-bold
text-indigo-700
text-lg
">

{item.subject}

</h3>


<p className="mt-2">

Class:
<b className="ml-2">

{item.className}

</b>

</p>


<p>

Teacher:
<b className="ml-2">

{item.teacher}

</b>

</p>




<div className="mt-3">


<div className="
flex
justify-between
mb-1
">

<span>
Progress
</span>


<b>
{item.progress}
</b>


</div>



<div className="
bg-gray-200
rounded-full
h-3
">


<div

className="
bg-indigo-600
h-3
rounded-full
"

style={{
width:item.progress
}}

>

</div>


</div>


</div>






<span className={`
inline-block
mt-3
px-3
py-1
rounded-full
text-sm
${statusColor(item.status)}
`}>

{item.status}

</span>




</div>


))


}



</div>






</div>

);

};


export default SyllabusMonitoring;