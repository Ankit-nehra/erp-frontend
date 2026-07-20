
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";
import { FaHome } from "react-icons/fa";
import bgImage from "../assets/images/loginPageBackgroundImage.png";

function StudentLogin() {
  const [admissionNumber, setAdmissionNumber] = useState("");
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
        "/studentLogin/student",
        {
          admissionNumber,
          password,
        }
      );

      localStorage.setItem("studentToken", data.token);

      navigate("/student");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid credentials"
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-green-950/40 to-slate-950/70" />

      <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-[150px] opacity-25" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8"
      >

        {/* Home Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition"
        >
          <FaHome />
          Home
        </button>


        {/* Logo */}
        <div className="flex justify-center mb-6 mt-8">
          <div className="bg-green-600 p-4 rounded-2xl shadow-lg shadow-green-500/40 text-4xl">
            🎓
          </div>
        </div>


        <h2 className="text-3xl font-bold text-center text-white">
          Student Portal
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-6">
          Login to access your dashboard
        </p>


        {error && (
          <div className="bg-red-500/20 border border-red-400/40 text-red-200 p-3 rounded-xl mb-5 text-center">
            {error}
          </div>
        )}


        {/* Admission Number */}
        <div className="mb-5">
          <label className="text-gray-200 text-sm block mb-2">
            Admission Number
          </label>

          <input
            type="text"
            placeholder="Enter Admission Number"
            value={admissionNumber}
            onChange={(e) => setAdmissionNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-white"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>


        {/* Login Button */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>


        <p className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} Student Portal
        </p>

      </form>
    </div>
  );
}

export default StudentLogin;

