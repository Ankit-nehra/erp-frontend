import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import API from "../utils/axiosInstance";



const TeacherContext = createContext();



export const TeacherProvider = ({
    children
}) => {



    const [teacher,setTeacher] = useState(null);


    const [dashboard,setDashboard] = useState(null);


    const [classes,setClasses] = useState([]);


    const [loading,setLoading] = useState(true);





    useEffect(()=>{


        const fetchTeacherData = async()=>{


            try{


                const token =
                localStorage.getItem(
                    "teacherToken"
                );



                if(!token){

                    setLoading(false);

                    return;

                }





                const response =
                await API.get(
                    "/teacher/profile"
                );




                console.log(
                    "Teacher Dashboard Data:",
                    response.data
                );





                setTeacher(
                    response.data.profile
                );



                setDashboard(
                    response.data.dashboard
                );



                setClasses(
                    response.data.classes
                );



            }
            catch(error){


                console.log(
                    "Teacher Context Error:",
                    error
                );


            }
            finally{


                setLoading(false);


            }


        };



        fetchTeacherData();


    },[]);






    return (


        <TeacherContext.Provider

            value={{

                teacher,

                dashboard,

                classes,

                loading

            }}

        >


            {children}


        </TeacherContext.Provider>


    );


};






export const useTeacher = ()=>{


    return useContext(
        TeacherContext
    );


};