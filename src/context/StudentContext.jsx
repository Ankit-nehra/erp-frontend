import { createContext, useContext, useEffect, useState } from "react";
import API from "../utils/axiosInstance";


const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

    const [student, setStudent] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudentProfile = async () => {
            try {
                const token =
                localStorage.getItem("studentToken");
                if(!token){
                    setLoading(false);
                    return;
                }
                const response =
                await API.get(
                    "/student/profile"
                );
               console.log(
    "STUDENT API RESPONSE:",
    response.data
);
              
                setStudent(
                    response.data.profile
                );
            }
            catch(error){
                console.log(
                    "Student Context Error:",
                    error
                );
            }
            finally{
                setLoading(false);
            }
          
        };
        fetchStudentProfile();
          
    }, []);
    return (
        <StudentContext.Provider
            value={{
                student,
                loading
            }}        >

            {children}
        </StudentContext.Provider>
    );
};
export const useStudent = () => {
    return useContext(StudentContext);

};