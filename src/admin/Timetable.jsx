import { useEffect, useState } from "react";


import axios from "../utils/axiosInstance";
const API =
"/api/admin";


export default function Timetable(){


const [sessions,setSessions]=useState([]);

const [classes,setClasses]=useState([]);

const [sections,setSections]=useState([]);

const [teachers,setTeachers]=useState([]);

const [subjects,setSubjects]=useState([]);

const [periods,setPeriods]=useState([]);


const [timetables,setTimetables]=useState([]);

const [session,setSession]=useState("");

const [classId,setClassId]=useState("");

const [sectionId,setSectionId]=useState("");

const [teacher,setTeacher]=useState("");

const [subject,setSubject]=useState("");

const [day,setDay]=useState("");

const [period,setPeriod]=useState("");



const [loading,setLoading]=useState(false);


const days=[
{
 id:1,
 name:"Monday"
},
{
 id:2,
 name:"Tuesday"
},
{
 id:3,
 name:"Wednesday"
},
{
 id:4,
 name:"Thursday"
},
{
 id:5,
 name:"Friday"
},
{
 id:6,
 name:"Saturday"
}
];





useEffect(()=>{

loadBasicData();
loadTimetable();

},[]);





const loadBasicData=async()=>{


try{


const [
sessionRes,
classRes,
periodRes

]=await Promise.all([


axios.get(`${API}/sessions`),

axios.get(`${API}/classes`),

axios.get(`${API}/periods`)


]);



setSessions(sessionRes.data.sessions);


setClasses(classRes.data.classes);


setPeriods(periodRes.data.periods);



}

catch(error){

console.log(error);

}


};

const loadTimetable = async()=>{

try{

const res =
await axios.get(
`${API}/timetable`
);


setTimetables(
res.data.timetable || []
);


}
catch(error){

console.log(
"Timetable Load Error",
error
);

}

};








// LOAD SECTIONS

const loadSections=async(class_id)=>{


try{


const res =
await axios.get(

`${API}/class-section-subject/sections/${class_id}`

);



setSections(
res.data.sections || []
);



}

catch(err){

console.log(err);

}


};










// CLASS CHANGE


const handleClass=(e)=>{


const id=e.target.value;


setClassId(id);

setTeachers([]);   // add this

setSubjects([]);   // add this

setSectionId("");

setTeacher("");

setSubject("");

setSections([]);


if(id){

loadSections(id);

}


};









// LOAD TEACHERS

const loadTeachers=async(class_id, section_id)=>{


console.log(
"Loading teachers",
{
class_id,
section_id
}
);


if(!class_id || !section_id)
return;



try{


const res =
await axios.get(

`${API}/timetable/teachers/${class_id}/${section_id}`

);



console.log(
"Teacher Response",
res.data
);



setTeachers(
res.data.teachers || []
);



}

catch(error){

console.log(
"Teacher Load Error",
error
);

}


};








// SECTION CHANGE

const handleSection=(e)=>{


const id=e.target.value;

console.log("Selected Section:", id);
setSectionId(id);


setTeacher("");

setSubject("");

loadTeachers(
classId,
id
);


};











// LOAD SUBJECTS


const loadSubjects=async(teacher_number)=>{


try{


const res =
await axios.get(

`${API}/timetable/subjects`,

{

params:{


teacher_number,

class_id:classId,

section_id:sectionId,

session_id:session


}

}

);



setSubjects(
res.data.subjects || []
);



}

catch(error){

console.log(error);

}


};









// SAVE


const saveTimetable=async(e)=>{


e.preventDefault();



if(
!session ||
!classId ||
!sectionId ||
!teacher ||
!subject ||
!day ||
!period
){

return alert(
"Please select all fields"
);

}



try{


setLoading(true);



await axios.post(

`${API}/timetable`,

{

session_id:session,

class_id:classId,

section_id:sectionId,

subject_id:subject,

teacher_number:teacher,

day_of_week:day,

period_id:period

}

);



alert(
"Timetable created successfully"
);

loadTimetable();



// reset

setTeacher("");

setSubject("");

setDay("");

setPeriod("");



}

catch(error){


console.log(error);


alert(

error.response?.data?.message ||
"Error creating timetable"

);


}

finally{

setLoading(false);

}


};




const deleteTimetable = async(id)=>{


if(!confirm(
"Delete this timetable?"
))
return;



try{


await axios.delete(
`${API}/timetable/${id}`
);


alert(
"Timetable deleted"
);


loadTimetable();


}
catch(error){

console.log(error);


alert(
"Delete failed"
);


}


};







return(

<div className="
min-h-screen
bg-slate-100
p-6
">


<div className="
max-w-5xl
mx-auto
space-y-6
">



<h1 className="
text-3xl
font-bold
text-slate-800
">

Timetable Management

</h1>






<form

onSubmit={saveTimetable}

className="
bg-white
rounded-2xl
shadow
p-6
grid
md:grid-cols-3
gap-5
"

>




<Select

label="Session"

value={session}

onChange={
e=>setSession(e.target.value)
}

>

<option>
Select Session
</option>


{
sessions.map(s=>(

<option
key={s.id}
value={s.id}
>

{s.session_name}

</option>

))

}


</Select>









<Select

label="Class"

value={classId}

onChange={handleClass}

>

<option>
Select Class
</option>


{
classes.map(c=>(

<option

key={c.id}

value={c.id}

>

{c.class_name}

</option>

))

}


</Select>









<Select

label="Section"

value={sectionId}

onChange={handleSection}

>

<option>
Select Section
</option>


{
sections.map(s=>(

<option

key={s.id}

value={s.id}

>

{s.section_name}

</option>

))

}


</Select>











<Select

label="Teacher"

value={teacher}

onChange={e=>{


setTeacher(e.target.value);

loadSubjects(e.target.value);


}}

>


<option>
Select Teacher
</option>


{
teachers.map(t=>(


<option

key={t.teacher_number}

value={t.teacher_number}

>

{t.teacher_name} ({t.teacher_number})

</option>


))

}


</Select>









<Select

label="Subject"

value={subject}

onChange={
e=>setSubject(e.target.value)
}

>


<option>
Select Subject
</option>


{
subjects.map(s=>(


<option

key={s.subject_id}

value={s.subject_id}

>

{s.subject_name}

</option>


))

}


</Select>









<Select

label="Day"

value={day}

onChange={
e=>setDay(e.target.value)
}

>


<option>
Select Day
</option>


{
days.map(d=>(

<option
key={d.id}
value={d.id}
>

{d.name}

</option>

))
}


</Select>









<Select

label="Period"

value={period}

onChange={
e=>setPeriod(e.target.value)
}

>


<option>
Select Period
</option>


{
periods.map(p=>(


<option

key={p.id}

value={p.id}

>

{p.period_name}

</option>


))

}


</Select>






<button

className="
md:col-span-3
bg-indigo-700
text-white
py-3
rounded-xl
font-bold
"

>

{

loading

?

"Saving..."

:

"Create Timetable"

}


</button>




</form>
<div className="
bg-white
rounded-2xl
shadow
overflow-hidden
">


<h2 className="
text-xl
font-bold
p-5
">

Current Timetable

</h2>



<div className="
overflow-x-auto
">

<table className="
w-full
">


<thead className="
bg-slate-800
text-white
">

<tr>

<th className="p-3">
#
</th>

<th className="p-3">
Day
</th>

<th className="p-3">
Class
</th>

<th className="p-3">
Section
</th>

<th className="p-3">
Subject
</th>

<th className="p-3">
Teacher
</th>

<th className="p-3">
Period
</th>

<th className="p-3">
Action
</th>

</tr>

</thead>


<tbody>


{
timetables.length===0 ?

<tr>

<td
colSpan="8"
className="
text-center
p-5
"
>

No timetable found

</td>

</tr>


:


timetables.map((item,index)=>(


<tr
key={item.id}
className="
border-b
"
>


<td className="p-3 text-center">
{index+1}
</td>


<td className="p-3 text-center">

{

days.find(
d=>d.id===Number(item.day_of_week)
)?.name

}

</td>


<td className="p-3">

{item.class_name}

</td>


<td className="p-3">

{item.section_name}

</td>


<td className="p-3">

{item.subject_name}

</td>


<td className="p-3">

{item.teacher_name}

<br/>

<span className="text-sm text-gray-500">

{item.teacher_number}

</span>

</td>


<td className="p-3">

{item.period_name}

</td>


<td className="p-3 text-center">


<button

onClick={()=>
deleteTimetable(item.id)
}

className="
bg-red-600
text-white
px-4
py-1
rounded-lg
"

>

Delete

</button>


</td>


</tr>


))


}


</tbody>


</table>

</div>

</div>

</div>


</div>


);

}







function Select({
label,
children,
...props
}){


return(

<div>


<label className="
font-semibold
block
mb-2
">

{label}

</label>


<select

{...props}

className="
w-full
border
rounded-xl
p-3
"

>

{children}

</select>


</div>

)

}