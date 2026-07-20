import { createContext, useContext, useEffect, useState } from "react";
import API from "../utils/axiosInstance";


const PrincipalContext = createContext();

export const PrincipalProvider = ({ children }) => {

    const [principal, setPrincipal] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrincipalProfile = async () => {
            try {
                const token =
                localStorage.getItem("principalToken");
                if(!token){
                    setLoading(false);
                    return;
                }
                const response =
                await API.get(
                    "/principal/profile"
                );
                setPrincipal(
                    response.data.profile
                );
            }
            catch(error){
                console.log(
                    "Principal Context Error:",
                    error
                );
            }
            finally{
                setLoading(false);
            }
          
        };
        fetchPrincipalProfile();
    }, []);
    return (
        <PrincipalContext.Provider
            value={{
               principal,
                loading
            }}        >

            {children}
        </PrincipalContext.Provider>
    );
};
export const usePrincipal = () => {
    return useContext(PrincipalContext);

};