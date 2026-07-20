import { useEffect, useState } from "react";


import axios from "../utils/axiosInstance";
const API =
"/api/admin/classes";


export default function Classes(){


const [classes,setClasses]=useState([]);

const [className,setClassName]=useState("");

const [loading,setLoading]=useState(false);



useEffect(()=>{

    loadClasses();

},[]);



const loadClasses=async()=>{

    try{

        setLoading(true);

        const res=
        await axios.get(API);


        setClasses(
            res.data.classes || []
        );


    }catch(err){

        console.log(err);

    }
    finally{

        setLoading(false);

    }

};




const addClass=async(e)=>{

    e.preventDefault();


    if(!className.trim()){

        return alert(
            "Enter class name"
        );

    }


    try{


        await axios.post(
            API,
            {
                class_name:
                className
            }
        );


        setClassName("");

        loadClasses();


    }catch(err){

        if(err.response?.status===409){

            alert(
                "Class already exists"
            );

        }

    }

};




const removeClass=async(id)=>{


    if(!confirm(
        "Delete this class?"
    )) return;



    await axios.delete(
        `${API}/${id}`
    );


    loadClasses();

};



return (

<div className="
min-h-screen
bg-slate-100
p-8
">


<div className="
max-w-4xl
mx-auto
space-y-6
">


<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

Class Management

</h2>



<form
onSubmit={addClass}
className="
flex
gap-4
"
>


<input

value={className}

onChange={
e=>setClassName(e.target.value)
}

placeholder="Example: Class 10"

className="
flex-1
border
rounded-lg
px-4
py-2
"

/>


<button

className="
bg-blue-600
text-white
px-6
rounded-lg
hover:bg-blue-700
"
>

Add Class

</button>


</form>


</div>





<div className="
bg-white
rounded-xl
shadow
overflow-hidden
">


<table className="
w-full
">


<thead className="
bg-slate-800
text-white
">


<tr>

<th className="p-3 text-left">
#
</th>

<th className="p-3 text-left">
Class Name
</th>

<th className="p-3">
Action
</th>


</tr>

</thead>



<tbody>


{
loading ?

<tr>
<td
colSpan="3"
className="
text-center
p-5
"
>
Loading...
</td>
</tr>


:

classes.map(
(item,index)=>(

<tr
key={item.id}
className="
border-b
"
>


<td className="p-3">
{index+1}
</td>


<td className="p-3 font-medium">
{item.class_name}
</td>


<td className="p-3 text-center">


<button

onClick={()=>
removeClass(item.id)
}

className="
bg-red-600
text-white
px-4
py-1
rounded
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


)

}