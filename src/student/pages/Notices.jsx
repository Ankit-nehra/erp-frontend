import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
} from "react-icons/fa";

import API from "../../utils/axiosInstance";


const StudentNotices = () => {


  const [notices, setNotices] = useState([]);

  const [loading, setLoading] = useState(true);




  useEffect(() => {

    fetchNotices();

  }, []);





  const fetchNotices = async () => {

    try {


      const res = await API.get(
        "/student/notices"
      );


      console.log(
        "STUDENT NOTICE RESPONSE:",
        res.data
      );


      setNotices(
        res.data.data
      );


    }
    catch(error){


      console.log(
        "Student Notice Error:",
        error
      );


    }
    finally{

      setLoading(false);

    }

  };







  return (

    <div className="min-h-screen bg-gray-100 p-4 md:p-6">


      {/* Header */}

      <div className="mb-6">


        <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">

          <FaBullhorn />

          Notice Board

        </h1>


        <p className="text-gray-600 mt-1">

          Latest notices from your school

        </p>


      </div>







      {
        loading ?

        (

          <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

            Loading notices...

          </div>

        )

        :

        notices.length === 0 ?

        (

          <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

            No notices available

          </div>

        )

        :

        (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">


            {
              notices.map((notice)=>(


                <div

                  key={notice.id}

                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"

                >



                  <div className="flex justify-between items-start">


                    <h2 className="text-xl font-bold text-indigo-700">

                      {notice.title}

                    </h2>



                  </div>







                  <p className="text-sm text-gray-500 mt-2">

                    {

                      new Date(
                        notice.created_at
                      ).toLocaleDateString()

                    }

                  </p>







                  <p className="text-gray-700 mt-4 leading-relaxed">

                    {notice.description}

                  </p>








                  <div className="mt-5 border-t pt-4 text-sm text-gray-600">


                    <p>

                      Class:

                      <span className="font-semibold ml-2">

                        {notice.class_name}

                      </span>

                    </p>





                    <p>

                      Section:

                      <span className="font-semibold ml-2">

                        {notice.section_name}

                      </span>

                    </p>





                    <p>

                      Session:

                      <span className="font-semibold ml-2">

                        {notice.session_name}

                      </span>

                    </p>



                  </div>





                </div>


              ))
            }



          </div>

        )

      }




    </div>

  );

};



export default StudentNotices;