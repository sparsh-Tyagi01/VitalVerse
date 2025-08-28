import { motion } from "motion/react"

const Register = () => {
  return (
    <div className='bg-fuchsia-50 h-screen rounded-[10px]'>
      <h1 className='font-bold text-3xl ml-4 pt-4'>
        Donors & Recipients
      </h1>
      <h1 className="font-bold text-xl ml-4 pt-4">
        Register as Donor or Recipient
      </h1>
      <div className="w-[60vw] h-[70vh] border-1 border-gray-400 rounded-2xl bg-white ml-4 mt-6">
        <form className="flex flex-col items-center mt-8">
            <div className="w-[55vw] mb-4">
                <label className="block font-medium" htmlFor="name">Full Name*</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name" className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2"/>
            </div>
            <div className="flex justify-around items-center gap-4 mb-4">
                <div className="w-[27vw]">
                    <label className="block font-medium" htmlFor="role">Role*</label>
                    <select id="role" name="role" required className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2">
                        <option value="">Donor</option>
                        <option value="">Recipient</option>
                    </select>
                </div>
                <div className="w-[27vw]">
                    <label className="block font-medium" htmlFor="type">Type*</label>
                    <select id="type" name="type" required className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2">
                        <option value="">Blood</option>
                        <option value="">Organ</option>
                    </select>
                </div>
            </div>
            <div className="w-[55vw] mb-4">
                <label className="block font-medium" htmlFor="blood">Blood Group*</label>
                <select id="blood" name="blood" required className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2">
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
            <div className="flex justify-around items-center gap-4 mb-6">
                <div className="w-[27vw]">
                    <label className="block font-medium" htmlFor="email"> Email*</label>
                    <input type="email" id="email" required name="email" placeholder="you@example.com" className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2"/>
                </div>
                <div className="w-[27vw]">
                    <label className="block font-medium" htmlFor="phone"> Phone*</label>
                    <input type="number" id="phone" required name="phone" placeholder="+91 XXXXX XXXXX" className="focus:outline-none border-1 border-gray-500 rounded-[5px] w-full h-8 pl-2"/>
                </div>
            </div>
            <motion.button
             whileTap={{scale:0.99}}
             className="w-[55vw] py-1 bg-blue-700 rounded-[5px] hover:bg-blue-600 transition-colors duration-100 text-white cursor-pointer">
                Submit
            </motion.button>
        </form>
      </div>
    </div>
  )
}

export default Register