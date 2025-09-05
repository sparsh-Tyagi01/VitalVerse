import { motion } from "motion/react"

const Register = () => {
  return (
    <div className="bg-gray-950 min-h-screen rounded-[10px] text-white">
      <h1 className="font-bold text-3xl ml-4 pt-4">
        Donors & Recipients
      </h1>
      <h1 className="font-bold text-xl ml-4 pt-4 text-gray-300">
        Register as Donor or Recipient
      </h1>

      <div className="w-[60vw] h-[70vh] border border-gray-700 rounded-2xl bg-gray-900 ml-4 mt-6 shadow-md">
        <form className="flex flex-col items-center mt-8">
          {/* Full Name */}
          <div className="w-[55vw] mb-4">
            <label className="block font-medium text-gray-200" htmlFor="name">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
                required
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
              >
                <option value="">Donor</option>
                <option value="">Recipient</option>
              </select>
            </div>
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="type">
                Type*
              </label>
              <select
                id="type"
                name="type"
                required
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
              >
                <option value="">Blood</option>
                <option value="">Organ</option>
              </select>
            </div>
          </div>

          {/* Blood Group */}
          <div className="w-[55vw] mb-4">
            <label className="block font-medium text-gray-200" htmlFor="blood">
              Blood Group*
            </label>
            <select
              id="blood"
              name="blood"
              required
              className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white"
            >
              <option value="">A+</option>
              <option value="">A-</option>
              <option value="">B+</option>
              <option value="">B-</option>
              <option value="">O+</option>
              <option value="">O-</option>
              <option value="">AB+</option>
              <option value="">AB-</option>
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
                placeholder="you@example.com"
                className="focus:outline-none border border-gray-600 rounded-md w-full h-9 pl-2 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="w-[27vw]">
              <label className="block font-medium text-gray-200" htmlFor="phone">
                Phone*
              </label>
              <input
                type="number"
                id="phone"
                required
                name="phone"
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
