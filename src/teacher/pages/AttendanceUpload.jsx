  import { useEffect, useState } from "react";

  import {
    HiCalendar,
    HiTrash,
    HiRefresh,
    HiCheckCircle,
    HiExclamationCircle,
  } from "react-icons/hi";

  import API from "../../utils/axiosInstance";

  function AttendanceUpload() {
    const [assignments, setAssignments] = useState([]);

    const [selectedClass, setSelectedClass] = useState(null);

    const [selectedSection, setSelectedSection] = useState(null);

    const [selectedSubject, setSelectedSubject] = useState(null);

    const [selectedAssignment, setSelectedAssignment] = useState(null);

    const [students, setStudents] = useState([]);

    const [date, setDate] = useState("");

    const [period, setPeriod] = useState(1);

    const [loadingStudents, setLoadingStudents] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const [deleting, setDeleting] = useState(false);

    const [message, setMessage] = useState("");

    const [messageType, setMessageType] = useState("");

    const [alreadySubmitted, setAlreadySubmitted] = useState(false);

    const [attendanceId, setAttendanceId] = useState(null);

    useEffect(() => {
      fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
      try {
        const response = await API.get(
          "/teacher/attendance/options"
        );

        setAssignments(response.data.data);
      } catch (error) {
        console.log(error);

        setMessage("Unable to load attendance options");

        setMessageType("error");
      }
    };

    // unique classes

    const classes = [
      ...new Map(
        assignments.map((item) => [
          item.class_id,
          item,
        ])
      ).values(),
    ];

    // sections according to class

  const sections = [
    ...new Map(
      assignments
        .filter(
          (item) =>
            item.class_id === selectedClass?.class_id
        )
        .map((item) => [item.section_id, item])
    ).values(),
  ];

    // subjects according to class + section

  const subjects = [
    ...new Map(
      assignments
        .filter(
          (item) =>
            item.class_id === selectedClass?.class_id &&
            item.section_id === selectedSection?.section_id
        )
        .map((item) => [item.subject_id, item])
    ).values(),
  ];

    // Load Students

    const loadStudents = async () => {
      if (!selectedAssignment || !date) {
        setMessage(
          "Please select class, section, subject and date"
        );

        setMessageType("error");

        return;
      }

      try {
        setLoadingStudents(true);

        setMessage("");

        const response = await API.get(
          "/teacher/attendance/students",
          {
            params: {
              class_id:
                selectedAssignment.class_id,

              section_id:
                selectedAssignment.section_id,

              subject_id:
                selectedAssignment.subject_id,

              attendance_date: date,

              period_number: period,
            },
          }
        );

        if (response.data.alreadySubmitted) {
          setAlreadySubmitted(true);

          setAttendanceId(
            response.data.attendance_id
          );

          setMessage(
            "Attendance already submitted. You can delete and submit again."
          );

          setMessageType("warning");
        } else {
          setAlreadySubmitted(false);

          setAttendanceId(null);

          setMessage(
            "Students loaded successfully"
          );

          setMessageType("success");
        }

        setStudents(
          response.data.students.map((student) => ({
            ...student,
          }))
        );
      } catch (error) {
        console.log(error);

        setMessage(
          error.response?.data?.message ||
            "Error loading students"
        );

        setMessageType("error");
      } finally {
        setLoadingStudents(false);
      }
    };










  // Change Status

  const toggleStatus=(admission_number)=>{


  if(alreadySubmitted)
  return;



  setStudents(prev=>

  prev.map(student=>{



  if(
  student.admission_number === admission_number
  ){



  let status;



  if(student.status==="Present")

  status="Absent";


  else if(student.status==="Absent")

  status="Leave";


  else

  status="Present";




  return {

  ...student,

  status

  };


  }



  return student;



  })


  );


  };











  // Submit Attendance

  const submitAttendance = async()=>{


  if(students.length===0){


  setMessage(
  "Load students first"
  );

  setMessageType("error");


  return;


  }





  try{


  setSubmitting(true);

  setMessage("");




  await API.post(

  "/teacher/attendance",

  {


  class_id:
  selectedAssignment.class_id,


  section_id:
  selectedAssignment.section_id,


  subject_id:
  selectedAssignment.subject_id,


  attendance_date:
  date,


  period_number:
  period,



  students:



  students.map(student=>({


  admission_number:
  student.admission_number,


  status:
  student.status || "Present"



  }))



  }

  );





  setMessage(
  "Attendance submitted successfully"
  );


  setMessageType("success");



  setAlreadySubmitted(true);



  }
  catch(error){



  console.log(error);



  if(
  error.response?.status === 409
  ){


  setMessage(
  "Attendance already submitted for this class and period"
  );


  }

  else{


  setMessage(

  error.response?.data?.message ||

  "Attendance submit failed"

  );


  }



  setMessageType("error");



  }
  finally{


  setSubmitting(false);


  }



  };









  // Delete Attendance

  const deleteAttendance = async()=>{



  if(!attendanceId)
  return;



  const confirmDelete =
  window.confirm(
  "Are you sure you want to delete attendance?"
  );



  if(!confirmDelete)
  return;




  try{


  setDeleting(true);



  await API.delete(

  `/teacher/attendance/${attendanceId}`

  );




  setMessage(
  "Attendance deleted successfully"
  );


  setMessageType("success");




  setAlreadySubmitted(false);


  setAttendanceId(null);


  setStudents([]);



  }
  catch(error){



  console.log(error);



  setMessage(

  error.response?.data?.message ||

  "Delete failed"

  );


  setMessageType("error");



  }
  finally{


  setDeleting(false);


  }



  };









  const presentCount =

  students.filter(
  s=>s.status==="Present"
  ).length;





  const percentage =

  students.length

  ?

  Math.round(
  presentCount / students.length * 100
  )

  :

  0;
  return(

  <div className="space-y-8">



  <h1 className="text-3xl font-bold">
  Upload Attendance
  </h1>





  {
  message &&

  <div
  className={`
  p-4 rounded-xl flex items-center gap-3

  ${
  messageType==="success"

  ?
  "bg-green-100 text-green-700"

  :

  messageType==="warning"

  ?

  "bg-yellow-100 text-yellow-700"

  :

  "bg-red-100 text-red-700"

  }

  `}
  >


  {
  messageType==="success"

  ?

  <HiCheckCircle size={24}/>

  :

  <HiExclamationCircle size={24}/>

  }


  {message}


  </div>

  }








  <div
  className="
  bg-white
  border
  rounded-2xl
  p-6
  grid
  md:grid-cols-5
  gap-5
  "
  >





  {/* CLASS */}

  <div>

  <label className="font-semibold">
  Class
  </label>


  <select

  className="
  mt-2
  w-full
  border
  rounded-xl
  p-3
  "


  onChange={(e)=>{


  const value =
  classes[e.target.value];


  setSelectedClass(value);

  setSelectedSection(null);

  setSelectedSubject(null);

  setSelectedAssignment(null);


  }}


  >


  <option>
  Select Class
  </option>


  {

  classes.map(
  (item,index)=>(


  <option

  key={index}

  value={index}

  >

  {item.class_name}

  </option>


  ))

  }


  </select>


  </div>










  {/* SECTION */}

  <div>


  <label className="font-semibold">
  Section
  </label>


  <select

  disabled={!selectedClass}

  className="
  mt-2
  w-full
  border
  rounded-xl
  p-3
  "


  onChange={(e)=>{


  const value =
  sections[e.target.value];


  setSelectedSection(value);

  setSelectedSubject(null);

  setSelectedAssignment(null);


  }}


  >


  <option>
  Select Section
  </option>



  {

  sections.map(
  (item,index)=>(


  <option

  key={index}

  value={index}

  >

  {item.section_name}

  </option>


  ))


  }



  </select>


  </div>









  {/* SUBJECT */}

  <div>


  <label className="font-semibold">
  Subject
  </label>


  <select

  disabled={!selectedSection}

  className="
  mt-2
  w-full
  border
  rounded-xl
  p-3
  "


  onChange={(e)=>{


  const value =
  subjects[e.target.value];


  setSelectedSubject(value);


  setSelectedAssignment(value);



  }}


  >



  <option>
  Select Subject
  </option>


  {

  subjects.map(
  (item,index)=>(


  <option

  key={index}

  value={index}

  >

  {item.subject_name}

  </option>


  ))


  }



  </select>



  </div>









  {/* DATE */}

  <div>


  <label className="font-semibold">
  Date
  </label>


  <div className="relative">


  <HiCalendar

  className="
  absolute
  left-3
  top-4
  text-gray-500
  "

  />



  <input

  type="date"

  value={date}

  onChange={
  e=>setDate(e.target.value)
  }


  className="
  mt-2
  w-full
  border
  rounded-xl
  p-3
  pl-10
  "

  />


  </div>


  </div>









  {/* PERIOD */}

  <div>


  <label className="font-semibold">
  Period
  </label>


  <select


  value={period}


  onChange={
  e=>setPeriod(e.target.value)
  }


  className="
  mt-2
  w-full
  border
  rounded-xl
  p-3
  "


  >


  {

  [1,2,3,4,5,6,7,8]

  .map(p=>(


  <option

  key={p}

  value={p}

  >

  {p}

  </option>


  ))


  }


  </select>


  </div>





  </div>









  {/* LOAD BUTTON */}


  <button


  onClick={loadStudents}


  disabled={loadingStudents}


  className="
  bg-indigo-700
  disabled:bg-gray-400
  text-white
  px-8
  py-3
  rounded-xl
  flex
  items-center
  gap-2
  "


  >


  {

  loadingStudents

  ?

  <>

  <HiRefresh className="animate-spin"/>

  Loading Students...

  </>

  :

  "Load Students"

  }



  </button>












  {
  students.length > 0 &&


  <div

  className="
  bg-indigo-50
  rounded-xl
  p-5
  "

  >


  <p>

  Present:

  <b>
  {presentCount}/{students.length}
  </b>

  </p>


  <p>

  Attendance:

  <b>
  {percentage}%
  </b>

  </p>


  </div>


  }













  {
  students.length > 0 &&


  <div

  className="
  bg-white
  border
  rounded-2xl
  overflow-hidden
  "

  >


  <table className="w-full">


  <thead
  className="
  bg-indigo-700
  text-white
  "
  >
  <tr>

  <th className="p-4 text-center">
  Photo
  </th>

  <th className="p-4 text-center">
  Roll
  </th>

  <th className="p-4 text-left">
  Student Name
  </th>

  <th className="p-4 text-center">
  Status
  </th>

  </tr>
  </thead>





  <tbody>


  {

  students.map(student=>(



  <tr

  key={
  student.admission_number
  }

  className="border-b"


  >
  <td className="p-4 text-center">

  {
  student.profile_photo ?

  (
  <img

  src={student.profile_photo}

  alt={student.student_name}

  className="
  w-12
  h-12
  rounded-full
  object-cover
  border
  "

  />
  )

  :

  (

  <div

  className="
  w-12
  h-12
  rounded-full
  bg-indigo-100
  text-indigo-700
  flex
  items-center
  justify-center
  font-bold
  "

  >

  {
  student.student_name?.charAt(0)
  }

  </div>

  )

  }

  </td>


  <td className="p-4 text-center">

  {student.roll_number}

  </td>





  <td

  className="
  p-4
  font-semibold text-left
  "

  >

  {student.student_name}

  </td>







  <td className="p-4  text-center">


  <button


  disabled={alreadySubmitted}


  onClick={()=>


  toggleStatus(
  student.admission_number
  )

  }


  className={`
  px-4
  py-2
  rounded-xl
  font-semibold


  ${
  student.status==="Present"

  ?

  "bg-green-100 text-green-700"

  :

  student.status==="Absent"

  ?

  "bg-red-100 text-red-700"

  :

  "bg-yellow-100 text-yellow-700"

  }


  disabled:opacity-50

  `}


  >


  {student.status}


  </button>


  </td>






  </tr>



  ))


  }



  </tbody>


  </table>


  </div>


  }














  {
  students.length > 0 &&

  <div className="flex gap-4">


  {

  !alreadySubmitted &&



  <button


  onClick={submitAttendance}


  disabled={submitting}


  className="
  flex-1
  bg-indigo-700
  disabled:bg-gray-400
  text-white
  py-4
  rounded-2xl
  font-bold
  "


  >



  {

  submitting

  ?

  "Submitting..."

  :

  "Submit Attendance"

  }


  </button>


  }







  {

  alreadySubmitted &&


  <button


  onClick={deleteAttendance}


  disabled={deleting}


  className="
  flex-1
  bg-red-600
  disabled:bg-gray-400
  text-white
  py-4
  rounded-2xl
  font-bold
  flex
  justify-center
  items-center
  gap-2
  "


  >


  <HiTrash/>


  {

  deleting

  ?

  "Deleting..."

  :

  "Delete Attendance"

  }



  </button>


  }



  </div>


  }






  </div>

  );


  }


  export default AttendanceUpload;