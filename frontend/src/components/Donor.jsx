import { Book, Clock, HelpCircle, HomeIcon, List, Search, UserPlus } from 'lucide-react'

const Donor = () => {
  return (
    <div className='bg-fuchsia-50 h-screen rounded-[10px]'>
      <h1 className='font-bold text-3xl ml-4 pt-4'>
        Donors & Recipients
      </h1>
      <div className='flex flex-wrap gap-6 ml-4 mt-4'>
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <HomeIcon size={35} className='text-blue-500'/> Dashboard
          </div>
          <p className='text-black/60 font-medium text-sm'>Overview of donation requests, matches, and recent activity.</p>
        </div>
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <UserPlus size={35} className='text-green-600'/> Register
          </div>
          <p className='text-black/60 font-medium text-sm'>Sign up as donor or recepient 'blood/organ'.</p>
        </div>
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <Search size={35} className='text-violet-500'/> Find Match
          </div>
          <p className='text-black/60 font-medium text-sm'>Search & view compatiable donors/recipients.</p>
        </div>
        {/* <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <List size={35} className='text-yellow-600'/> Requests
          </div>
          <p className='text-black/60 font-medium text-sm'>Pending, approved, and completed donation requests.</p>
        </div>
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <Clock size={35} className='text-red-600'/> History
          </div>
          <p className='text-black/60 font-medium text-sm'>Past donations/receipts with status & reports.</p>
        </div> */}
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <Book size={35} className='text-fuchsia-500'/> Guidelines
          </div>
          <p className='text-black/60 font-medium text-sm'>Eligibility rules, safety info, and FAQs.</p>
        </div>
        <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            <HelpCircle size={35} className='text-emerald-500'/> Support
          </div>
          <p className='text-black/60 font-medium text-sm'>Helpdesk & emergency contact.</p>
        </div>
      </div>
    </div>
  )
}

export default Donor