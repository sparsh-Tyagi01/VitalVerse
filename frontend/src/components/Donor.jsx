import { Book, HelpCircle, HomeIcon, Search, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Donor = () => {

  const data = [
    {name: "Dashboard", para: "Overview of donation requests, matches, and recent activity.", icon: <HomeIcon size={35} className='text-blue-500'/>, to: '/dashboard'},
    {name: "Register", para: "Sign up as donor or recepient 'blood/organ'.", icon: <UserPlus size={35} className='text-green-600'/>, to: '/register'},
    {name: "Find Match", para: "Search & view compatiable donors/recipients.", icon: <Search size={35} className='text-violet-500'/>, to: '/find'},
    {name: "Guidelines", para: "Eligibility rules, safety info, and FAQs.", icon: <Book size={35} className='text-fuchsia-500'/>, to: '/guidelines'},
    {name: "Support", para: "Helpdesk & emergency contact.", icon: <HelpCircle size={35} className='text-emerald-500'/>, to: '/support'}
  ]

  return (
    <div className='bg-fuchsia-50 h-screen rounded-[10px]'>
      <h1 className='font-bold text-3xl ml-4 pt-4'>
        Donors & Recipients
      </h1>
      <div className='flex flex-wrap gap-6 ml-4 mt-4'>
        {data.map(items => (
          <Link key={items.name} to={items.to}>
          <div className='w-[25vw] h-[25vh] flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-[0px_0px_1px_gray]'>
          <div className='flex justify-center items-center font-medium text-xl gap-2 mb-4'>
            {items.icon} {items.name}
          </div>
          <p className='text-black/60 font-medium text-sm'>{items.para}</p>
        </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Donor