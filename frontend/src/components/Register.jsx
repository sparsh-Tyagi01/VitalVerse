import { motion } from "motion/react"
import { useState } from "react"
import { axiosInstance } from "../lib/axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Register = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
      name: "",
      role: "",
      type: "",
      subtype: "",
      email: "",
      phone: ""
    });

  async function handelSubmit(e) {
    e.preventDefault()

    try {
      const res = await axiosInstance.post("/donor/register", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(res.data.message || "Registered successfully!");
      navigate("/find");
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Something went wrong. Try again.";
      toast.error(errorMessage);
    }    
  }

  return (
    <div className="bg-gray-950 min-h-screen rounded-[10px] text-white">
      <h1 className="font-bold text-3xl ml-4 pt-4">
        Donors & Recipients
      </h1>
      <h1 className="font-bold text-xl ml-4 pt-4 text-gray-300">
        Register as Donor or Recipient
      </h1>

      <div className="w-[60vw] h-[70vh] border border-gray-700 rounded-2xl bg-gray-900 ml-4 mt-6 shadow-md">
        <form onSubmit={handelSubmit} className="flex flex-col items-center mt-8">
          {/* Full Name */}
          <div className="w-[55vw] mb-4">
            <label className="block font-medium text-gray-200" htmlFor="name">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              required
              placeholder="Enter your name"
              className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          {/* Role + Type */}
          <div className="flex justify-around items-center gap-4 mb-4">
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="role">
                Role*
              </label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={(e) => setForm({...form, role: e.target.value})}
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
              >
                <option value=".">Select</option>
                <option value="Donor">Donor</option>
                <option value="Recipient">Recipient</option>
              </select>
            </div>
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="type">
                Type*
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={(e) => setForm({...form, type: e.target.value})}
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
              >
                <option value=".">Select</option>
                <option value="Blood">Blood</option>
                <option value="Organ">Organ</option>
              </select>
            </div>
          </div>

          {/* Sub Type */}
          <div className="w-[55vw] mb-4">
            <label className="block font-medium text-gray-200" htmlFor="subtype">
              Sub Type*
            </label>
            <select
              id="subtype"
              name="subtype"
              value={form.subtype}
              onChange={(e) => setForm({...form, subtype: e.target.value})}
              className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
            >
              <option value=".">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="Kidney">Kidney</option>
              <option value="Liver">Liver</option>
            </select>
          </div>

          {/* Email + Phone */}
          <div className="flex justify-around items-center gap-4 mb-6">
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="you@example.com"
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="phone">
                Phone*
              </label>
              <input
                type="text"
                id="phone"
                required
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                placeholder="+91 XXXXX XXXXX"
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-[55vw] py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition-colors duration-150 text-white font-medium shadow-md"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default Register
