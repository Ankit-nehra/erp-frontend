import React, {
    useEffect,
    useState
} from "react";


import {
    FaBook,
    FaCheckCircle,
    FaClock
} from "react-icons/fa";


import API from "../../utils/axiosInstance.js";



const Syllabus = () => {


    const [syllabus,setSyllabus] = useState([]);

    const [loading,setLoading] = useState(true);

    const [subjectFilter,setSubjectFilter] = useState("All");





    useEffect(()=>{

        fetchSyllabus();

    },[]);






    const fetchSyllabus = async()=>{


        try{


            setLoading(true);


            const res =
            await API.get(
                "/student/syllabus"
            );


            setSyllabus(
                res.data.data || []
            );


        }
        catch(error){

            console.log(error);

        }
        finally{

            setLoading(false);

        }


    };








    const subjects = [

        "All",

        ...new Set(

            syllabus.map(
                item=>item.subject_name
            )

        )

    ];







    const filteredSyllabus =

    subjectFilter==="All"

    ?

    syllabus

    :

    syllabus.filter(

        item=>

        item.subject_name===subjectFilter

    );








    const completed =

    syllabus.filter(

        item=>

        item.status==="Completed"

    ).length;





    const progress =

    syllabus.length

    ?

    Math.round(

        completed /

        syllabus.length *

        100

    )

    :

    0;








return (

<div

className="
min-h-screen
bg-gray-100
p-5
"

>



{/* HEADER */}

<div className="mb-6">


<h1

className="
text-3xl
font-bold
text-indigo-700
"

>

My Syllabus

</h1>


<p

className="
text-gray-600
"

>

Track your class syllabus progress

</p>


</div>








{/* SUMMARY CARDS */}


<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"

>


<InfoCard

title="Total Chapters"

value={syllabus.length}

icon={<FaBook/>}

/>



<InfoCard

title="Completed"

value={completed}

icon={<FaCheckCircle/>}

/>




<InfoCard

title="Progress"

value={`${progress}%`}

icon={<FaClock/>}

/>



</div>









{/* SUBJECT FILTER */}


<div

className="
bg-white
rounded-xl
shadow
p-5
mt-6
"

>


<h2

className="
font-bold
text-indigo-700
mb-3
"

>

Filter Subject

</h2>




<select

value={subjectFilter}

onChange={(e)=>
setSubjectFilter(
e.target.value
)
}

className="
border
rounded-lg
p-3
w-full
md:w-80
"

>


{

subjects.map(
(subject,index)=>(

<option

key={index}

>

{subject}

</option>

)

)

}



</select>


</div>









{/* LOADING */}

{

loading &&

<div

className="
text-center
mt-10
"

>

Loading syllabus...

</div>


}








{/* EMPTY */}

{

!loading &&

filteredSyllabus.length===0 &&


<div

className="
bg-white
rounded-xl
shadow
p-8
mt-6
text-center
text-gray-500
"

>

No syllabus available

</div>


}










{/* SYLLABUS CARDS */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
mt-6
"

>


{

filteredSyllabus.map(item=>(



<div

key={item.id}

className="
bg-white
rounded-xl
shadow
p-5
hover:shadow-lg
transition
"

>


<div

className="
flex
justify-between
items-start
"

>


<div>


<h2

className="
text-xl
font-bold
text-indigo-700
"

>

{item.chapter_title}

</h2>



<p

className="
text-sm
text-gray-500
mt-1
"

>

{item.subject_name}

</p>



</div>




<StatusBadge

status={item.status}

/>



</div>









<p

className="
mt-4
text-gray-600
"

>

{item.description}

</p>








<div

className="
mt-5
grid
grid-cols-2
gap-3
text-sm
"

>


<div>

<p className="text-gray-500">

Class

</p>


<b>

{item.class_name}

</b>


</div>





<div>

<p className="text-gray-500">

Section

</p>


<b>

{item.section_name}

</b>


</div>






<div>

<p className="text-gray-500">

Session

</p>


<b>

{item.session_name}

</b>


</div>







<div>

<p className="text-gray-500">

Completion Date

</p>


<b>

{

item.completion_date

?

new Date(
item.completion_date
)
.toLocaleDateString()

:

"-"

}

</b>


</div>



</div>






</div>


))


}



</div>





</div>


);


};









const InfoCard = ({
title,
value,
icon
})=>{


return (

<div

className="
bg-white
rounded-xl
shadow
p-5
flex
items-center
gap-4
"

>


<div

className="
bg-indigo-100
text-indigo-600
p-4
rounded-full
"

>

{icon}

</div>



<div>

<p

className="
text-gray-500
"

>

{title}

</p>


<h2

className="
text-xl
font-bold
"

>

{value}

</h2>


</div>


</div>


);


};










const StatusBadge = ({
status
})=>{


const colors={


Completed:

"bg-green-100 text-green-700",



"In Progress":

"bg-blue-100 text-blue-700",



Pending:

"bg-yellow-100 text-yellow-700"


};




return (

<span

className={`
px-3
py-1
rounded-full
text-sm
font-medium
${colors[status]}
`}

>

{status}

</span>


);


};





export default Syllabus;