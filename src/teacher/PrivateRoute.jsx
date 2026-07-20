import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function TeacherPrivateRoute({children}){

const token =
localStorage.getItem("teacherToken");


if(!token){
    return <Navigate to="/teacher/login"/>;
}


try{

const decoded = jwtDecode(token);


if(decoded.role !== "teacher"){
    return <Navigate to="/teacher/login"/>;
}


return children;


}catch(error){

localStorage.removeItem("teacherToken");

return <Navigate to="/teacher/login"/>;

}


}


export default TeacherPrivateRoute;