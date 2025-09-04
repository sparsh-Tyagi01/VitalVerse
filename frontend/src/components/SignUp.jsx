import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { register } = useContext(AuthContext); // assumes you have a register function in context
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    const res = await register(form.name, form.email, form.password);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      navigate("/login"); // after register, go to login
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <form
        onSubmit={submit}
        className="bg-gray-900 border border-gray-700 shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Register
        </h2>

        {error && (
          <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg mb-4 text-sm text-center border border-red-500/30">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-xl font-semibold text-white transition-all duration-200 ${
            loading
              ? "bg-indigo-500/50 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-400 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
