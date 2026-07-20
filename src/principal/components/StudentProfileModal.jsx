import React from "react";

import {
    FaTimes,
    FaUser,
    FaClipboardCheck,
    FaChartLine
}
from "react-icons/fa";





const StudentProfileModal = ({

    student,

    onClose

}) => {



if(!student)

return null;






return (


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
max-w-5xl
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
z-10
"

>


<h2 className="
text-2xl
font-bold
text-indigo-700
">

Student Complete Profile

</h2>



<button

onClick={onClose}

className="
text-gray-500
hover:text-red-600
text-xl
"

>

<FaTimes/>

</button>



</div>









{/* Profile Header */}


<div className="
p-6
text-center
">


{

student.basic.profile_photo

?

<img

src={student.basic.profile_photo}

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

student.basic.student_name

?.charAt(0)

}


</div>


}





<h2 className="
text-3xl
font-bold
text-indigo-700
mt-4
">

{student.basic.student_name}

</h2>


<p className="text-gray-500">

Admission No :

{" "}

{student.basic.admission_number}

</p>



<p className="text-gray-500">

Roll No :

{" "}

{student.basic.roll_number}

</p>


</div>









<div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
p-6
">







<ProfileCard

title="Personal Information"

icon={<FaUser/>}

>


<ProfileRow

label="Gender"

value={student.basic.gender}

/>


<ProfileRow

label="Date of Birth"

value={student.basic.date_of_birth}

/>


<ProfileRow

label="Blood Group"

value={student.basic.blood_group}

/>


</ProfileCard>









<ProfileCard

title="School Details"

icon={<FaUser/>}

>


<ProfileRow

label="Session"

value={student.school.session}

/>


<ProfileRow

label="Class"

value={student.school.class_name}

/>


<ProfileRow

label="Section"

value={student.school.section}

/>


<ProfileRow

label="Transport"

value={

student.school.transport

?

"Available"

:

"Not Available"

}

/>


<ProfileRow

label="Hostel"

value={

student.school.hostel

?

"Yes"

:

"No"

}

/>


</ProfileCard>









<ProfileCard

title="Father Details"

icon={<FaUser/>}

>


<ProfileRow

label="Name"

value={student.parents.father_name}

/>


<ProfileRow

label="Mobile"

value={student.parents.father_mobile}

/>


<ProfileRow

label="Occupation"

value={student.parents.father_occupation}

/>


</ProfileCard>









<ProfileCard

title="Mother Details"

icon={<FaUser/>}

>


<ProfileRow

label="Name"

value={student.parents.mother_name}

/>


<ProfileRow

label="Mobile"

value={student.parents.mother_mobile}

/>


<ProfileRow

label="Occupation"

value={student.parents.mother_occupation}

/>


</ProfileCard>









<ProfileCard

title="Contact Information"

icon={<FaUser/>}

>


<ProfileRow

label="Email"

value={student.contact.email}

/>


<ProfileRow

label="Address"

value={student.contact.address}

/>


<ProfileRow

label="City"

value={student.contact.city}

/>


<ProfileRow

label="State"

value={student.contact.state}

/>


</ProfileCard>









{/* Attendance */}

<div className="
bg-green-50
rounded-xl
p-5
border
">

<h3 className="
font-bold
text-green-700
mb-4
flex
items-center
gap-2
">

<FaClipboardCheck/>

Attendance Overview

</h3>



<ProfileRow

label="Total Days"

value={student.attendance.total_days}

/>


<ProfileRow

label="Present"

value={student.attendance.present_days}

/>


<ProfileRow

label="Absent"

value={student.attendance.absent_days}

/>


<ProfileRow

label="Leave"

value={student.attendance.leave_days}

/>


<ProfileRow

label="Percentage"

value={`${student.attendance.percentage}%`}

/>


</div>









{/* Performance */}

<div className="
md:col-span-2
bg-purple-50
rounded-xl
p-5
border
">


<h3 className="
font-bold
text-purple-700
mb-4
flex
items-center
gap-2
">

<FaChartLine/>

Academic Performance

</h3>




<div className="
text-center
mb-5
">


<p className="text-gray-600">

Overall Percentage

</p>


<h2 className="
text-3xl
font-bold
text-purple-700
">

{

Number(

student.performance.overall_percentage

)

.toFixed(2)

}%

</h2>


</div>








<div className="
overflow-x-auto
">


<table className="w-full">


<thead className="
bg-purple-600
text-white
">


<tr>


<th className="p-3">

Exam

</th>


<th className="p-3">

Subject

</th>


<th className="p-3">

Marks

</th>


<th className="p-3">

Percentage

</th>


</tr>


</thead>



<tbody>


{

student.performance.exams.map(

(exam,index)=>(


<tr

key={index}

className="border-b"

>


<td className="p-3">

{exam.exam_name}

</td>


<td className="p-3">

{exam.subject}

</td>


<td className="p-3">

{exam.obtained_marks}

/

{exam.maximum_marks}

</td>


<td className="p-3">

{

Number(exam.percentage)

.toFixed(2)

}%

</td>



</tr>


)


)


}



</tbody>


</table>


</div>



</div>







</div>


</div>


</div>


);


};








const ProfileCard = ({

title,

icon,

children

})=>(


<div className="
bg-gray-50
rounded-xl
p-5
border
">


<h3 className="
text-lg
font-bold
text-indigo-700
mb-4
flex
items-center
gap-2
">

{icon}

{title}

</h3>


<div className="space-y-3">

{children}

</div>


</div>


);







const ProfileRow = ({

label,

value

})=>(


<div className="
flex
flex-col
sm:flex-row
sm:justify-between
gap-1
border-b
pb-2
">


<span className="text-gray-500">

{label}

</span>



<span className="
font-medium
text-gray-800
sm:text-right
">

{value || "-"}

</span>



</div>


);





export default StudentProfileModal;