
import {
    useStudent
} from "../../context/StudentContext";


import {
    HiAcademicCap,
    HiUser,
    HiIdentification,
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiCalendar,
    HiHome,
    HiHeart,
    HiBookOpen
} from "react-icons/hi";



export default function Profile(){


const {
    student
}=useStudent();



if(!student){

return (

<div className="
min-h-screen
bg-gray-100
flex
items-center
justify-center
">


<div className="
bg-white
shadow-lg
rounded-xl
p-8
text-center
">


<div className="
animate-spin
w-10
h-10
border-4
border-emerald-600
border-t-transparent
rounded-full
mx-auto
mb-4
">
</div>


<h2 className="
text-gray-600
font-semibold
">

Loading Profile...

</h2>


</div>


</div>

)

}





return (

<div className="
min-h-screen
bg-gradient-to-br
from-emerald-50
via-white
to-green-100
p-4
md:p-8
">



<div className="
max-w-6xl
mx-auto
space-y-6
">





{/* HEADER CARD */}

<div className="
bg-white
rounded-3xl
shadow-xl
p-6
md:p-8
flex
flex-col
md:flex-row
items-center
gap-6
">


<div className="
relative
">


<img

src={
student.profile_photo ||
"https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
}

className="
w-32
h-32
rounded-full
object-cover
border-4
border-emerald-500
shadow-lg
"

/>


<div className="
absolute
bottom-2
right-2
bg-green-500
w-5
h-5
rounded-full
border-2
border-white
">

</div>


</div>





<div className="
text-center
md:text-left
">


<h1 className="
text-3xl
md:text-4xl
font-bold
text-gray-800
">

{
student.student_name
}

</h1>


<p className="
text-gray-500
mt-2
flex
items-center
justify-center
md:justify-start
gap-2
">


<HiAcademicCap/>

Student Profile


</p>



<div className="
mt-4
flex
flex-wrap
gap-3
justify-center
md:justify-start
">


<Badge

text={`Class ${student.class_name}-${student.section}`}

/>


<Badge

text={student.session}

/>


<Badge

text={`Roll No ${student.roll_number}`}

/>



</div>


</div>


</div>









{/* PERSONAL DETAILS */}


<Section

title="Personal Information"

icon={<HiUser/>}

>


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-5
">


<Info

title="Student Name"

value={student.student_name}

/>


<Info

title="Gender"

value={student.gender}

/>


<Info

title="Date of Birth"

value={
student.date_of_birth
?
new Date(
student.date_of_birth
)
.toLocaleDateString()
:
"-"
}

/>


<Info

title="Blood Group"

value={student.blood_group}

/>


<Info

title="Aadhar Number"

value={student.aadhar_number}

/>


<Info

title="Admission Number"

value={student.admission_number}

/>


</div>


</Section>









{/* ACADEMIC */}


<Section

title="Academic Details"

icon={<HiBookOpen/>}

>


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-5
">


<Info

title="Class"

value={student.class_name}

/>



<Info

title="Section"

value={student.section}

/>



<Info

title="Session"

value={student.session}

/>


<Info

title="Roll Number"

value={student.roll_number}

/>



</div>


</Section>









{/* PARENT DETAILS */}


<Section

title="Parent Information"

icon={<HiHeart/>}

>


<div className="
grid
sm:grid-cols-2
gap-5
">


<Info

title="Father Name"

value={student.father_name}

/>


<Info

title="Father Mobile"

value={student.father_mobile}

/>


<Info

title="Father Occupation"

value={student.father_occupation}

/>


<Info

title="Mother Name"

value={student.mother_name}

/>


<Info

title="Mother Mobile"

value={student.mother_mobile}

/>


<Info

title="Mother Occupation"

value={student.mother_occupation}

/>


</div>


</Section>









{/* CONTACT */}


<Section

title="Contact Details"

icon={<HiLocationMarker/>}

>


<div className="
grid
sm:grid-cols-2
gap-5
">


<Info

title="Email"

value={student.email}

/>


<Info

title="Address"

value={student.address}

/>


<Info

title="City"

value={student.city}

/>


<Info

title="State"

value={student.state}

/>


<Info

title="Pincode"

value={student.pincode}

/>



</div>


</Section>






</div>


</div>


)


}








function Section({
title,
icon,
children
}){


return (

<div className="
bg-white
rounded-3xl
shadow-lg
p-6
md:p-8
">


<div className="
flex
items-center
gap-3
mb-6
text-emerald-700
">


<div className="
text-2xl
">

{icon}

</div>


<h2 className="
text-xl
md:text-2xl
font-bold
">

{title}

</h2>


</div>



{children}



</div>

)

}







function Info({
title,
value
}){


return (

<div className="
bg-gray-50
rounded-2xl
p-4
border
border-gray-100
hover:shadow-md
transition
">


<p className="
text-sm
text-gray-500
mb-1
">

{title}

</p>


<p className="
font-semibold
text-gray-800
break-words
">

{
value || "-"
}

</p>


</div>

)

}








function Badge({
text
}){


return (

<span className="
px-4
py-2
rounded-full
bg-emerald-100
text-emerald-700
font-semibold
text-sm
">

{text}

</span>

)

}

