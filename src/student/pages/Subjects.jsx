const subjects = [
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. Sharma",
    code: "MTH101",
    marks: 95,
  },
  {
    id: 2,
    name: "Science",
    teacher: "Mrs. Gupta",
    code: "SCI102",
    marks: 91,
  },
  {
    id: 3,
    name: "English",
    teacher: "Ms. Kaur",
    code: "ENG103",
    marks: 88,
  },
  {
    id: 4,
    name: "Social Science",
    teacher: "Mr. Verma",
    code: "SST104",
    marks: 90,
  },
  {
    id: 5,
    name: "Hindi",
    teacher: "Mrs. Yadav",
    code: "HIN105",
    marks: 86,
  },
  {
    id: 6,
    name: "Computer",
    teacher: "Mr. Singh",
    code: "CMP106",
    marks: 98,
  },
];

function Subjects() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold text-slate-800">
          Subjects
        </h1>

        <p className="text-gray-500 mt-2">
          View your enrolled subjects and academic performance.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-emerald-700 text-white">
            <tr>
              <th className="text-left px-6 py-4">Subject</th>
              <th className="text-left px-6 py-4">Teacher</th>
              <th className="text-left px-6 py-4">Code</th>
              <th className="text-left px-6 py-4">Marks</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject) => (
              <tr
                key={subject.id}
                className="border-b last:border-none hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold">
                  {subject.name}
                </td>

                <td className="px-6 py-4">
                  {subject.teacher}
                </td>

                <td className="px-6 py-4">
                  {subject.code}
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {subject.marks}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-5 md:hidden">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-2xl shadow border p-5"
          >
            <h2 className="text-lg font-bold text-slate-800">
              {subject.name}
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-semibold">
                  Teacher:
                </span>{" "}
                {subject.teacher}
              </p>

              <p>
                <span className="font-semibold">
                  Code:
                </span>{" "}
                {subject.code}
              </p>

              <p>
                <span className="font-semibold">
                  Marks:
                </span>{" "}
                <span className="text-green-600 font-bold">
                  {subject.marks}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;