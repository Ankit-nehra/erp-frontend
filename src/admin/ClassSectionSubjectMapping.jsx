import { useEffect, useState } from "react";

import axios from "../utils/axiosInstance";
const BASE_URL = "/api";

export default function ClassSectionSubjectMapping() {

    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [mappings, setMappings] = useState([]);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        class_id: "",

        section_id: "",

        subject_id: ""

    });

    useEffect(() => {

        loadDropdownData();

        loadMappings();

    }, []);

    const loadDropdownData = async () => {

        try {

            const [

                classRes,

                sectionRes,

                subjectRes

            ] = await Promise.all([

                axios.get(`${BASE_URL}/admin/classes`),

                axios.get(`${BASE_URL}/admin/sections`),

                axios.get(`${BASE_URL}/admin/subjects`)

            ]);

            setClasses(
                classRes.data.classes || []
            );

            setSections(
                sectionRes.data.sections || []
            );

            setSubjects(
                subjectRes.data.subjects || []
            );

        }

        catch (error) {

            console.log(error);

        }

    };

    const loadMappings = async () => {

        try {

            setLoading(true);

            const res = await axios.get(

                `${BASE_URL}/admin/class-section-subject`

            );

            setMappings(

                res.data.mappings || []

            );

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submitMapping = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                `${BASE_URL}/admin/class-section-subject`,

                form

            );

            alert(

                "Class Section Subject Assigned Successfully"

            );

            setForm({

                class_id: "",

                section_id: "",

                subject_id: ""

            });

            loadMappings();

        }

        catch (error) {

            console.log(error);

            if (error.response?.status === 409) {

                alert(

                    "This Subject is already mapped with this Class and Section."

                );

            }

            else {

                alert(

                    "Assignment Failed"

                );

            }

        }

    };

    const deleteMapping = async (id) => {

        if (

            !window.confirm(

                "Delete this Class Section Subject Mapping?"

            )

        )

            return;

        try {

            await axios.delete(

                `${BASE_URL}/admin/class-section-subject/${id}`

            );

            loadMappings();

        }

        catch (error) {

            console.log(error);

        }

    };

    const groupedMappings = mappings.reduce(

        (acc, item) => {

            const key = `${item.class_name}-${item.section_name}`;

            if (!acc[key]) {

                acc[key] = {

                    class_name: item.class_name,

                    section_name: item.section_name,

                    subjects: []

                };

            }

            acc[key].subjects.push(item);

            return acc;

        },

        {}

    );

    return (<div className="
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

                Class Section Subject Mapping

            </h1>


            <p className="
            mt-2
            text-blue-100
            ">

                Assign subjects to class and section combinations

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

                Assign Class Section Subject

            </h2>





            <form

            onSubmit={submitMapping}

            className="
            grid
            md:grid-cols-4
            gap-5
            "

            >



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

                valueKey="id"

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

                        Assign Subject

                    </button>


                </div>



            </form>


        </div>









        {/* Assigned Subjects */}


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


                    Assigned Subjects


                </h2>



                <p className="
                text-sm
                text-gray-500
                mt-1
                ">


                    Subjects grouped according to class and section


                </p>



            </div>








            {


            loading ?


            (

                <div className="
                p-10
                text-center
                text-gray-500
                ">


                    Loading Subjects...


                </div>


            )



            :



            Object.keys(groupedMappings).length === 0 ?



            (

                <div className="
                p-10
                text-center
                text-gray-500
                ">


                    No Mapping Found


                </div>


            )



            :



            (

                <div className="
                p-6
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                ">


                {


                Object.keys(groupedMappings).map((key)=>(



                    <div

                    key={key}

                    className="
                    rounded-2xl
                    border
                    border-indigo-100
                    bg-gradient-to-br
                    from-indigo-50
                    to-blue-50
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    transition
                    "

                    >





                        {/* Card Header */}



                        <div className="
                        bg-gradient-to-r
                        from-indigo-600
                        to-blue-600
                        px-5
                        py-4
                        text-white
                        flex
                        justify-between
                        items-center
                        ">


                            <div>


                                <h3 className="
                                text-xl
                                font-bold
                                ">


                                    {groupedMappings[key].class_name}

                                    {" - "}

                                    Section {groupedMappings[key].section_name}


                                </h3>


                                <p className="
                                text-sm
                                text-blue-100
                                mt-1
                                ">


                                    Assigned Subjects


                                </p>


                            </div>




                            <div className="
                            bg-white
                            text-indigo-600
                            rounded-full
                            px-4
                            py-2
                            font-bold
                            text-sm
                            ">


                                {

                                    groupedMappings[key].subjects.length

                                }


                            </div>



                        </div>





                        {/* Subject List */}



                        <div className="
                        p-5
                        space-y-3
                        ">



                            {


                            groupedMappings[key].subjects.map((item)=>(



                                <div

                                key={item.id}

                                className="
                                bg-white
                                rounded-xl
                                p-4
                                shadow-sm
                                border
                                hover:shadow-md
                                transition
                                flex
                                justify-between
                                items-center
                                "

                                >



                                    <div>


                                        <h4 className="
                                        font-semibold
                                        text-slate-700
                                        text-lg
                                        ">


                                            {item.subject_name}


                                        </h4>



                                        <p className="
                                        text-sm
                                        text-gray-500
                                        mt-1
                                        ">


                                            Code:

                                            <span className="
                                            font-medium
                                            ml-1
                                            ">


                                                {item.subject_code || "N/A"}


                                            </span>


                                        </p>


                                    </div>


                                    <button

                                    onClick={()=>deleteMapping(item.id)}

                                    className="
                                    bg-red-100
                                    text-red-600
                                    hover:bg-red-600
                                    hover:text-white
                                    px-3
                                    py-2
                                    rounded-lg
                                    transition
                                    text-sm
                                    font-semibold
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


            )


            }



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


}) {


    return (


        <div>


            <label

            className="
            block
            mb-2
            font-semibold
            text-slate-700
            "

            >

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
            bg-white
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:border-indigo-500
            transition
            "


            >



                <option value="">


                    Select {label}


                </option>





                {


                options.map((item)=>(


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