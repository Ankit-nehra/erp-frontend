import React from "react";

import {
  FaUsers,
  FaChalkboardTeacher,
  FaUserCheck,
  FaTasks
} from "react-icons/fa";


import StatsCard from "../components/StatsCard";
import ChartCard from "../components/ChartCard";



const PrincipalHome = () => {



const activities = [

"Mathematics teacher uploaded marks",

"Class 10 syllabus updated",

"New student admission completed",

"Monthly attendance report generated"

];




return (

<div>


{/* Page Header */}

<div className="mb-6">


<h1 className="
text-3xl
font-bold
text-indigo-700
">

Dashboard Overview

</h1>


<p className="
text-gray-600
">

Monitor complete school activities

</p>


</div>







{/* Statistics Cards */}


<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
">



<StatsCard

title="Total Students"

value="850"

icon={<FaUsers/>}

color="indigo"

/>





<StatsCard

title="Total Teachers"

value="45"

icon={<FaChalkboardTeacher/>}

color="blue"

/>





<StatsCard

title="Today's Attendance"

value="94%"

icon={<FaUserCheck/>}

color="green"

/>





<StatsCard

title="Pending Tasks"

value="5"

icon={<FaTasks/>}

color="orange"

/>



</div>









{/* Charts Section */}


<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
mt-6
">





{/* Performance */}


<ChartCard

title="Class Performance"

>


<div className="
space-y-4
">



<ProgressBar

name="Class 10-A"

value="86%"

/>



<ProgressBar

name="Class 10-B"

value="82%"

/>




<ProgressBar

name="Class 9-A"

value="78%"

/>



<ProgressBar

name="Class 9-B"

value="85%"

/>



</div>


</ChartCard>







{/* Attendance */}


<ChartCard

title="Monthly Attendance"

>


<div className="
space-y-4
">


<ProgressBar

name="January"

value="92%"

/>


<ProgressBar

name="February"

value="95%"

/>


<ProgressBar

name="March"

value="94%"

/>


<ProgressBar

name="April"

value="91%"

/>


</div>


</ChartCard>



</div>










{/* Recent Activity */}


<div className="mt-6">


<ChartCard

title="Recent Activities"

>


<div className="
space-y-3
">


{

activities.map(
(item,index)=>(


<div

key={index}

className="
bg-indigo-50
rounded-lg
p-3
text-gray-700
"

>

✓ {item}


</div>


)

)


}



</div>


</ChartCard>



</div>





</div>

);


};








const ProgressBar = ({
name,
value
}) => {


return (

<div>


<div className="
flex
justify-between
mb-1
">


<span className="text-gray-600">

{name}

</span>


<span className="
font-semibold
text-indigo-700
">

{value}

</span>


</div>



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
width:value
}}

>


</div>


</div>



</div>


);


};




export default PrincipalHome;