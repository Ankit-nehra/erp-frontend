import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function PrincipalPrivateRoute({children}){

const token =
localStorage.getItem("principalToken");


if(!token){
    return <Navigate to="/principal/login"/>;
}


try{

const decoded = jwtDecode(token);


if(decoded.role !== "principal"){
    return <Navigate to="/principal/login"/>;
}


return children;


}catch(error){

localStorage.removeItem("principalToken");

return <Navigate to="/Principal/login"/>;

}


}


export default PrincipalPrivateRoute;