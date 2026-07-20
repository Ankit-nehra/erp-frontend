import React, { useMemo, useState } from "react";
import {
  FaBookOpen,
  FaSearch,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
  FaFilePowerpoint,
  FaFileArchive,
  FaEye,
  FaDownload,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

const notesData = [
  {
    id: 1,
    title: "Algebra Notes",
    subject: "Mathematics",
    teacher: "Amit Sharma",
    chapter: "Polynomials",
    description: "Complete notes with solved examples and important formulas.",
    type: "PDF",
    uploaded: "12 July 2026",
    file: "Algebra_Notes.pdf",
  },
  {
    id: 2,
    title: "Motion Diagrams",
    subject: "Science",
    teacher: "Neha Verma",
    chapter: "Motion",
    description: "Important diagrams and explanation for chapter revision.",
    type: "Image",
    uploaded: "10 July 2026",
    file: "Motion_Image.png",
  },
  {
    id: 3,
    title: "English Grammar Rules",
    subject: "English",
    teacher: "Rahul Mehta",
    chapter: "Tenses",
    description: "Grammar rules with examples and practice questions.",
    type: "DOC",
    uploaded: "08 July 2026",
    file: "Grammar.docx",
  },
  {
    id: 4,
    title: "National Movement PPT",
    subject: "Social Science",
    teacher: "Priya Singh",
    chapter: "History",
    description: "Presentation slides used during classroom teaching.",
    type: "PPT",
    uploaded: "06 July 2026",
    file: "History_Presentation.ppt",
  },
  {
    id: 5,
    title: "HTML Practice Files",
    subject: "Computer",
    teacher: "Rohit Kumar",
    chapter: "Web Development",
    description: "Practice files and coding examples.",
    type: "ZIP",
    uploaded: "04 July 2026",
    file: "HTML_Files.zip",
  },
];

const StudentNotes = () => {
  const [subject, setSubject] = useState("All");
  const [teacher, setTeacher] = useState("All");
  const [search, setSearch] = useState("");

  const subjects = [
    "All",
    ...new Set(notesData.map((note) => note.subject)),
  ];

  const teachers = [
    "All",
    ...new Set(notesData.map((note) => note.teacher)),
  ];

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const subjectMatch =
        subject === "All" || note.subject === subject;

      const teacherMatch =
        teacher === "All" || note.teacher === teacher;

      const searchMatch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.chapter.toLowerCase().includes(search.toLowerCase());

      return subjectMatch && teacherMatch && searchMatch;
    });
  }, [subject, teacher, search]);

  const getFileIcon = (type) => {
    if (type === "PDF") return <FaFilePdf />;
    if (type === "DOC") return <FaFileWord />;
    if (type === "Image") return <FaFileImage />;
    if (type === "PPT") return <FaFilePowerpoint />;
    if (type === "ZIP") return <FaFileArchive />;

    return <FaFileAlt />;
  };

  const getFileColor = (type) => {
    if (type === "PDF") return "bg-red-100 text-red-600";
    if (type === "Image") return "bg-pink-100 text-pink-600";
    if (type === "DOC") return "bg-blue-100 text-blue-600";
    if (type === "PPT") return "bg-orange-100 text-orange-600";
    if (type === "ZIP") return "bg-yellow-100 text-yellow-700";

    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Study Notes
        </h1>

        <p className="text-gray-500 mt-2">
          View and download notes uploaded by your teachers.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Total Notes", notesData.length, "text-indigo-600"],
          ["Subjects", subjects.length - 1, "text-green-600"],
          ["Teachers", teachers.length - 1, "text-blue-600"],
          ["New This Week", 3, "text-purple-600"],
        ].map(([title, value, color]) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow border p-6"
          >
            <p className="text-gray-500">{title}</p>

            <h2 className={`text-4xl font-bold mt-3 ${color}`}>
              {value}
            </h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none"
          >
            {subjects.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none"
          >
            {teachers.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="w-full border rounded-xl px-10 py-3 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-2xl shadow border p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${getFileColor(
                  note.type
                )}`}
              >
                {getFileIcon(note.type)}
              </div>

              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                {note.type}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mt-5">
              {note.title}
            </h2>

            <div className="space-y-2 mt-4 text-gray-600">
              <p className="flex items-center gap-2">
                <FaBookOpen /> {note.subject}
              </p>

              <p className="flex items-center gap-2">
                <FaUserTie /> {note.teacher}
              </p>

              <p className="flex items-center gap-2">
                <FaCalendarAlt /> {note.uploaded}
              </p>
            </div>

            <div className="mt-4 bg-slate-50 rounded-xl p-4">
              <p className="font-semibold text-slate-700">
                {note.chapter}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                {note.description}
              </p>
            </div>

            <div className="flex gap-3 mt-5">
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                <FaEye /> View
              </button>

              <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700">
                <FaDownload /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="bg-white rounded-2xl shadow border p-10 text-center">
          <h2 className="text-xl font-bold text-gray-700">
            No Notes Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing your filters or search.
          </p>
        </div>
      )}

      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <h3 className="font-bold text-indigo-700">
          Study Material
        </h3>

        <p className="text-gray-600 mt-2 leading-7">
          Teachers upload notes, assignments, images, and study materials
          here. Download the required files and prepare for your classes.
        </p>
      </div>
    </div>
  );
};

export default StudentNotes;