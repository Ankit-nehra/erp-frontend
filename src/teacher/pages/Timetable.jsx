// import React from "react";
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaChalkboardTeacher,
// } from "react-icons/fa";

// const Timetable = () => {
//   const schedule = [
//     {
//       day: "Monday",
//       time: "09:00 AM",
//       className: "10-A",
//       subject: "Mathematics",
//       room: "Room 12",
//     },
//     {
//       day: "Tuesday",
//       time: "10:00 AM",
//       className: "9-B",
//       subject: "Science",
//       room: "Room 8",
//     },
//     {
//       day: "Wednesday",
//       time: "11:00 AM",
//       className: "10-A",
//       subject: "Mathematics",
//       room: "Room 12",
//     },
//     {
//       day: "Thursday",
//       time: "09:00 AM",
//       className: "8-A",
//       subject: "Algebra",
//       room: "Room 5",
//     },
//     {
//       day: "Friday",
//       time: "12:00 PM",
//       className: "10-B",
//       subject: "Mathematics",
//       room: "Room 15",
//     },
//     {
//       day: "Saturday",
//       time: "10:30 AM",
//       className: "9-A",
//       subject: "Revision",
//       room: "Room 7",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-indigo-700">
//           My Timetable
//         </h1>

//         <p className="text-gray-600">
//           Manage your weekly teaching schedule
//         </p>
//       </div>

//       {/* Highlight Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         <div className="bg-indigo-600 text-white rounded-xl shadow p-6">
//           <div className="flex items-center gap-3">
//             <FaCalendarAlt className="text-2xl" />

//             <h2 className="text-xl font-bold">
//               Today's Schedule
//             </h2>
//           </div>

//           <p className="mt-4 text-lg">
//             Mathematics - Class 10-A
//           </p>

//           <p>09:00 AM | Room 12</p>
//         </div>

//         <InfoCard
//           title="Current Class"
//           value="Mathematics 10-A"
//           icon={<FaChalkboardTeacher />}
//         />

//         <InfoCard
//           title="Next Class"
//           value="Science 9-B"
//           icon={<FaClock />}
//         />
//       </div>

//       {/* Desktop Table */}
//       <div className="hidden md:block bg-white rounded-xl shadow mt-6 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-indigo-600 text-white">
//             <tr>
//               <th className="p-4 text-left">Day</th>
//               <th className="p-4">Time</th>
//               <th className="p-4">Class</th>
//               <th className="p-4">Subject</th>
//               <th className="p-4">Room</th>
//             </tr>
//           </thead>

//           <tbody>
//             {schedule.map((item, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-indigo-50"
//               >
//                 <td className="p-4 font-medium">
//                   {item.day}
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.time}
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.className}
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.subject}
//                 </td>

//                 <td className="p-4 text-center">
//                   {item.room}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="md:hidden mt-6 space-y-4">
//         {schedule.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow p-5"
//           >
//             <h3 className="text-xl font-bold text-indigo-700">
//               {item.day}
//             </h3>

//             <div className="mt-3 space-y-2 text-gray-600">
//               <p>
//                 Time:
//                 <b className="ml-2">{item.time}</b>
//               </p>

//               <p>
//                 Class:
//                 <b className="ml-2">{item.className}</b>
//               </p>

//               <p>
//                 Subject:
//                 <b className="ml-2">{item.subject}</b>
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
//   <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
//     <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-xl">
//       {icon}
//     </div>

//     <div>
//       <p className="text-gray-500">{title}</p>

//       <h3 className="font-bold text-lg">
//         {value}
//       </h3>
//     </div>
//   </div>
// );

// export default Timetable;
import { useEffect, useState } from "react";
import API from "../../utils/axiosInstance";

export default function TeacherTimetable() {

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

                API.get("/teacher/timetable"),

                API.get("/admin/periods")

            ]);

            setTimetable(timeRes.data.timetable || []);

            setPeriods(periodRes.data.periods || []);

        }

        catch (error) {

            console.log(error);

            alert("Unable to load timetable");

        }

        finally {

            setLoading(false);

        }

    };

    const getCellData = (day, period) => {

        return timetable.find(

            item =>

                Number(item.day_of_week) === Number(day) &&

                Number(item.period_id) === Number(period)

        );

    };

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center bg-slate-100">

                <h2 className="text-xl font-semibold">

                    Loading Timetable...

                </h2>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-6">

            <div className="max-w-7xl mx-auto">

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    <div className="bg-indigo-700 text-white p-5">

                        <h1 className="text-3xl font-bold">

                            My Weekly Timetable

                        </h1>

                        <p className="text-indigo-100 mt-1">

                            Active Academic Session

                        </p>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full border-collapse">

                            <thead>

                                <tr className="bg-slate-800 text-white">

                                    <th className="border p-4 min-w-[140px]">

                                        Day

                                    </th>

                                    {

                                        periods.map(period => (

                                            <th
                                                key={period.id}
                                                className="border p-4 min-w-[170px]"
                                            >

                                                {period.period_name}

                                            </th>

                                        ))

                                    }

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    days.map(day => (

                                        <tr
                                            key={day.id}
                                            className="hover:bg-slate-50"
                                        >

                                            <td className="border p-4 font-bold bg-slate-100">

                                                {day.name}

                                            </td>

                                            {

                                                periods.map(period => {

                                                    const data = getCellData(
                                                        day.id,
                                                        period.id
                                                    );

                                                    return (

                                                        <td
                                                            key={period.id}
                                                            className="border p-3 align-top"
                                                        >

                                                            {

                                                                data ?

                                                                    <div className="space-y-2">

                                                                        <div className="font-bold text-indigo-700">

                                                                            {data.subject_name}

                                                                        </div>

                                                                        <div className="text-sm text-slate-700">

                                                                            Class : {data.class_name}

                                                                        </div>

                                                                        <div className="text-sm text-slate-700">

                                                                            Section : {data.section_name}

                                                                        </div>

                                                                    </div>

                                                                    :

                                                                    <div className="text-gray-400 italic text-center">

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

        </div>

    );

}