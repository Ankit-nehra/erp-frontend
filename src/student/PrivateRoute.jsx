import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function StudentPrivateRoute({children}){

const token =
localStorage.getItem("studentToken");


if(!token){
    return <Navigate to="/student/login"/>;
}


try{

const decoded = jwtDecode(token);


if(decoded.role !== "student"){
    return <Navigate to="/student/login"/>;
}


return children;


}catch(error){

localStorage.removeItem("studentToken");

return <Navigate to="/student/login"/>;

}


}


export default StudentPrivateRoute;