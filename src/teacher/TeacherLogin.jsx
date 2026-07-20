import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";
import { FaHome } from "react-icons/fa";
import bgImage from "../assets/images/loginpageBackgroundImage.png";

function TeacherLogin() {
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "/teacherLogin/teacher",
        {
          teacherId,
          password,
        }
      );

      localStorage.setItem("teacherToken", data.token);

      navigate("/teacher");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid Teacher ID or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-950/40 to-slate-950/80" />

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-30" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8"
      >
        {/* Home Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:text-blue-300 transition"
        >
          <FaHome />
          Home
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 mt-8">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/40 text-4xl">
            👨‍🏫
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-white tracking-wide">
          Teacher Portal
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Login with Teacher ID
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-400/40 text-red-200 p-3 rounded-xl mb-5 text-sm text-center">
            {error}
          </div>
        )}

        {/* Teacher ID */}
        <div className="mb-5">
          <label className="text-gray-200 text-sm block mb-2">
            Teacher ID
          </label>

          <input
            type="text"
            placeholder="Enter Teacher ID"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-7">
          <label className="text-gray-200 text-sm block mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-300 hover:text-white"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition duration-300 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        <p className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} Teacher Portal
        </p>
      </form>
    </div>
  );
}

export default TeacherLogin;