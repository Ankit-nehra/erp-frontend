import {
    useEffect,
    useState
} from "react";

import API from "../utils/axiosInstance";

import {
    FaEye,
    FaEdit,
    FaTrash,
    FaSearch,
    FaTimes,
    FaUserGraduate
} from "react-icons/fa";



function StudentManagement(){


const [students,setStudents] = useState([]);

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");

const [search,setSearch] = useState("");



const [selectedStudent,setSelectedStudent] = useState(null);

const [viewModal,setViewModal] = useState(false);

const [editModal,setEditModal] = useState(false);

const [deleteModal,setDeleteModal] = useState(false);



const [editForm,setEditForm] = useState({});





/*
|--------------------------------------------------------------------------
| Fetch Students
|--------------------------------------------------------------------------
*/


useEffect(()=>{

    fetchStudents();

},[]);





const fetchStudents = async()=>{


try{


setLoading(true);

setError("");



const response = await API.get(
    "/admin/students"
);



setStudents(
    response.data.data || []
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








/*
|--------------------------------------------------------------------------
| Search Filter
|--------------------------------------------------------------------------
*/


const filteredStudents = students.filter(student=>{


const keyword =
search.toLowerCase();



return (

student.student_name
?.toLowerCase()
.includes(keyword)


||

student.admission_number
?.toLowerCase()
.includes(keyword)


||

String(student.roll_number)
.includes(keyword)


);


});








/*
|--------------------------------------------------------------------------
| View Student
|--------------------------------------------------------------------------
*/


const openView = async(id)=>{


try{


const response = await API.get(

`/admin/students/${id}`

);



setSelectedStudent(
    response.data.data
);



setViewModal(true);



}

catch(error){


console.log(error);


}


};








/*
|--------------------------------------------------------------------------
| Open Edit
|--------------------------------------------------------------------------
*/


const openEdit = (student)=>{


setEditForm({

...student


});


setEditModal(true);


};







const handleEditChange=(e)=>{


const {

name,

value,

type,

checked

}=e.target;



setEditForm({

...editForm,


[name]:

type==="checkbox"

?

checked

:

value


});


};







/*
|--------------------------------------------------------------------------
| Update Student
|--------------------------------------------------------------------------
*/


const updateStudent = async()=>{


try{


await API.put(

`/admin/students/${editForm.id}`,

editForm

);



setEditModal(false);


fetchStudents();



}

catch(error){


console.log(error);


}


};








/*
|--------------------------------------------------------------------------
| Delete Student
|--------------------------------------------------------------------------
*/


const deleteStudent = async()=>{


try{


await API.delete(

`/admin/students/${selectedStudent.id}`

);



setDeleteModal(false);

setSelectedStudent(null);


fetchStudents();



}

catch(error){


console.log(error);


}


};








return (


<div className="
min-h-screen
bg-gray-100
p-4
lg:p-8
">



<div className="
max-w-7xl
mx-auto
bg-white
rounded-2xl
shadow-xl
p-5
">





{/* Header */}


<div className="
flex
flex-col
md:flex-row
justify-between
gap-4
mb-6
">


<div>


<h1 className="
text-3xl
font-bold
text-indigo-700
">

Student Management

</h1>


<p className="
text-gray-500
mt-1
">

Manage admission records

</p>


</div>




<div className="
relative
">


<FaSearch

className="
absolute
left-3
top-1/2
-translate-y-1/2
text-gray-400
"

/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search student..."

className="
border
rounded-xl
py-3
pl-10
pr-4
w-full
md:w-72
focus:ring-2
focus:ring-indigo-500
outline-none
"

/>


</div>


</div>







{
error &&

<div className="
bg-red-50
border
border-red-200
text-red-600
p-4
rounded-xl
mb-5
">

{error}

</div>

}







{
loading ?


<div className="
text-center
py-10
">

Loading Students...

</div>



:


<div className="
overflow-x-auto
">

<table className="
min-w-full
">


<thead className="
bg-indigo-600
text-white
">


<tr>


<th className="p-4 text-left">
Photo
</th>


<th className="p-4 text-left">
Admission No
</th>


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Class
</th>


<th className="p-4 text-left">
Section
</th>


<th className="p-4 text-center">
Action
</th>


</tr>


</thead>





<tbody>



{

filteredStudents.map(student=>(


<tr

key={student.id}

className="
border-b
hover:bg-indigo-50
"

>


<td className="p-4">


{

student.profile_photo ?


<img

src={student.profile_photo}

className="
w-12
h-12
rounded-full
object-cover
"

/>


:


<div className="
w-12
h-12
rounded-full
bg-indigo-100
text-indigo-600
flex
items-center
justify-center
">

<FaUserGraduate/>

</div>


}



</td>





<td className="p-4">

{student.admission_number}

</td>




<td className="p-4 font-semibold">

{student.student_name}

</td>




<td className="p-4">

{student.class_name}

</td>




<td className="p-4">

{student.section}

</td>




<td className="
p-4
flex
justify-center
gap-2
">


<button

onClick={()=>openView(student.id)}

className="
bg-blue-600
text-white
p-3
rounded-lg
"

>

<FaEye/>

</button>



<button

onClick={()=>openEdit(student)}

className="
bg-green-600
text-white
p-3
rounded-lg
"

>

<FaEdit/>

</button>



<button

onClick={()=>{

setSelectedStudent(student);

setDeleteModal(true);

}}

className="
bg-red-600
text-white
p-3
rounded-lg
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


}



</div>





{/* Part 2 me modals + edit form + reusable components continue honge */}

</div>


);


}


export default StudentManagement;