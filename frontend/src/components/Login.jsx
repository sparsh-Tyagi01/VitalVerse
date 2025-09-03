import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  const res = await login(form.email, form.password);
  setLoading(false);
  if (res.error) {
    setError(res.error);
  } else {
    
    navigate("/donor/dashboard");
  }
};


  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      {error && <div style={{color:"red"}}>{error}</div>}
      <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
      <button type="submit">{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
}
