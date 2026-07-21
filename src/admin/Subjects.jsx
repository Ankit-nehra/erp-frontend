import { useEffect, useState } from "react";

import axios from "../utils/axiosInstance";

const API =
"/admin/subjects";


export default function Subjects(){


const [subjects,setSubjects]=useState([]);

const [form,setForm]=useState({
    subject_name:"",
    subject_code:""
});

const [loading,setLoading]=useState(false);



useEffect(()=>{

    loadSubjects();

},[]);




const loadSubjects=async()=>{

    try{

        setLoading(true);

        const res =
        await axios.get(API);


        setSubjects(
            res.data.subjects || []
        );


    }catch(error){

        console.log(error);

    }
    finally{

        setLoading(false);

    }

};





const handleChange=(e)=>{

    setForm({

        ...form,

        [e.target.name]:
        e.target.value

    });

};





const addSubject=async(e)=>{

    e.preventDefault();


    if(!form.subject_name){

        return alert(
            "Enter subject name"
        );

    }



    try{


        await axios.post(
            API,
            form
        );


        setForm({

            subject_name:"",
            subject_code:""

        });


        loadSubjects();


    }catch(error){


        if(error.response?.status===409){

            alert(
                "Subject code already exists"
            );

        }


    }

};





const deleteSubject=async(id)=>{


    if(!confirm(
        "Delete Subject?"
    )) return;



    await axios.delete(
        `${API}/${id}`
    );


    loadSubjects();

};





return (

<div className="
min-h-screen
bg-slate-100
p-8
">


<div className="
max-w-5xl
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

Subject Management

</h2>



<form
onSubmit={addSubject}
className="
grid
md:grid-cols-3
gap-4
">


<input

name="subject_name"

value={form.subject_name}

onChange={handleChange}

placeholder="Subject Name"

className="
border
rounded-lg
px-4
py-2
"

/>



<input

name="subject_code"

value={form.subject_code}

onChange={handleChange}

placeholder="Code (Optional)"

className="
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
rounded-lg
hover:bg-blue-700
"

>

Add Subject

</button>



</form>


</div>





<div className="
bg-white
rounded-xl
shadow
overflow-hidden
">


<table className="w-full">


<thead
className="
bg-slate-800
text-white
"
>


<tr>

<th className="p-3 text-left">
#
</th>

<th className="p-3 text-left">
Subject
</th>

<th className="p-3 text-left">
Code
</th>

<th className="p-3">
Action
</th>

</tr>


</thead>



<tbody>


{
loading ? (

<tr>

<td
colSpan="4"
className="
text-center
p-5
"
>
Loading...
</td>

</tr>


):

subjects.map(
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
{item.subject_name}
</td>


<td className="p-3">
{item.subject_code || "-"}
</td>


<td className="p-3 text-center">


<button

onClick={()=>
deleteSubject(item.id)
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
