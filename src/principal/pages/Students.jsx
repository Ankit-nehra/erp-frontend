import {
    useEffect,
    useMemo,
    useState
}
from "react";

import StudentProfileModal 
from "../components/StudentProfileModal.jsx";



import {

    FaUsers,

    FaMale,

    FaFemale,

    FaChartLine,

    FaSearch,

    FaEye

}
from "react-icons/fa";


import API from "../../utils/axiosInstance";


import StatsCard from "../components/StatsCard";





const Students = ()=>{


const [options,setOptions]=useState({

    sessions:[],
    classes:[],
    sections:[]

});

const [selectedStudent,setSelectedStudent] = useState(null);

const [profileLoading,setProfileLoading] = useState(false);

const [profileError,setProfileError] = useState("");

const [selectedSession,setSelectedSession]=useState(null);

const [selectedClass,setSelectedClass]=useState(null);

const [selectedSection,setSelectedSection]=useState(null);



const [students,setStudents]=useState([]);

const [summary,setSummary]=useState(null);



const [search,setSearch]=useState("");



const [loading,setLoading]=useState(false);

const [error,setError]=useState("");






/*
|--------------------------------------------------------------------------
| Load Options
|--------------------------------------------------------------------------
*/


useEffect(()=>{

    fetchOptions();

},[]);


const loadStudentProfile = async(admissionNumber)=>{


try{


setProfileLoading(true);

setProfileError("");



const response = await API.get(

`/principal/student-profile/${admissionNumber}`

);



setSelectedStudent(

response.data.student

);



}

catch(error){


console.log(error);



setProfileError(

"Unable to load student profile"

);



}

finally{


setProfileLoading(false);


}


};


const fetchOptions = async()=>{


try{


const response =

await API.get(

"/principal/students/options"

);

console.log(response);

setOptions(

response.data.data || {}

);



const activeSession =

response.data.data.sessions

?.find(

item=>item.is_active

);



if(activeSession){

    setSelectedSession(activeSession);

}



}

catch(error){


console.log(error);


setError(

"Unable to load options"

);


}



};









/*
|--------------------------------------------------------------------------
| Classes
|--------------------------------------------------------------------------
*/


const classes = useMemo(()=>{

return options.classes || [];

},[options]);





/*
|--------------------------------------------------------------------------
| Sections
|--------------------------------------------------------------------------
*/


const sections = useMemo(()=>{

    if(!selectedClass)

        return [];


    return options.sections || [];


},[
    options,
    selectedClass
]);








/*
|--------------------------------------------------------------------------
| Load Students
|--------------------------------------------------------------------------
*/


const loadStudents = async()=>{


if(

!selectedSession ||

!selectedClass ||

!selectedSection

)

return;



try{


setLoading(true);


const response =

await API.get(

"/principal/students",

{

params:{


session_id:

selectedSession.id,


class_id:

selectedClass.id,


section_id:

selectedSection.id


}


}

);



setStudents(

response.data.students || []

);



setSummary(

response.data.summary || null

);



}

catch(error){


console.log(error);


setError(

"Unable to load students"

);


}

finally{


setLoading(false);


}



};







useEffect(()=>{


loadStudents();


},[

selectedSession,

selectedClass,

selectedSection

]);










const filteredStudents =

students.filter(student=>{


return (

student.student_name

?.toLowerCase()

.includes(

search.toLowerCase()

)

||

student.admission_number

?.toLowerCase()

.includes(

search.toLowerCase()

)


);


});






return (

<div className="min-h-screen bg-gray-100 p-4 lg:p-6">



<h1 className="
text-3xl
font-bold
text-indigo-700
">

Students Management

</h1>



<p className="text-gray-600 mt-1">

View and monitor all students

</p>








{/* Stats */}


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-5
mt-6
">



<StatsCard

title="Total Students"

value={summary?.total_students || 0}

icon={<FaUsers/>}

color="indigo"

/>



<StatsCard

title="Boys"

value={summary?.total_boys || 0}

icon={<FaMale/>}

color="blue"

/>



<StatsCard

title="Girls"

value={summary?.total_girls || 0}

icon={<FaFemale/>}

color="green"

/>



<StatsCard

title="Attendance"

value={summary?.average_attendance || "0%"}

icon={<FaChartLine/>}

color="orange"

/>



<StatsCard

title="Performance"

value={summary?.average_performance || "0%"}

icon={<FaChartLine/>}

color="purple"

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
md:grid-cols-4
gap-4
">






<select

className="border rounded-lg p-3"

value={selectedSession?.id || ""}

onChange={(e)=>{

const session =

options.sessions.find(

item=>

item.id == e.target.value

);


setSelectedSession(session);


}}

>

<option value="">

Select Session

</option>


{

options.sessions.map(session=>(

<option

key={session.id}

value={session.id}

>

{session.session_name}

</option>

))

}

</select>









<select

className="border rounded-lg p-3"

value={selectedClass?.id || ""}

onChange={(e)=>{

const cls=

classes.find(

item=>

item.id == e.target.value

);


setSelectedClass(cls);

setSelectedSection(null);


}}

>

<option value="">

Select Class

</option>


{

classes.map(cls=>(

<option

key={cls.id}

value={cls.id}

>

{cls.class_name}

</option>

))

}

</select>









<select

disabled={!selectedClass}

className="border rounded-lg p-3 disabled:bg-gray-100"

value={selectedSection?.id || ""}

onChange={(e)=>{


const sec=

sections.find(

item=>

item.id == e.target.value

);



setSelectedSection(sec);



}}

>

<option value="">

Select Section

</option>


{

sections.map(section=>(

<option

key={section.id}

value={section.id}

>

{section.section_name}

</option>

))

}

</select>









<div className="relative">


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

placeholder="Search Student"

value={search}

onChange={e=>setSearch(e.target.value)}

/>


</div>






</div>










{/* Table */}



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
Admission
</th>


<th className="p-4">
Roll
</th>


<th className="p-4">
Student
</th>


<th className="p-4">
Class
</th>


<th className="p-4">
Attendance
</th>


<th className="p-4">
Performance
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>



<tbody>


{

filteredStudents.length > 0 ?


filteredStudents.map(student=>(


<tr

key={student.admission_number}

className="
border-b
hover:bg-indigo-50
"

>


<td className="p-4">

{student.admission_number}

</td>



<td className="p-4">

{student.roll_number}

</td>




<td className="p-4 font-semibold">

{student.student_name}

</td>




<td className="p-4">

{student.class_name} -

{student.section_name}

</td>




<td className="p-4 text-center">

{student.attendance_percentage}%

</td>




<td className="p-4 text-center">

{student.performance_percentage}%

</td>



<td className="p-4 text-center">


<button

onClick={()=>


loadStudentProfile(

student.admission_number

)

}


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


:

<tr>

<td

colSpan="7"

className="
text-center
p-6
text-gray-500
"

>

No students found

</td>


</tr>


}




</tbody>


</table>


</div>

{/* Mobile Student Cards */}


<div className="
md:hidden
mt-6
space-y-4
">


{

filteredStudents.length > 0 ?


filteredStudents.map(student=>(


<div

key={student.admission_number}

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


<div

className="
w-14
h-14
rounded-full
bg-indigo-100
text-indigo-700
flex
items-center
justify-center
font-bold
text-xl
"

>

{

student.student_name

?.charAt(0)

}

</div>




<div>


<h3 className="
font-bold
text-indigo-700
text-lg
">

{student.student_name}

</h3>


<p className="
text-sm
text-gray-500
">

Admission :

{student.admission_number}

</p>


</div>


</div>








<div className="
border-t
my-4
"/>







<div className="
space-y-2
text-sm
text-gray-600
">


<p className="
flex
justify-between
">

<span>
Roll No
</span>


<b>
{student.roll_number}
</b>


</p>





<p className="
flex
justify-between
">

<span>
Class
</span>


<b>

{student.class_name}

-

{student.section_name}

</b>


</p>







<p className="
flex
justify-between
">

<span>
Attendance
</span>


<b>

{student.attendance_percentage}%

</b>


</p>






<p className="
flex
justify-between
">

<span>
Performance
</span>


<b>

{student.performance_percentage}%

</b>


</p>



</div>









<button

onClick={()=>


loadStudentProfile(

student.admission_number

)

}


className="
mt-5
w-full
bg-indigo-600
text-white
py-3
rounded-lg
flex
justify-center
items-center
gap-2
"


>


<FaEye/>

View Profile


</button>





</div>


))


:

<div className="
bg-white
rounded-xl
shadow
p-6
text-center
text-gray-500
">

No students found

</div>



}


</div>



{
selectedStudent &&

<StudentProfileModal

student={selectedStudent}

onClose={()=>setSelectedStudent(null)}

/>

}

</div>


);


};


export default Students;