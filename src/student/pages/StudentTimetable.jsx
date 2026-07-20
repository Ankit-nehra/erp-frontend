// import React from "react";
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaBookOpen,
//   FaChalkboardTeacher,
// } from "react-icons/fa";

// const StudentTimetable = () => {
//   const schedule = [
//     {
//       day: "Monday",
//       time: "09:00 AM",
//       subject: "Mathematics",
//       teacher: "Mr. Amit Sharma",
//       room: "Room 12",
//     },
//     {
//       day: "Tuesday",
//       time: "10:00 AM",
//       subject: "Science",
//       teacher: "Mrs. Priya Singh",
//       room: "Room 8",
//     },
//     {
//       day: "Wednesday",
//       time: "11:00 AM",
//       subject: "English",
//       teacher: "Mr. Rahul Verma",
//       room: "Room 5",
//     },
//     {
//       day: "Thursday",
//       time: "09:30 AM",
//       subject: "Computer",
//       teacher: "Mr. Raj Kumar",
//       room: "Lab 2",
//     },
//     {
//       day: "Friday",
//       time: "12:00 PM",
//       subject: "Mathematics",
//       teacher: "Mr. Amit Sharma",
//       room: "Room 12",
//     },
//     {
//       day: "Saturday",
//       time: "10:30 AM",
//       subject: "Revision",
//       teacher: "Class Teacher",
//       room: "Room 7",
//     },
//   ];

//   const subjectColors = {
//     Mathematics: "bg-indigo-100 text-indigo-700",
//     Science: "bg-green-100 text-green-700",
//     English: "bg-purple-100 text-purple-700",
//     Computer: "bg-blue-100 text-blue-700",
//     Revision: "bg-yellow-100 text-yellow-700",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-slate-800">
//           My Timetable
//         </h1>
//         <p className="text-gray-500 mt-2">
//           View your weekly classes and study schedule.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-emerald-700 text-white rounded-2xl shadow p-6">
//           <div className="flex items-center gap-3">
//             <FaCalendarAlt className="text-2xl" />
//             <h2 className="text-xl font-bold">
//               Today's Class
//             </h2>
//           </div>

//           <p className="mt-5 text-lg font-semibold">
//             Mathematics
//           </p>

//           <p className="mt-1">
//             09:00 AM • Room 12
//           </p>
//         </div>

//         <InfoCard
//           title="Next Class"
//           value="Science - 10:00 AM"
//           icon={<FaClock />}
//         />

//         <InfoCard
//           title="Total Subjects"
//           value="6 Subjects"
//           icon={<FaBookOpen />}
//         />
//       </div>

//       <div className="hidden md:block bg-white rounded-2xl shadow border mt-6 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-emerald-700 text-white">
//             <tr>
//               <th className="p-4 text-left">Day</th>
//               <th className="p-4">Time</th>
//               <th className="p-4">Subject</th>
//               <th className="p-4">Teacher</th>
//               <th className="p-4">Room</th>
//             </tr>
//           </thead>

//           <tbody>
//             {schedule.map((item, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-indigo-50"
//               >
//                 <td className="p-4 font-semibold">
//                   {item.day}
//                 </td>

//                 <td className="p-4 text-center">
//                   <span className="bg-gray-100 px-3 py-1 rounded-lg">
//                     {item.time}
//                   </span>
//                 </td>

//                 <td className="p-4 text-center">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                       subjectColors[item.subject]
//                     }`}
//                   >
//                     {item.subject}
//                   </span>
//                 </td>

//                 <td className="p-4 text-center">
//                   <div className="flex justify-center items-center gap-2">
//                     <FaChalkboardTeacher className="text-indigo-600" />
//                     {item.teacher}
//                   </div>
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.room}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="md:hidden mt-6 space-y-5">
//         {schedule.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow border p-5"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-bold text-indigo-700">
//                 {item.day}
//               </h3>

//               <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
//                 {item.time}
//               </span>
//             </div>

//             <div className="mt-4 space-y-3 text-gray-600">
//               <p>
//                 Subject:
//                 <span
//                   className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
//                     subjectColors[item.subject]
//                   }`}
//                 >
//                   {item.subject}
//                 </span>
//               </p>

//               <p>
//                 Teacher:
//                 <b className="ml-2">{item.teacher}</b>
//               </p>

//               <p>
//                 Room:
//                 <b className="ml-2">{item.room}</b>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const InfoCard = ({ title, value, icon }) => (
//   <div className="bg-white rounded-2xl shadow border p-6 flex items-center gap-4">
//     <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-xl">
//       {icon}
//     </div>

//     <div>
//       <p className="text-gray-500">{title}</p>
//       <h3 className="font-bold text-lg mt-1">
//         {value}
//       </h3>
//     </div>
//   </div>
// );

// export default StudentTimetable;import { useEffect, useState } from "react";
import API from "../../utils/axiosInstance";
import { useEffect,useState } from "react";

export default function StudentTimetable() {

    const [timetable, setTimetable] = useState([]);
    const [periods, setPeriods] = useState([]);
    const [loading, setLoading] = useState(true);


    const days = [
        { id: 1, name: "Monday" },
        { id: 2, name: "Tuesday" },
        { id: 3, name: "Wednesday" },
        { id: 4, name: "Thursday" },
        { id: 5, name: "Friday" },
        { id: 6, name: "Saturday" }
    ];


    useEffect(() => {
        loadData();
    }, []);



    const loadData = async () => {

        try {

            setLoading(true);


            const [timeRes, periodRes] = await Promise.all([

                API.get("/student/timetable"),

                API.get("/admin/periods")

            ]);


            setTimetable(timeRes.data.timetable || []);

            setPeriods(periodRes.data.periods || []);


        }
        catch(error){

            console.log(error);

        }
        finally{

            setLoading(false);

        }

    };



    const getCellData = (dayId, periodId)=>{

        return timetable.find(item =>

            Number(item.day_of_week) === Number(dayId)

            &&

            Number(item.period_id) === Number(periodId)

        );

    };



    if(loading){

        return(

            <div className="h-full flex items-center justify-center">

                Loading Timetable...

            </div>

        );

    }



    return (

        <div
            className="
                w-full
                h-full
                overflow-hidden
            "
        >


            <div
                className="
                    bg-white
                    rounded-2xl
                    shadow-lg
                    w-full
                    overflow-hidden
                "
            >



                {/* Header */}

                <div
                    className="
                        bg-blue-700
                        text-white
                        px-5
                        py-5
                    "
                >

                    <h1 className="text-2xl md:text-3xl font-bold">
                        My Class Timetable
                    </h1>


                    <p className="text-blue-100 mt-1">
                        Weekly Class Schedule
                    </p>


                </div>





                {/* ONLY TABLE SCROLL */}

                <div
                    className="
                        w-full
                        max-w-full
                        overflow-x-auto
                        overflow-y-auto
                    "
                >


                    <table
                        className="
                            min-w-max
                            border-collapse
                        "
                    >


                        <thead>

                            <tr
                                className="
                                    bg-slate-800
                                    text-white
                                "
                            >


                                <th
                                    className="
                                        border
                                        p-4
                                        min-w-[140px]
                                        sticky
                                        left-0
                                        bg-slate-800
                                        z-10
                                    "
                                >

                                    Day

                                </th>



                                {
                                    periods.map(period=>(


                                        <th

                                            key={period.id}

                                            className="
                                                border
                                                p-4
                                                min-w-[200px]
                                                whitespace-nowrap
                                            "

                                        >

                                            {period.period_name}


                                        </th>


                                    ))
                                }


                            </tr>


                        </thead>





                        <tbody>


                            {
                                days.map(day=>(


                                    <tr
                                        key={day.id}
                                        className="hover:bg-slate-50"
                                    >



                                        <td
                                            className="
                                                border
                                                p-4
                                                font-bold
                                                bg-slate-100
                                                sticky
                                                left-0
                                                z-10
                                            "
                                        >

                                            {day.name}

                                        </td>




                                        {
                                            periods.map(period=>{


                                                const lecture =
                                                    getCellData(
                                                        day.id,
                                                        period.id
                                                    );


                                                return(


                                                    <td
                                                        key={period.id}
                                                        className="
                                                            border
                                                            p-4
                                                            min-w-[200px]
                                                        "
                                                    >


                                                        {

                                                            lecture ?

                                                            <div
                                                                className="
                                                                    space-y-2
                                                                "
                                                            >

                                                                <div
                                                                    className="
                                                                        font-bold
                                                                        text-blue-700
                                                                    "
                                                                >

                                                                    {lecture.subject_name}

                                                                </div>


                                                                <div
                                                                    className="
                                                                        text-sm
                                                                        text-gray-700
                                                                    "
                                                                >

                                                                    Teacher:
                                                                    {" "}
                                                                    {lecture.teacher_name}

                                                                </div>


                                                                <div
                                                                    className="
                                                                        text-sm
                                                                        text-gray-500
                                                                    "
                                                                >

                                                                    Class {lecture.class_name}
                                                                    -
                                                                    {lecture.section_name}

                                                                </div>


                                                            </div>


                                                            :


                                                            <div
                                                                className="
                                                                    text-center
                                                                    text-gray-400
                                                                    italic
                                                                "
                                                            >

                                                                Free

                                                            </div>

                                                        }



                                                    </td>


                                                );


                                            })
                                        }



                                    </tr>


                                ))
                            }


                        </tbody>


                    </table>


                </div>



            </div>



        </div>

    );

}