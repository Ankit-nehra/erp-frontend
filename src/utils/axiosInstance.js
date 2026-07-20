import axios from "axios";


const axiosInstance = axios.create({

    baseURL:"https://erp-server-d4eg.onrender.com/api"

});


axiosInstance.interceptors.request.use((config)=>{


    const studentToken =
        localStorage.getItem("studentToken");


    const teacherToken =
        localStorage.getItem("teacherToken");


    const adminToken =
        localStorage.getItem("adminToken");

    const principalToken =
        localStorage.getItem("principalToken");


    const token =
        studentToken ||
        teacherToken ||
        adminToken   ||
        principalToken;


    if(token){

        config.headers.Authorization =
        `Bearer ${token}`;

    }


    return config;


});


export default axiosInstance;