import {

    HiUserGroup,
    HiClipboardCheck,
    HiPencilAlt,
    HiBookOpen,
    HiCalendar,
    HiSpeakerphone

}
from "react-icons/hi";

import {
    useTeacher
}
from "../../context/TeacherContext";



function TeacherHome(){



    const {

        teacher,

        dashboard,

        classes

    }
    =
    useTeacher();






    if(!dashboard){


        return (

            <div>

                Loading Dashboard...

            </div>

        );


    }






    const stats=[


        {

            title:"Total Students",

            value:
            dashboard.total_students,

            icon:
            <HiUserGroup size={28}/>,

            color:
            "bg-indigo-100 text-indigo-700"

        },



        {

            title:"Today's Attendance",

            value:
            dashboard.today_attendance,

            icon:
            <HiClipboardCheck size={28}/>,

            color:
            "bg-green-100 text-green-700"

        },



        {

            title:"Pending Marks",

            value:
            `${dashboard.pending_marks} Classes`,

            icon:
            <HiPencilAlt size={28}/>,

            color:
            "bg-yellow-100 text-yellow-700"

        },



        {

            title:"Subjects",

            value:
            dashboard.total_subjects,

            icon:
            <HiBookOpen size={28}/>,

            color:
            "bg-blue-100 text-blue-700"

        }


    ];






    const notices=[

        "Submit monthly attendance before Friday",

        "Unit test marks upload deadline tomorrow",

        "Staff meeting at 3:30 PM"

    ];








return (



<div className="space-y-8">





{/* Welcome */}


<div
className="
bg-gradient-to-r
from-indigo-600
to-blue-700
rounded-3xl
p-6
md:p-8
text-white
shadow-lg
"
>


<h1 className="text-3xl font-bold">

Welcome,
{teacher.teacher_name}
👋

</h1>



<p className="mt-3 text-indigo-100">

Manage your classes, attendance,
marks and academic activities.

</p>




<div className="mt-5 flex flex-wrap gap-4 text-sm">


<span
className="
bg-white/20
px-4
py-2
rounded-xl
"
>

{teacher.designation}

</span>



<span
className="
bg-white/20
px-4
py-2
rounded-xl
"
>

Classes:
{classes.length}

</span>


</div>



</div>









{/* Stats */}


<div
className="
grid
sm:grid-cols-2
xl:grid-cols-4
gap-6
"
>


{

stats.map(item=>(


<div

key={item.title}

className="
bg-white
rounded-2xl
border
shadow-sm
p-6
hover:shadow-md
transition
"

>


<div

className={`
w-12
h-12
rounded-xl
flex
items-center
justify-center
${item.color}
`}

>

{item.icon}

</div>



<p className="text-gray-500 mt-5">

{item.title}

</p>



<h2 className="text-3xl font-bold mt-2">

{item.value}

</h2>



</div>



))

}



</div>









{/* Middle Section */}


<div
className="
grid
lg:grid-cols-2
gap-6
"
>






{/* Classes */}


<div
className="
bg-white
rounded-2xl
border
shadow-sm
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>


<HiCalendar
className="text-indigo-600"
size={25}
/>


<h2 className="text-xl font-bold">

My Classes

</h2>


</div>





<div className="space-y-4">


{

classes.map(
(item,index)=>(


<div

key={index}

className="
flex
justify-between
items-center
bg-slate-50
rounded-xl
p-4
"

>


<div>


<p className="font-semibold">

Class {item.class_name}
-
{item.section_name}

</p>



<p className="text-sm text-gray-500">

{item.subject_name}

</p>



</div>


</div>



)

)


}



</div>


</div>









{/* Notices */}


<div
className="
bg-white
rounded-2xl
border
shadow-sm
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>


<HiSpeakerphone

className="text-red-500"

size={25}

/>


<h2 className="text-xl font-bold">

Recent Notices

</h2>



</div>





<div className="space-y-4">


{

notices.map(
(notice,index)=>(


<div

key={index}

className="
flex
gap-3
bg-slate-50
p-4
rounded-xl
"

>


<span>

📢

</span>


<p className="text-gray-700 text-sm">

{notice}

</p>


</div>


)

)


}



</div>


</div>




</div>









{/* Quick Actions */}


<div
className="
bg-white
rounded-2xl
border
shadow-sm
p-6
"
>


<h2 className="text-xl font-bold mb-5">

Quick Actions

</h2>



<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
"
>


<button
className="
bg-indigo-50
text-indigo-700
p-4
rounded-xl
font-semibold
"
>

📅 Upload Attendance

</button>



<button
className="
bg-green-50
text-green-700
p-4
rounded-xl
font-semibold
"
>

📝 Upload Marks

</button>



<button
className="
bg-blue-50
text-blue-700
p-4
rounded-xl
font-semibold
"
>

📚 Add Notes

</button>



<button
className="
bg-purple-50
text-purple-700
p-4
rounded-xl
font-semibold
"
>

📢 Create Notice

</button>



</div>



</div>







</div>



);


}



export default TeacherHome;