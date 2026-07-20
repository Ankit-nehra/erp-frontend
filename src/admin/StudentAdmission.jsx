// import {
//     useEffect,
//     useState
// } from "react";

// import API from "../utils/axiosInstance";

// import {
//     FaUserGraduate,
//     FaSave,
//     FaUser,
//     FaBook,
//     FaVenusMars,
//     FaCalendarAlt
// } from "react-icons/fa";





// function StudentAdmission(){


// const [classes,setClasses] = useState([]);

// const [sections,setSections] = useState([]);



// const [form,setForm] = useState({

//     admission_number:"",

//     password:"",

//     student_name:"",

//     roll_number:"",

//     class_name:"",

//     section:"",

//     profile_photo:"", 
//     // Future:
//     // multer + cloudinary se URL save hoga


//     gender:"",

//     date_of_birth:"",

//     blood_group:"",


//     father_name:"",

//     father_mobile:"",

//     father_occupation:"",


//     mother_name:"",

//     mother_mobile:"",

//     mother_occupation:"",


//     email:"",

//     address:"",

//     city:"",

//     state:"",

//     pincode:"",

//     aadhar_number:"",


//     transport:false,

//     hostel:false

// });



// const [loading,setLoading] = useState(false);

// const [message,setMessage] = useState("");

// const [error,setError] = useState("");





// /*
// |--------------------------------------------------------------------------
// | Load Classes
// |--------------------------------------------------------------------------
// */


// useEffect(()=>{

//     fetchClasses();

//     fetchSections();

// },[]);





// const fetchClasses = async()=>{


// try{


// const response = await API.get(
//     "/admin/students/classes"
// );


// setClasses(
//     response.data.data || []
// );


// }

// catch(error){

// console.log(error);

// }



// };







// /*
// |--------------------------------------------------------------------------
// | Load Sections
// |--------------------------------------------------------------------------
// */


// const fetchSections = async()=>{


// try{


// const response = await API.get(
//     "/admin/students/sections"
// );



// setSections(
//     response.data.data || []
// );



// }

// catch(error){

// console.log(error);

// }


// };








// /*
// |--------------------------------------------------------------------------
// | Handle Input
// |--------------------------------------------------------------------------
// */


// const handleChange=(e)=>{


// const {
//     name,
//     value,
//     type,
//     checked
// }=e.target;



// setForm({

//     ...form,


//     [name]:

//     type==="checkbox"

//     ?

//     checked

//     :

//     value


// });


// };








// /*
// |--------------------------------------------------------------------------
// | Submit Admission
// |--------------------------------------------------------------------------
// */


// const handleSubmit=async(e)=>{


// e.preventDefault();


// try{


// setLoading(true);

// setMessage("");

// setError("");



// const response = await API.post(

//     "/admin/students",

//     form

// );



// setMessage(
//     response.data.message
// );



// }

// catch(error){


// console.log(error);



// setError(

// error.response?.data?.message ||

// "Admission failed"

// );



// }

// finally{


// setLoading(false);


// }



// };








// return (

// <div className="
// min-h-screen
// bg-gradient-to-br
// from-indigo-50
// via-white
// to-blue-50
// p-4
// lg:p-8
// ">



// <div className="
// max-w-7xl
// mx-auto
// bg-white
// rounded-3xl
// shadow-xl
// overflow-hidden
// ">





// {/* Header */}


// <div className="
// bg-gradient-to-r
// from-indigo-600
// to-blue-600
// p-6
// text-white
// ">


// <div className="
// flex
// items-center
// gap-4
// ">


// <div className="
// w-16
// h-16
// rounded-2xl
// bg-white/20
// flex
// items-center
// justify-center
// text-3xl
// ">

// <FaUserGraduate/>

// </div>




// <div>


// <h1 className="
// text-3xl
// font-bold
// ">

// Student Admission Portal

// </h1>


// <p className="
// text-indigo-100
// mt-1
// ">

// Create new student profile

// </p>



// </div>


// </div>


// </div>







// <div className="
// p-5
// lg:p-8
// ">





// {
// message && (

// <div className="
// mb-5
// bg-green-50
// border
// border-green-200
// text-green-700
// rounded-xl
// p-4
// ">

// {message}

// </div>

// )

// }






// {
// error && (

// <div className="
// mb-5
// bg-red-50
// border
// border-red-200
// text-red-700
// rounded-xl
// p-4
// ">

// {error}

// </div>

// )

// }









// <form
// onSubmit={handleSubmit}
// className="
// space-y-8
// "

// >






// {/* 
// =====================================================
// STUDENT BASIC INFORMATION
// =====================================================
// */}



// <div className="
// bg-gray-50
// rounded-2xl
// p-5
// border
// ">


// <div className="
// flex
// items-center
// gap-3
// mb-5
// ">


// <div className="
// w-10
// h-10
// rounded-xl
// bg-indigo-100
// text-indigo-600
// flex
// items-center
// justify-center
// ">

// <FaUser/>

// </div>


// <h2 className="
// text-xl
// font-bold
// text-indigo-700
// ">

// Student Information

// </h2>


// </div>





// <div className="
// grid
// grid-cols-1
// md:grid-cols-2
// lg:grid-cols-3
// gap-5
// ">







// <InputField

// label="Admission Number"

// name="admission_number"

// value={form.admission_number}

// onChange={handleChange}

// required

// />





// <InputField

// label="Login Password"

// name="password"

// type="password"

// value={form.password}

// onChange={handleChange}

// />






// <InputField

// label="Student Name"

// name="student_name"

// value={form.student_name}

// onChange={handleChange}

// required

// />







// <InputField

// label="Roll Number"

// name="roll_number"

// type="number"

// value={form.roll_number}

// onChange={handleChange}

// required

// />







// {/* Class */}


// <SelectField

// label="Class"

// name="class_name"

// value={form.class_name}

// onChange={handleChange}

// options={classes.map(
// item=>item.class_name
// )}

// required

// />







// {/* Section */}



// <SelectField

// label="Section"

// name="section"

// value={form.section}

// onChange={handleChange}

// options={sections.map(
// item=>item.section_name
// )}

// required

// />







// <SelectField

// label="Gender"

// name="gender"

// value={form.gender}

// onChange={handleChange}

// options={[
// "Male",
// "Female"
// ]}

// />







// <InputField

// label="Date Of Birth"

// name="date_of_birth"

// type="date"

// value={form.date_of_birth}

// onChange={handleChange}

// />







// <InputField

// label="Blood Group"

// name="blood_group"

// value={form.blood_group}

// onChange={handleChange}

// />





// </div>

// </div>
// {/* 
// =====================================================
// PARENT INFORMATION
// =====================================================
// */}



// <div className="
// bg-gray-50
// rounded-2xl
// p-5
// border
// ">


// <div className="
// flex
// items-center
// gap-3
// mb-5
// ">


// <div className="
// w-10
// h-10
// rounded-xl
// bg-blue-100
// text-blue-600
// flex
// items-center
// justify-center
// ">

// 👨‍👩‍👦

// </div>


// <h2 className="
// text-xl
// font-bold
// text-indigo-700
// ">

// Parent Information

// </h2>


// </div>





// <div className="
// grid
// grid-cols-1
// md:grid-cols-2
// lg:grid-cols-3
// gap-5
// ">






// <InputField

// label="Father Name"

// name="father_name"

// value={form.father_name}

// onChange={handleChange}

// />






// <InputField

// label="Father Mobile"

// name="father_mobile"

// value={form.father_mobile}

// onChange={handleChange}

// />







// <InputField

// label="Father Occupation"

// name="father_occupation"

// value={form.father_occupation}

// onChange={handleChange}

// />







// <InputField

// label="Mother Name"

// name="mother_name"

// value={form.mother_name}

// onChange={handleChange}

// />







// <InputField

// label="Mother Mobile"

// name="mother_mobile"

// value={form.mother_mobile}

// onChange={handleChange}

// />







// <InputField

// label="Mother Occupation"

// name="mother_occupation"

// value={form.mother_occupation}

// onChange={handleChange}

// />





// </div>


// </div>










// {/* 
// =====================================================
// CONTACT INFORMATION
// =====================================================
// */}



// <div className="
// bg-gray-50
// rounded-2xl
// p-5
// border
// ">


// <div className="
// flex
// items-center
// gap-3
// mb-5
// ">


// <div className="
// w-10
// h-10
// rounded-xl
// bg-green-100
// text-green-600
// flex
// items-center
// justify-center
// ">

// 📍

// </div>


// <h2 className="
// text-xl
// font-bold
// text-indigo-700
// ">

// Contact Information

// </h2>


// </div>






// <div className="
// grid
// grid-cols-1
// md:grid-cols-2
// lg:grid-cols-3
// gap-5
// ">






// <InputField

// label="Email Address"

// name="email"

// type="email"

// value={form.email}

// onChange={handleChange}

// />







// <InputField

// label="City"

// name="city"

// value={form.city}

// onChange={handleChange}

// />







// <InputField

// label="State"

// name="state"

// value={form.state}

// onChange={handleChange}

// />








// <InputField

// label="Pincode"

// name="pincode"

// value={form.pincode}

// onChange={handleChange}

// />







// <InputField

// label="Aadhar Number"

// name="aadhar_number"

// value={form.aadhar_number}

// onChange={handleChange}

// />







// </div>






// <div className="mt-5">


// <label className="
// block
// text-sm
// font-semibold
// text-gray-600
// mb-2
// ">

// Complete Address

// </label>




// <textarea

// name="address"

// value={form.address}

// onChange={handleChange}

// rows="4"

// placeholder="Enter complete address"

// className="
// w-full
// rounded-xl
// border
// p-3
// outline-none
// focus:ring-2
// focus:ring-indigo-500
// resize-none
// "

// />



// </div>






// </div>









// {/* 
// =====================================================
// PROFILE PHOTO FUTURE
// =====================================================
// */}



// <div className="
// bg-yellow-50
// border
// border-yellow-200
// rounded-2xl
// p-5
// ">


// <h2 className="
// font-bold
// text-yellow-700
// mb-2
// ">

// Profile Photo

// </h2>



// <p className="
// text-sm
// text-yellow-600
// ">

// Currently image upload disabled.

// Future implementation:

// </p>



// <ul className="
// text-sm
// text-gray-600
// mt-2
// list-disc
// ml-5
// ">


// <li>

// Add multer middleware in route

// </li>


// <li>

// Use multer.single("profile_photo")

// </li>


// <li>

// Upload file in controller to Cloudinary

// </li>


// <li>

// Save returned Cloudinary URL in student_profiles.profile_photo

// </li>


// </ul>





// {/*
// Future code:


// <input

// type="file"

// name="profile_photo"

// />



// Route:

// router.post(
// "/students",
// upload.single("profile_photo"),
// createStudent
// );



// Controller:


// const result =
// await cloudinary.uploader.upload(
// req.file.path
// );


// profile_photo =
// result.secure_url;



// */}



// </div>









// {/* 
// =====================================================
// FACILITIES
// =====================================================
// */}



// <div className="
// bg-gray-50
// rounded-2xl
// p-5
// border
// ">



// <div className="
// flex
// items-center
// gap-3
// mb-5
// ">


// <div className="
// w-10
// h-10
// rounded-xl
// bg-purple-100
// text-purple-600
// flex
// items-center
// justify-center
// ">

// 🏫

// </div>



// <h2 className="
// text-xl
// font-bold
// text-indigo-700
// ">

// Facilities

// </h2>


// </div>






// <div className="
// flex
// flex-col
// sm:flex-row
// gap-5
// ">






// <label className="
// flex
// items-center
// gap-3
// bg-white
// p-4
// rounded-xl
// border
// cursor-pointer
// hover:bg-indigo-50
// transition
// ">


// <input

// type="checkbox"

// name="transport"

// checked={form.transport}

// onChange={handleChange}

// className="
// w-5
// h-5
// accent-indigo-600
// "

// />


// <span className="
// font-medium
// ">

// School Transport

// </span>


// </label>







// <label className="
// flex
// items-center
// gap-3
// bg-white
// p-4
// rounded-xl
// border
// cursor-pointer
// hover:bg-indigo-50
// transition
// ">


// <input

// type="checkbox"

// name="hostel"

// checked={form.hostel}

// onChange={handleChange}

// className="
// w-5
// h-5
// accent-indigo-600
// "

// />


// <span className="
// font-medium
// ">

// Hostel Facility

// </span>


// </label>






// </div>



// </div>










// {/* 
// =====================================================
// SUBMIT
// =====================================================
// */}



// <div className="
// flex
// justify-end
// pt-5
// ">


// <button

// disabled={loading}

// className="
// bg-indigo-600
// hover:bg-indigo-700
// disabled:bg-gray-400
// text-white
// px-10
// py-3
// rounded-xl
// flex
// items-center
// gap-3
// font-semibold
// shadow-lg
// transition
// "


// >


// <FaSave/>


// {

// loading

// ?

// "Saving Student..."

// :

// "Add Student"

// }



// </button>


// </div>






// </form>


// </div>


// </div>


// </div>




// /*
// |--------------------------------------------------------------------------
// | Reusable Input Field
// |--------------------------------------------------------------------------
// */
// );}

// const InputField = ({

//     label,

//     name,

//     value,

//     onChange,

//     type="text",

//     required=false


// })=>{


// return (

// <div>


// <label className="
// block
// text-sm
// font-semibold
// text-gray-600
// mb-2
// ">

// {label}

// </label>




// <input

// type={type}

// name={name}

// value={value}

// onChange={onChange}

// required={required}

// placeholder={
//     `Enter ${label}`
// }

// className="
// w-full
// border
// border-gray-200
// rounded-xl
// p-3
// bg-white
// outline-none
// transition
// focus:ring-2
// focus:ring-indigo-500
// focus:border-transparent
// "


// />



// </div>


// );


// };









// /*
// |--------------------------------------------------------------------------
// | Reusable Select Field
// |--------------------------------------------------------------------------
// */


// const SelectField = ({

// label,

// name,

// value,

// onChange,

// options=[],

// required=false


// })=>{


// return (

// <div>


// <label className="
// block
// text-sm
// font-semibold
// text-gray-600
// mb-2
// ">

// {label}

// </label>





// <select

// name={name}

// value={value}

// onChange={onChange}

// required={required}

// className="
// w-full
// border
// border-gray-200
// rounded-xl
// p-3
// bg-white
// outline-none
// transition
// focus:ring-2
// focus:ring-indigo-500
// "


// >


// <option value="">

// Select {label}

// </option>



// {

// options.map((item,index)=>(


// <option

// key={index}

// value={item}

// >

// {item}

// </option>


// ))


// }



// </select>



// </div>


// );


// };









// export default StudentAdmission;

import {
    useEffect,
    useMemo,
    useState
} from "react";


import API from "../utils/axiosInstance";


import {
    FaUserGraduate,
    FaSave,
    FaSearch,
    FaEye,
    FaEdit,
    FaTrash,
    FaTimes
} from "react-icons/fa";





function StudentAdmission(){



/*
|--------------------------------------------------------------------------
| Initial Form
|--------------------------------------------------------------------------
*/


const initialForm = {


    admission_number:"",

    password:"",

    student_name:"",

    roll_number:"",

    class_name:"",

    section:"",


    profile_photo:"",


    gender:"",

    date_of_birth:"",

    blood_group:"",



    father_name:"",

    father_mobile:"",

    father_occupation:"",



    mother_name:"",

    mother_mobile:"",

    mother_occupation:"",



    email:"",

    address:"",

    city:"",

    state:"",

    pincode:"",


    aadhar_number:"",



    transport:false,

    hostel:false


};






/*
|--------------------------------------------------------------------------
| States
|--------------------------------------------------------------------------
*/


const [classes,setClasses] = useState([]);


const [sections,setSections] = useState([]);



const [students,setStudents] = useState([]);



const [form,setForm] = useState(initialForm);



const [selectedStudent,setSelectedStudent] = useState(null);

const [editingId,setEditingId] = useState(null);

const [search,setSearch] = useState("");

const [deleteStudent,setDeleteStudent] = useState(null);


const [deleteStudentId,setDeleteStudentId] = useState(null);



const [loading,setLoading] = useState(false);



const [tableLoading,setTableLoading] = useState(false);



const [message,setMessage] = useState("");



const [error,setError] = useState("");







/*
|--------------------------------------------------------------------------
| Initial Load
|--------------------------------------------------------------------------
*/


useEffect(()=>{


    fetchClasses();

    fetchSections();

    fetchStudents();


},[]);







/*
|--------------------------------------------------------------------------
| Fetch Classes
|--------------------------------------------------------------------------
*/


const fetchClasses = async()=>{


try{


const response = await API.get(

"/admin/students/classes"

);



setClasses(

response.data.data || []

);



}

catch(error){


console.log(error);


}



};









/*
|--------------------------------------------------------------------------
| Fetch Sections
|--------------------------------------------------------------------------
*/


const fetchSections = async()=>{


try{


const response = await API.get(

"/admin/students/sections"

);



setSections(

response.data.data || []

);



}

catch(error){


console.log(error);


}


};











/*
|--------------------------------------------------------------------------
| Fetch All Students
|--------------------------------------------------------------------------
*/


const fetchStudents = async()=>{


try{


setTableLoading(true);



const response = await API.get(

"/admin/students"

);



setStudents(

response.data.data || []

);



}


catch(error){


console.log(error);


}


finally{


setTableLoading(false);


}



};









/*
|--------------------------------------------------------------------------
| Search Filter
|--------------------------------------------------------------------------
*/


const filteredStudents = useMemo(()=>{


const keyword =

search.toLowerCase().trim();




if(!keyword){

return students;

}





return students.filter(student=>{


return (


student.student_name

?.toLowerCase()

.includes(keyword)



||



student.admission_number

?.toLowerCase()

.includes(keyword)



||



String(

student.roll_number

)

.includes(keyword)



);



});



},[

students,

search

]);









/*
|--------------------------------------------------------------------------
| Input Change
|--------------------------------------------------------------------------
*/


const handleChange=(e)=>{


const {

name,

value,

type,

checked

}=e.target;




setForm({

...form,


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
| Reset Form
|--------------------------------------------------------------------------
*/


const resetForm=()=>{


setForm(initialForm);


setEditingId(null);


};










// const resetForm = ()=>{


// setForm({

// admission_number:"",
// password:"",
// student_name:"",
// roll_number:"",
// class_name:"",
// section:"",
// profile_photo:"",
// gender:"",
// date_of_birth:"",
// blood_group:"",
// father_name:"",
// father_mobile:"",
// father_occupation:"",
// mother_name:"",
// mother_mobile:"",
// mother_occupation:"",
// email:"",
// address:"",
// city:"",
// state:"",
// pincode:"",
// aadhar_number:"",
// transport:false,
// hostel:false

// });


// setEditingId(null);


// };

const handleEdit = (student)=>{


setEditingId(student.id);



setForm({


admission_number:
student.admission_number || "",


password:"",


student_name:
student.student_name || "",



roll_number:
student.roll_number || "",



class_name:
student.class_name || "",



section:
student.section_name ||
student.section ||
"",



profile_photo:
student.profile_photo || "",



gender:
student.gender || "",



date_of_birth:
student.date_of_birth
?
student.date_of_birth.split("T")[0]
:
"",



blood_group:
student.blood_group || "",



father_name:
student.father_name || "",



father_mobile:
student.father_mobile || "",



father_occupation:
student.father_occupation || "",



mother_name:
student.mother_name || "",



mother_mobile:
student.mother_mobile || "",



mother_occupation:
student.mother_occupation || "",



email:
student.email || "",



address:
student.address || "",



city:
student.city || "",



state:
student.state || "",



pincode:
student.pincode || "",



aadhar_number:
student.aadhar_number || "",



transport:
student.transport || false,



hostel:
student.hostel || false



});





window.scrollTo({

top:0,

behavior:"smooth"

});


};
/*
|--------------------------------------------------------------------------
| Submit Handler
|--------------------------------------------------------------------------
*/
const handleDelete = async()=>{


try{


setLoading(true);



const response = await API.delete(

`/admin/students/${deleteStudent.id}`

);



setMessage(

response.data.message

);



setDeleteStudent(null);



fetchStudents();



}


catch(error){


console.log(error);



setError(

error.response?.data?.message ||

"Delete failed"

);


}


finally{


setLoading(false);


}



};

const handleSubmit=async(e)=>{


e.preventDefault();



try{


setLoading(true);


setMessage("");

setError("");





/*
 Future:

 POST / PUT

*/

let response;



if(editingId){



response = await API.put(

`/admin/students/${editingId}`,

form

);



}
else{


response = await API.post(

"/admin/students",

form

);



}





setMessage(

response.data.message

);



fetchStudents();



resetForm();



}


catch(error){



console.log(error);



setError(

error.response?.data?.message ||

"Student admission failed"

);



}


finally{


setLoading(false);


}



};










return (


<div

className="
min-h-screen
bg-gradient-to-br
from-indigo-50
via-white
to-blue-50
p-4
lg:p-8
"

>


<div

className="
max-w-7xl
mx-auto
bg-white
rounded-3xl
shadow-xl
overflow-hidden
"

>


{/* Header */}


<div

className="
bg-gradient-to-r
from-indigo-600
to-blue-600
p-6
text-white
"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
w-16
h-16
rounded-2xl
bg-white/20
flex
items-center
justify-center
text-3xl
"

>

<FaUserGraduate/>

</div>



<div>

<h1 className="text-3xl font-bold">

Student Admission Portal

</h1>


<p className="text-indigo-100 mt-1">

Create and manage students

</p>


</div>



</div>


</div>






<div className="p-6">


{
message &&

<div className="
mb-5
bg-green-50
border
border-green-200
text-green-700
rounded-xl
p-4
">

{message}

</div>

}






{
error &&

<div className="
mb-5
bg-red-50
border
border-red-200
text-red-700
rounded-xl
p-4
">

{error}

</div>

}






{/* 
=====================================================
ADMISSION FORM
=====================================================
*/}


<form

onSubmit={handleSubmit}

className="
space-y-8
"

>



{/* Student Information */}


<div

className="
bg-gray-50
rounded-2xl
p-5
border
"

>


<h2

className="
text-xl
font-bold
text-indigo-700
mb-5
"

>

Student Information

</h2>



<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
"

>



<InputField

label="Admission Number"

name="admission_number"

value={form.admission_number}

onChange={handleChange}

required

/>





<InputField

label="Password"

name="password"

type="password"

value={form.password}

onChange={handleChange}

/>





<InputField

label="Student Name"

name="student_name"

value={form.student_name}

onChange={handleChange}

required

/>





<InputField

label="Roll Number"

name="roll_number"

type="number"

value={form.roll_number}

onChange={handleChange}

required

/>






<SelectField

label="Class"

name="class_name"

value={form.class_name}

onChange={handleChange}

options={

classes.map(

item=>item.class_name

)

}

required

/>







<SelectField

label="Section"

name="section"

value={form.section}

onChange={handleChange}

options={

sections.map(

item=>item.section_name

)

}

required

/>







<SelectField

label="Gender"

name="gender"

value={form.gender}

onChange={handleChange}

options={[

"Male",

"Female"

]}

/>






<InputField

label="Date Of Birth"

name="date_of_birth"

type="date"

value={form.date_of_birth}

onChange={handleChange}

/>







<InputField

label="Blood Group"

name="blood_group"

value={form.blood_group}

onChange={handleChange}

/>




</div>



</div>









{/* Parent Information */}


<div

className="
bg-gray-50
rounded-2xl
p-5
border
"

>


<h2

className="
text-xl
font-bold
text-indigo-700
mb-5
"

>

Parent Information

</h2>





<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
"

>


<InputField

label="Father Name"

name="father_name"

value={form.father_name}

onChange={handleChange}

/>





<InputField

label="Father Mobile"

name="father_mobile"

value={form.father_mobile}

onChange={handleChange}

/>





<InputField

label="Father Occupation"

name="father_occupation"

value={form.father_occupation}

onChange={handleChange}

/>







<InputField

label="Mother Name"

name="mother_name"

value={form.mother_name}

onChange={handleChange}

/>






<InputField

label="Mother Mobile"

name="mother_mobile"

value={form.mother_mobile}

onChange={handleChange}

/>






<InputField

label="Mother Occupation"

name="mother_occupation"

value={form.mother_occupation}

onChange={handleChange}

/>


</div>


</div>









{/* Contact Information */}


<div

className="
bg-gray-50
rounded-2xl
p-5
border
"

>


<h2

className="
text-xl
font-bold
text-indigo-700
mb-5
"

>

Contact Information

</h2>





<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
"

>



<InputField

label="Email"

name="email"

type="email"

value={form.email}

onChange={handleChange}

/>





<InputField

label="City"

name="city"

value={form.city}

onChange={handleChange}

/>






<InputField

label="State"

name="state"

value={form.state}

onChange={handleChange}

/>






<InputField

label="Pincode"

name="pincode"

value={form.pincode}

onChange={handleChange}

/>






<InputField

label="Aadhar Number"

name="aadhar_number"

value={form.aadhar_number}

onChange={handleChange}

/>




</div>





<textarea


name="address"


value={form.address}


onChange={handleChange}


rows="4"


placeholder="Complete Address"


className="
w-full
mt-5
rounded-xl
border
p-3
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>


</div>










{/* Facilities */}


<div

className="
bg-gray-50
rounded-2xl
p-5
border
"

>


<h2

className="
text-xl
font-bold
text-indigo-700
mb-5
"

>

Facilities

</h2>





<div className="flex gap-5">


<label className="
flex
items-center
gap-3
bg-white
p-4
rounded-xl
border
cursor-pointer
">


<input

type="checkbox"

name="transport"

checked={form.transport}

onChange={handleChange}

/>


Transport


</label>







<label className="
flex
items-center
gap-3
bg-white
p-4
rounded-xl
border
cursor-pointer
">


<input

type="checkbox"

name="hostel"

checked={form.hostel}

onChange={handleChange}

/>


Hostel


</label>



</div>



</div>









{/* Submit */}


<div className="flex justify-end">


<button


disabled={loading}


className="
bg-indigo-600
hover:bg-indigo-700
text-white
px-10
py-3
rounded-xl
flex
items-center
gap-3
font-semibold
"


>


<FaSave/>


{

loading

?

"Saving..."

:

editingId

?

"Update Student"

:

"Add Student"

}


</button>



</div>






</form>
// =====================================================
// STUDENT LIST
// =====================================================


<div className="mt-10">


<div className="
flex
flex-col
md:flex-row
md:justify-between
md:items-center
gap-4
mb-5
">


<div>


<h2 className="
text-2xl
font-bold
text-indigo-700
">

All Students

</h2>


<p className="text-gray-500">

Manage admitted students

</p>


</div>





<div className="relative">


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


type="text"


placeholder="Search student..."


value={search}


onChange={(e)=>setSearch(e.target.value)}



className="
border
rounded-xl
py-3
pl-10
pr-4
outline-none
focus:ring-2
focus:ring-indigo-500
"




/>


</div>





</div>










{
tableLoading ?


<div className="
bg-white
rounded-xl
shadow
p-10
text-center
">


<div className="
animate-spin
h-10
w-10
border-4
border-indigo-600
border-t-transparent
rounded-full
mx-auto
">


</div>


<p className="mt-3 text-gray-500">

Loading Students...

</p>


</div>



:


<div className="
bg-white
rounded-2xl
shadow
overflow-hidden
">


<div className="overflow-x-auto">


<table className="min-w-full">


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

Student

</th>



<th className="p-4 text-left">

Class

</th>



<th className="p-4 text-left">

Section

</th>



<th className="p-4 text-left">

Session

</th>



<th className="p-4 text-center">

Action

</th>



</tr>


</thead>





<tbody>



{

filteredStudents.length > 0 ?



filteredStudents.map(student=>(


<tr

key={student.id}

className="
border-b
hover:bg-indigo-50
transition
"



>





<td className="p-4">


{

student.profile_photo ?



<img

src={student.profile_photo}

className="
w-14
h-14
rounded-full
object-cover
border
"

/>



:


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
"

>


{

student.student_name

?.charAt(0)

}



</div>


}



</td>









<td className="p-4 font-medium">


{student.admission_number}


</td>









<td className="p-4">


<p className="font-semibold">


{student.student_name}


</p>



<p className="text-sm text-gray-500">


Roll No :

{" "}

{student.roll_number}



</p>


</td>










<td className="p-4">


{student.class_name}


</td>










<td className="p-4">


{student.section_name || student.section}


</td>










<td className="p-4">


{student.session}


</td>









<td className="p-4">


<div className="
flex
justify-center
gap-2
">


<button


onClick={()=>setSelectedStudent(student)}



className="
bg-blue-600
text-white
p-2
rounded-lg
hover:bg-blue-700
"


>


<FaEye/>


</button>







<button


onClick={()=>handleEdit(student)}


className="
bg-green-600
text-white
p-2
rounded-lg
hover:bg-green-700
"


>


<FaEdit/>


</button>






<button


onClick={()=>setDeleteStudent(student)}


className="
bg-red-600
text-white
p-2
rounded-lg
hover:bg-red-700
"



>


<FaTrash/>


</button>


</div>


</td>







</tr>


))



:


<tr>


<td

colSpan="7"

className="
text-center
py-10
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


</div>



}



</div>
// =====================================================
// STUDENT PROFILE MODAL
// =====================================================


{

selectedStudent && (


<div

className="
fixed
inset-0
bg-black/50
z-50
flex
items-center
justify-center
p-4
"

>


<div

className="
bg-white
w-full
max-w-4xl
rounded-2xl
shadow-xl
max-h-[90vh]
overflow-y-auto
"

>





{/* Header */}


<div

className="
sticky
top-0
bg-white
border-b
p-5
flex
justify-between
items-center
"

>


<h2

className="
text-2xl
font-bold
text-indigo-700
"

>

Student Complete Profile

</h2>




<button


onClick={()=>setSelectedStudent(null)}


className="
text-gray-500
hover:text-red-600
text-xl
"

>


<FaTimes/>


</button>



</div>








<div className="p-6">





{/* Profile Header */}


<div className="text-center">


{

selectedStudent.profile_photo ?


<img

src={selectedStudent.profile_photo}

className="
w-32
h-32
rounded-full
object-cover
mx-auto
border-4
border-indigo-100
"

/>


:


<div

className="
w-32
h-32
rounded-full
bg-indigo-100
text-indigo-700
flex
items-center
justify-center
text-5xl
font-bold
mx-auto
"

>

{

selectedStudent.student_name

?.charAt(0)

?.toUpperCase()

}


</div>


}



<h2

className="
text-3xl
font-bold
text-indigo-700
mt-4
"

>


{selectedStudent.student_name}


</h2>



<p className="text-gray-500">

Admission Number :

{" "}

{selectedStudent.admission_number}

</p>



<p className="text-gray-500">

Roll Number :

{" "}

{selectedStudent.roll_number}

</p>



</div>









<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-6
mt-8
"

>







<ProfileCard title="Student Information">


<ProfileRow

label="Class"

value={selectedStudent.class_name}

/>


<ProfileRow

label="Section"

value={

selectedStudent.section_name ||

selectedStudent.section

}

/>



<ProfileRow

label="Session"

value={selectedStudent.session}

/>


<ProfileRow

label="Gender"

value={selectedStudent.gender}

/>



<ProfileRow

label="Date Of Birth"

value={selectedStudent.date_of_birth}

/>



<ProfileRow

label="Blood Group"

value={selectedStudent.blood_group}

/>



</ProfileCard>









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

"Available"

:

"Not Available"

}

/>



</ProfileCard>





</div>







</div>



</div>



</div>


)


}

{/* 
=====================================================
STUDENT DETAIL MODAL
=====================================================
*/}


{
selectedStudent && (


<div

className="
fixed
inset-0
bg-black/50
z-50
flex
items-center
justify-center
p-4
"

>


<div

className="
bg-white
w-full
max-w-4xl
rounded-2xl
shadow-xl
max-h-[90vh]
overflow-y-auto
"

>





{/* Header */}

<div

className="
sticky
top-0
bg-white
border-b
p-5
flex
justify-between
items-center
"

>


<h2

className="
text-2xl
font-bold
text-indigo-700
"

>

Student Complete Profile

</h2>



<button

onClick={()=>setSelectedStudent(null)}

className="
text-gray-500
hover:text-red-600
text-xl
"

>

<FaTimes/>

</button>



</div>









<div className="p-6">



{/* Profile Header */}


<div className="text-center">



{

selectedStudent.profile_photo ?


<img

src={selectedStudent.profile_photo}

className="
w-32
h-32
rounded-full
object-cover
mx-auto
border-4
border-indigo-100
"

/>


:


<div

className="
w-32
h-32
rounded-full
bg-indigo-100
text-indigo-700
flex
items-center
justify-center
text-4xl
font-bold
mx-auto
"

>


{
selectedStudent.student_name
?.charAt(0)
}



</div>


}





<h2

className="
text-3xl
font-bold
text-indigo-700
mt-4
"

>


{selectedStudent.student_name}


</h2>



<p className="text-gray-500">

Admission No :

{" "}

{selectedStudent.admission_number}


</p>



</div>









<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-6
mt-8
"

>






<DetailCard title="Student Information">


<DetailRow

label="Roll Number"

value={selectedStudent.roll_number}

/>


<DetailRow

label="Class"

value={selectedStudent.class_name}

/>



<DetailRow

label="Section"

value={
selectedStudent.section_name ||
selectedStudent.section
}

/>



<DetailRow

label="Session"

value={selectedStudent.session}

/>



<DetailRow

label="Gender"

value={selectedStudent.gender}

/>



<DetailRow

label="DOB"

value={selectedStudent.date_of_birth}

/>


<DetailRow

label="Blood Group"

value={selectedStudent.blood_group}

/>



</DetailCard>









<DetailCard title="Father Details">


<DetailRow

label="Name"

value={selectedStudent.father_name}

/>



<DetailRow

label="Mobile"

value={selectedStudent.father_mobile}

/>



<DetailRow

label="Occupation"

value={selectedStudent.father_occupation}

/>



</DetailCard>









<DetailCard title="Mother Details">


<DetailRow

label="Name"

value={selectedStudent.mother_name}

/>



<DetailRow

label="Mobile"

value={selectedStudent.mother_mobile}

/>



<DetailRow

label="Occupation"

value={selectedStudent.mother_occupation}

/>



</DetailCard>









<DetailCard title="Contact Details">


<DetailRow

label="Email"

value={selectedStudent.email}

/>



<DetailRow

label="Address"

value={selectedStudent.address}

/>



<DetailRow

label="City"

value={selectedStudent.city}

/>



<DetailRow

label="State"

value={selectedStudent.state}

/>



<DetailRow

label="Pincode"

value={selectedStudent.pincode}

/>



</DetailCard>









<DetailCard title="Facilities">


<DetailRow

label="Transport"

value={
selectedStudent.transport
?
"Available"
:
"Not Available"
}

/>



<DetailRow

label="Hostel"

value={
selectedStudent.hostel
?
"Available"
:
"Not Available"
}

/>



</DetailCard>








</div>



</div>



</div>



</div>



)

}

{/* 
=====================================================
DELETE CONFIRMATION MODAL
=====================================================
*/}


{

deleteStudent && (


<div

className="
fixed
inset-0
bg-black/50
z-50
flex
items-center
justify-center
p-4
"

>


<div

className="
bg-white
rounded-2xl
shadow-xl
w-full
max-w-md
p-6
"

>


<h2

className="
text-xl
font-bold
text-red-600
mb-4
"

>

Delete Student

</h2>





<p className="text-gray-600 mb-6">


Are you sure you want to delete?


<br/>


<span className="font-semibold text-gray-800">

{deleteStudent.student_name}

</span>



?


</p>








<div

className="
flex
justify-end
gap-3
"

>


<button


onClick={()=>setDeleteStudent(null)}


className="
px-5
py-2
rounded-xl
bg-gray-200
hover:bg-gray-300
"

>

Cancel

</button>







<button


onClick={handleDelete}


className="
px-5
py-2
rounded-xl
bg-red-600
text-white
hover:bg-red-700
"

>


Delete


</button>



</div>





</div>


</div>



)


}

</div>



</div>


</div>


);



}


// -------------------------------- reusable components ------------------------



const ProfileCard = ({
title,
children
})=>{


return (

<div

className="
bg-gray-50
rounded-xl
p-5
border
"

>

<h3

className="
font-bold
text-indigo-700
mb-4
"

>

{title}

</h3>


<div className="space-y-3">

{children}

</div>


</div>


);


};


const ProfileRow = ({
label,
value
})=>{


return (

<div

className="
flex
justify-between
gap-4
border-b
pb-2
"

>


<span className="text-gray-500">

{label}

</span>


<span className="font-medium text-right">

{value || "-"}

</span>


</div>


);


};
const InputField = ({
label,
name,
value,
onChange,
type="text",
required=false
})=>{


return (

<div>


<label className="block text-sm font-semibold text-gray-600 mb-2">

{label}

</label>



<input

type={type}

name={name}

value={value}

onChange={onChange}

required={required}

className="
w-full
border
rounded-xl
p-3
outline-none
focus:ring-2
focus:ring-indigo-500
"

/>


</div>

);


};






const SelectField = ({
label,
name,
value,
onChange,
options=[]
})=>{


return (

<div>


<label className="block text-sm font-semibold text-gray-600 mb-2">

{label}

</label>



<select

name={name}

value={value}

onChange={onChange}

className="
w-full
border
rounded-xl
p-3
outline-none
focus:ring-2
focus:ring-indigo-500
"

>


<option value="">

Select {label}

</option>



{

options.map((item,index)=>(

<option

key={index}

value={item}

>

{item}

</option>

))

}



</select>


</div>


);


};

const DetailCard = ({
title,
children
})=>{


return (

<div

className="
bg-gray-50
border
rounded-xl
p-5
"

>


<h3

className="
text-lg
font-bold
text-indigo-700
mb-4
"

>

{title}

</h3>


<div className="space-y-3">

{children}

</div>


</div>


);


};





const DetailRow = ({
label,
value
})=>{


return (

<div

className="
flex
justify-between
gap-3
border-b
pb-2
"

>


<span className="text-gray-500">

{label}

</span>



<span className="
font-medium
text-gray-800
text-right
"

>

{
value || "-"
}

</span>



</div>


);


};

export default StudentAdmission;