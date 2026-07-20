import React, { useState } from "react";

import {
  FaChalkboardTeacher,
  FaUserCheck,
  FaSearch,
  FaEye,
  FaBook
} from "react-icons/fa";


import StatsCard from "../components/StatsCard";



const Teachers = () => {



const [search,setSearch]=useState("");



const teachers=[


{
id:1,
name:"Amit Sharma",
employee:"T001",
subject:"Mathematics",
department:"Science",
classes:"10-A, 10-B",
attendance:"96%"
},


{
id:2,
name:"Neha Verma",
employee:"T002",
subject:"Science",
department:"Science",
classes:"9-A, 9-B",
attendance:"94%"
},


{
id:3,
name:"Rahul Singh",
employee:"T003",
subject:"English",
department:"Arts",
classes:"8-A",
attendance:"90%"
},


{
id:4,
name:"Pooja Mehta",
employee:"T004",
subject:"Computer",
department:"Computer",
classes:"10-A",
attendance:"98%"
}



];





const filteredTeachers =
teachers.filter(teacher=>

teacher.name
.toLowerCase()
.includes(
search.toLowerCase()
)

);






return (

<div>


{/* Header */}

<div className="mb-6">


<h1 className="
text-3xl
font-bold
text-indigo-700
">

Teachers Management

</h1>


<p className="
text-gray-600
">

Monitor all teaching staff

</p>


</div>









{/* Stats */}


<div className="
grid
grid-cols-1
sm:grid-cols-3
gap-5
">



<StatsCard

title="Total Teachers"

value="45"

icon={<FaChalkboardTeacher/>}

color="indigo"

/>





<StatsCard

title="Present Today"

value="43"

icon={<FaUserCheck/>}

color="green"

/>





<StatsCard

title="Subjects"

value="12"

icon={<FaBook/>}

color="blue"

/>



</div>









{/* Filters */}



<div className="
bg-white
rounded-xl
shadow
p-5
mt-6
grid
grid-cols-1
md:grid-cols-3
gap-4
">



<select className="
border
rounded-lg
p-3
">


<option>
Department
</option>


<option>
Science
</option>


<option>
Arts
</option>


<option>
Computer
</option>


</select>







<select className="
border
rounded-lg
p-3
">


<option>
Subject
</option>


<option>
Mathematics
</option>


<option>
Science
</option>


<option>
English
</option>


</select>







<div className="
relative
">


<FaSearch

className="
absolute
left-3
top-4
text-gray-400
"

/>


<input

className="
border
rounded-lg
p-3
pl-10
w-full
"

placeholder="Search Teacher"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>


</div>




</div>









{/* Desktop Table */}



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
Name
</th>


<th className="p-4">
Employee ID
</th>


<th className="p-4">
Subject
</th>


<th className="p-4">
Department
</th>


<th className="p-4">
Classes
</th>


<th className="p-4">
Attendance
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>






<tbody>


{

filteredTeachers.map(teacher=>(


<tr

key={teacher.id}

className="
border-b
hover:bg-indigo-50
"

>


<td className="
p-4
font-medium
">

{teacher.name}

</td>



<td className="
p-4
text-center
">

{teacher.employee}

</td>



<td className="
p-4
text-center
">

{teacher.subject}

</td>



<td className="
p-4
text-center
">

{teacher.department}

</td>



<td className="
p-4
text-center
">

{teacher.classes}

</td>



<td className="
p-4
text-center
">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
">

{teacher.attendance}

</span>


</td>






<td className="
p-4
text-center
">


<button

className="
text-indigo-600
flex
items-center
gap-2
mx-auto
"

>


<FaEye/>

View


</button>


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

filteredTeachers.map(teacher=>(


<div

key={teacher.id}

className="
bg-white
rounded-xl
shadow
p-5
"

>



<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-full
bg-indigo-100
text-indigo-700
flex
items-center
justify-center
font-bold
text-xl
">

{teacher.name.charAt(0)}

</div>




<div>


<h3 className="
font-bold
text-indigo-700
">

{teacher.name}

</h3>


<p>
ID: {teacher.employee}
</p>


</div>


</div>






<div className="
mt-4
space-y-2
text-gray-600
">


<p>
Subject:
<b className="ml-2">
{teacher.subject}
</b>
</p>



<p>
Classes:
<b className="ml-2">
{teacher.classes}
</b>
</p>



<p>
Attendance:
<b className="ml-2">
{teacher.attendance}
</b>
</p>


</div>






<button className="
mt-4
bg-indigo-600
text-white
px-4
py-2
rounded-lg
flex
items-center
gap-2
">


<FaEye/>

View Profile


</button>




</div>


))


}



</div>





</div>

);

};



export default Teachers;