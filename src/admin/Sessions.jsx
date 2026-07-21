import { useEffect, useState } from "react";

import axios from "../utils/axiosInstance";
const API = "/admin/sessions";
//import axios from "../utils/axiosInstance";

export default function SessionManagement() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    session_name: "",
    start_date: "",
    end_date: "",
    is_active: false,
  });

  useEffect(() => {
    getSessions();
  }, []);

  const getSessions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setSessions(res.data.sessions);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: 2025-2026
    const regex = /^\d{4}-\d{4}$/;

    if (!regex.test(form.session_name)) {
      return alert("Session format should be like 2025-2026");
    }

    const years = form.session_name.split("-");

    if (+years[1] !== +years[0] + 1) {
      return alert("Second year must be first year + 1");
    }

    try {
      await axios.post(API, form);

      alert("Session Added Successfully");

      setForm({
        session_name: "",
        start_date: "",
        end_date: "",
        is_active: false,
      });

      getSessions();
    } catch (err) {
      console.log(err);
      alert("Unable to save session.");
    }
  };

  const deleteSession = async (id) => {
    if (!window.confirm("Delete this session?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      getSessions();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Form */}
        <div className="rounded-xl bg-white shadow-lg">
          <div className="border-b px-6 py-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Academic Session
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Create a new academic session.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 p-6 md:grid-cols-4"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">
                Session
              </label>

              <input
                type="text"
                name="session_name"
                placeholder="2025-2026"
                value={form.session_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                required
              />

              <p className="mt-1 text-xs text-gray-400">
                Format: 2025-2026
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Start Date
              </label>

              <input
                type="date"
                name="start_date"
                value={form.start_date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                End Date
              </label>

              <input
                type="date"
                name="end_date"
                value={form.end_date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex flex-col justify-end">
              <label className="mb-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={form.is_active}
                  onChange={handleChange}
                  className="h-4 w-4"
                />

                <span>Active Session</span>
              </label>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                Save Session
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="rounded-xl bg-white shadow-lg">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-semibold">
              Session List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-5 py-3 text-left">#</th>
                  <th className="px-5 py-3 text-left">Session</th>
                  <th className="px-5 py-3 text-left">Start</th>
                  <th className="px-5 py-3 text-left">End</th>
                  <th className="px-5 py-3 text-left">Status</th>
                  <th className="px-5 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-8 text-center"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : sessions.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-8 text-center text-gray-500"
                    >
                      No Sessions Found
                    </td>
                  </tr>
                ) : (
                  sessions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-5 py-3">
                        {index + 1}
                      </td>

                      <td className="px-5 py-3 font-medium">
                        {item.session_name}
                      </td>

                      <td className="px-5 py-3">
                        {item.start_date}
                      </td>

                      <td className="px-5 py-3">
                        {item.end_date}
                      </td>

                      <td className="px-5 py-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            item.is_active
                              ? "bg-green-600"
                              : "bg-gray-500"
                          }`}
                        >
                          {item.is_active
                            ? "ACTIVE"
                            : "INACTIVE"}
                        </span>
                      </td>

                      <td className="px-5 py-3 text-center">
                        <button
                          onClick={() =>
                            deleteSession(item.id)
                          }
                          className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
