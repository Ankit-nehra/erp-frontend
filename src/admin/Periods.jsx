    import { useEffect, useState } from "react";
  
import axios from "../utils/axiosInstance";

    const API="/api/admin/periods";


    export default function Periods(){


    const [periods,setPeriods]=useState([]);

    const [periodName,setPeriodName]=useState("");

    const [loading,setLoading]=useState(false);



    useEffect(()=>{

        loadPeriods();

    },[]);



    const loadPeriods=async()=>{

        try{

            setLoading(true);

            const res=
            await axios.get(API);


        setPeriods(res.data.periods||[]);


        }catch(err){

            console.log(err);

        }
        finally{

            setLoading(false);

        }

    };




    const addPeriods=async(e)=>{

        e.preventDefault();


        if(!periodName.trim()){

            return alert(
                "Enter period name"
            );

        }


        try{


    await axios.post(API,{
        period_name:periodName
    });


            setPeriodName("");

            loadPeriods();


        }catch(err){

            if(err.response?.status===409){

                alert(
                    "Periods already exists"
                );

            }

        }

    };




    const removePeriods=async(id)=>{


        if(!confirm(
            "Delete this period?"
        )) return;



    await axios.delete(`${API}/${id}`);


        loadPeriods();

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

    Period Management

    </h2>



    <form
    onSubmit={addPeriods}
    className="
    flex
    gap-4
    "
    >


    <input

    value={periodName}

    onChange={
    e=>setPeriodName(e.target.value)
    }

    placeholder="Example: First Period"

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

    Add Period

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
    Period Name
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

periods.length === 0 ?

<tr>
<td
colSpan="3"
className="
text-center
p-5
text-gray-500
"
>
No periods found
</td>
</tr>


:

periods.map(
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
{item.period_name}
</td>


<td className="p-3 text-center">

<button

onClick={()=>
removePeriods(item.id)
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