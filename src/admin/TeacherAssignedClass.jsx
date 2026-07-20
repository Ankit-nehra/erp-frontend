import { useEffect, useState } from "react";

import axios from "../utils/axiosInstance";

const BASE_URL = "/api";



export default function TeacherAssignedClass() {


    const [teachers,setTeachers] = useState([]);

    const [classes,setClasses] = useState([]);

    const [sections,setSections] = useState([]);

    const [subjects,setSubjects] = useState([]);

    const [sessions,setSessions] = useState([]);



    const [assignments,setAssignments] = useState([]);



    const [loading,setLoading] = useState(false);





    const [form,setForm] = useState({

        teacher_number:"",

        class_id:"",

        section_id:"",

        subject_id:"",

        session_id:""

    });








    useEffect(()=>{


        loadDropdownData();

        loadAssignments();


    },[]);









    // Load Teachers, Classes, Sessions

    const loadDropdownData = async()=>{


        try{


            const [


                teacherRes,

                classRes,

                sessionRes



            ] = await Promise.all([



                axios.get(

                    `${BASE_URL}/teacherLogin/teachers`

                ),




                axios.get(

                    `${BASE_URL}/admin/classes`

                ),




                axios.get(

                    `${BASE_URL}/admin/sessions`

                )



            ]);






            setTeachers(

                teacherRes.data.teachers || []

            );



            setClasses(

                classRes.data.classes || []

            );



            setSessions(

                sessionRes.data.sessions || []

            );




        }


        catch(error){


            console.log(error);


        }


    };









    // Load Sections According To Selected Class

    const loadSectionsByClass = async(class_id)=>{


        if(!class_id){


            setSections([]);

            return;


        }





        try{


            const res = await axios.get(


                `${BASE_URL}/admin/class-section-subject/sections/${class_id}`


            );



            setSections(

                res.data.sections || []

            );



        }


        catch(error){


            console.log(error);


        }


    };









    // Load Subjects According To Class + Section

    const loadSubjectsByClassAndSection = async(


        class_id,

        section_id


    )=>{


        if(!class_id || !section_id){


            setSubjects([]);

            return;


        }





        try{


            const res = await axios.get(


                `${BASE_URL}/admin/class-section-subject/subjects/${class_id}/${section_id}`


            );



            setSubjects(

                res.data.subjects || []

            );



        }


        catch(error){


            console.log(error);


        }


    };









    // Load Existing Teacher Assignments

    const loadAssignments = async()=>{


        try{


            setLoading(true);



            const res = await axios.get(


                `${BASE_URL}/admin/teacher-assigned-class`


            );



            setAssignments(


                res.data.assignments || []


            );



        }


        catch(error){


            console.log(error);


        }


        finally{


            setLoading(false);


        }


    };









    const handleChange=(e)=>{


        const {


            name,

            value


        } = e.target;






        setForm(prev=>({


            ...prev,


            [name]:value



        }));








        // When Class Changes

        if(name==="class_id"){



            setForm(prev=>({


                ...prev,


                class_id:value,


                section_id:"",


                subject_id:""



            }));



            setSections([]);


            setSubjects([]);



            loadSectionsByClass(value);



        }








        // When Section Changes

        if(name==="section_id"){



            setForm(prev=>({


                ...prev,


                section_id:value,


                subject_id:""



            }));



            setSubjects([]);



            loadSubjectsByClassAndSection(


                form.class_id,


                value


            );


        }



    };









    const submitAssignment = async(e)=>{


        e.preventDefault();



        try{



            await axios.post(


                `${BASE_URL}/admin/teacher-assigned-class`,


                form


            );



            alert(


                "Teacher Assigned Successfully"


            );





            setForm({


                teacher_number:"",

                class_id:"",

                section_id:"",

                subject_id:"",

                session_id:""


            });




            setSections([]);


            setSubjects([]);



            loadAssignments();



        }



        catch(error){



            console.log(error);




            if(error.response?.status===409){


                alert(

                    "Already Assigned"

                );


            }

            else{


                alert(

                    "Assignment Failed"

                );


            }



        }



    };









    const deleteAssignment = async(id)=>{


        if(


            !window.confirm(

                "Delete this assignment?"

            )


        )

        return;





        try{


            await axios.delete(


                `${BASE_URL}/admin/teacher-assigned-class/${id}`


            );



            loadAssignments();



        }


        catch(error){


            console.log(error);


        }



    };








    const groupedAssignments = assignments.reduce(


        (acc,item)=>{


            const key = `${item.class_name}-${item.section_name}`;



            if(!acc[key]){


                acc[key]={


                    class_name:item.class_name,


                    section_name:item.section_name,


                    session_name:item.session_name,


                    teachers:[]


                };


            }




            acc[key].teachers.push(item);



            return acc;



        },


        {}


    );
    return (


        <div className="
        min-h-screen
        bg-slate-100
        p-6
        md:p-8
        ">



            <div className="
            max-w-7xl
            mx-auto
            space-y-8
            ">





                {/* Header */}



                <div className="
                bg-gradient-to-r
                from-indigo-600
                to-blue-600
                rounded-2xl
                shadow-lg
                p-6
                text-white
                ">



                    <h1 className="
                    text-3xl
                    font-bold
                    ">


                        Teacher Class Assignment


                    </h1>




                    <p className="
                    mt-2
                    text-blue-100
                    ">


                        Assign teachers with class, section and mapped subjects


                    </p>



                </div>









                {/* Assign Form */}



                <div className="
                bg-white
                rounded-xl
                shadow-lg
                p-6
                ">



                    <h2 className="
                    text-xl
                    font-bold
                    text-slate-700
                    mb-6
                    ">


                        Assign Teacher


                    </h2>







                    <form

                    onSubmit={submitAssignment}

                    className="
                    grid
                    md:grid-cols-3
                    gap-5
                    "


                    >







                        <Select

                        label="Teacher"

                        name="teacher_number"

                        value={form.teacher_number}

                        onChange={handleChange}

                        options={teachers}

                        valueKey="teacher_number"

                        labelKey="teacher_name"

                        />









                        <Select

                        label="Session"

                        name="session_id"

                        value={form.session_id}

                        onChange={handleChange}

                        options={sessions}

                        valueKey="id"

                        labelKey="session_name"

                        />









                        <Select

                        label="Class"

                        name="class_id"

                        value={form.class_id}

                        onChange={handleChange}

                        options={classes}

                        valueKey="id"

                        labelKey="class_name"

                        />











                        <Select

                        label="Section"

                        name="section_id"

                        value={form.section_id}

                        onChange={handleChange}

                        options={sections}

                        valueKey="id"

                        labelKey="section_name"

                        />











                        <Select

                        label="Subject"

                        name="subject_id"

                        value={form.subject_id}

                        onChange={handleChange}

                        options={subjects}

                        valueKey="subject_id"

                        labelKey="subject_name"

                        />











                        <div className="
                        flex
                        items-end
                        ">



                            <button


                            className="
                            w-full
                            bg-indigo-600
                            hover:bg-indigo-700
                            text-white
                            py-3
                            rounded-lg
                            font-semibold
                            transition
                            shadow-md
                            "


                            >


                                Assign Teacher


                            </button>



                        </div>





                    </form>








                    {


                        form.class_id && sections.length===0 &&

                        (

                            <p className="
                            mt-4
                            text-sm
                            text-red-500
                            ">


                                No sections mapped with this class. Please create class-section-subject mapping first.


                            </p>


                        )


                    }







                    {


                        form.section_id && subjects.length===0 &&

                        (

                            <p className="
                            mt-4
                            text-sm
                            text-red-500
                            ">


                                No subjects mapped with this class and section.


                            </p>


                        )


                    }






                </div>












                {/* Assignment Cards */}



                <div className="
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                ">



                    <div className="
                    px-6
                    py-5
                    border-b
                    ">


                        <h2 className="
                        text-xl
                        font-bold
                        text-slate-700
                        ">


                            Assigned Classes


                        </h2>



                    </div>







                    <div className="
                    p-6
                    grid
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    ">





                    {


                    loading ?



                    (

                        <div className="
                        col-span-full
                        text-center
                        p-10
                        text-gray-500
                        ">


                            Loading Assignments...


                        </div>


                    )




                    :





                    Object.keys(groupedAssignments).length===0 ?





                    (

                        <div className="
                        col-span-full
                        text-center
                        p-10
                        text-gray-500
                        ">


                            No Assignment Found


                        </div>


                    )






                    :





                    Object.keys(groupedAssignments).map((key)=>(



                        <div

                        key={key}

                        className="
                        bg-gradient-to-br
                        from-indigo-50
                        to-blue-50
                        rounded-2xl
                        border
                        border-indigo-100
                        shadow-md
                        hover:shadow-xl
                        transition
                        overflow-hidden
                        "


                        >







                            <div className="
                            bg-gradient-to-r
                            from-indigo-600
                            to-blue-600
                            text-white
                            px-5
                            py-4
                            ">



                                <h3 className="
                                text-xl
                                font-bold
                                ">



                                    Class {groupedAssignments[key].class_name}

                                    {" - "}

                                    {groupedAssignments[key].section_name}



                                </h3>






                                <p className="
                                text-sm
                                text-blue-100
                                mt-1
                                ">


                                    Session:

                                    {" "}

                                    {groupedAssignments[key].session_name}



                                </p>




                            </div>





                            <div className="
                            p-5
                            space-y-3
                            ">
                            {


                            groupedAssignments[key].teachers.map((item)=>(



                                <div

                                key={item.id}

                                className="
                                bg-white
                                rounded-xl
                                p-4
                                shadow-sm
                                border
                                flex
                                justify-between
                                items-center
                                "


                                >






                                    <div>



                                        <h4 className="
                                        font-semibold
                                        text-slate-700
                                        ">



                                            {item.teacher_name}



                                        </h4>






                                        <p className="
                                        text-sm
                                        text-indigo-600
                                        mt-1
                                        ">



                                            📚 {item.subject_name}



                                        </p>




                                    </div>








                                    <button


                                    onClick={()=>deleteAssignment(item.id)}


                                    className="
                                    bg-red-100
                                    text-red-600
                                    hover:bg-red-600
                                    hover:text-white
                                    px-3
                                    py-2
                                    rounded-lg
                                    text-sm
                                    font-semibold
                                    transition
                                    "


                                    >



                                        Delete



                                    </button>







                                </div>



                            ))



                            }





                            </div>







                        </div>



                    ))



                    }





                    </div>







                </div>







            </div>



        </div>



    );



}













function Select({


    label,


    name,


    value,


    onChange,


    options,


    valueKey,


    labelKey



}){



    return (


        <div>



            <label className="
            block
            mb-2
            font-semibold
            text-slate-700
            ">



                {label}



            </label>







            <select


            name={name}


            value={value}


            onChange={onChange}



            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            bg-white
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition
            "



            >





                <option value="">



                    Select {label}



                </option>








                {


                options.map(item=>(



                    <option


                    key={item[valueKey]}


                    value={item[valueKey]}


                    >



                        {item[labelKey]}



                    </option>



                ))



                }







            </select>





        </div>



    );



}