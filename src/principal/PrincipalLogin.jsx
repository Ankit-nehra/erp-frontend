import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";
import bgImage from "../assets/images/loginpageBackgroundImage.png";
import {
  FaHome,
  FaUserTie,
  FaUniversity,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

function AdminLogin() {
  const [principalId, setprincipalId] = useState("");
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
        "/principalLogin/principal",
        {
          principalId,
          password,
        }
      );

      console.log(data);

      localStorage.setItem("principalToken", data.token);
      navigate("/principal");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-blue-950/40 to-indigo-900/90"></div>

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px] opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-[160px] opacity-20"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8"
      >
        {/* Home Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition duration-300"
        >
          <FaHome />
          Home
        </button>

        {/* Principal Icon */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-40 rounded-full"></div>

            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 border-4 border-white/20 flex items-center justify-center shadow-2xl">
              <FaUserTie className="text-white text-5xl" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white">
          Principal Portal
        </h2>

        <div className="flex items-center justify-center gap-2 mt-3 mb-8 text-blue-200">
          <FaUniversity />
          <span className="text-sm tracking-wide">
            Secure Administrative Login
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-400/40 bg-red-500/20 px-4 py-3 text-center text-red-100 text-sm">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="mb-5">
          <label className="block text-sm text-gray-200 mb-2">
            Username
          </label>

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" />

            <input
              type="text"
              value={principalId}
              onChange={(e) => setprincipalId(e.target.value)}
              placeholder="Enter Username"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-7">
          <label className="block text-sm text-gray-200 mb-2">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white font-semibold shadow-lg shadow-blue-600/30 hover:scale-[1.02] hover:shadow-blue-500/50 transition duration-300 disabled:opacity-60 flex justify-center items-center gap-3"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Signing In...
            </>
          ) : (
            <>
              <FaSignInAlt />
              Principal Login
            </>
          )}
        </button>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-white/10 text-center">
          <p className="text-gray-300 text-xs flex items-center justify-center gap-2">
            <FaUniversity />
            Principal Administration Portal
          </p>

          <p className="text-gray-400 text-xs mt-2">
            © {new Date().getFullYear()} School Management System
          </p>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;