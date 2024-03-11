// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
// import { HiOutlineShoppingBag } from 'react-icons/hi';
// import { FiSettings } from 'react-icons/fi';
// // import Event from '../pages/createEvent';
// import {SiEventbrite} from 'react-icons/si'
// import { MdManageAccounts } from 'react-icons/md'
// import {GoPersonAdd} from 'react-icons/go'
// import { BsCardChecklist } from 'react-icons/bs'
// import { useState } from 'react';


//  const Sidebar = ({ children }) => {
//   const [isSidebarExpanded, setSidebarExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarExpanded((prev) => !prev);
//   };
//   return (
    
//      <div className={`h-screen ${isSidebarExpanded ? 'w-42' : 'w-12'}`}>
//      <div className='fixed h-screen p-6 m-1 bg-white border rounded-2xl flex flex-col justify-between'>
//         <div className='flex flex-col'>
//         {/* <button onClick={toggleSidebar}>
//           {isSidebarExpanded ? < FiSettings/> : <FiSettings />}
//         </button> */}
//           <dir className="flex flex-row hover:bg-purple-700">
//           <Link href='/'>
//             <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
//               <RxSketchLogo size={20} />
//             </div>
//           </Link>
          
//           </dir>
//           <span className='border-b-[1px] border-gray-200 w-full p-1'></span>
          
//           <Link href='/eventManager/dashboard'>
//             <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-purple-800 text-black' >
//               <RxDashboard />
//               <div className='text-[15px] ml-4 text-black'>Dashboard</div>
//             </div>
//             </Link>
            
//             <Link href='/eventManager/account'>
//             <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
//               <RxPerson />
//               <div className='text-[15px] ml-4 text-black'>Account</div>
//             </div>
//             </Link>
//             <Link href='/eventManager/events'>
//             <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
//               <SiEventbrite />
//               <div className='text-[15px] ml-4 text-black'>Events</div>
//             </div>
//             </Link>

//             <Link href='/eventManager/exhibitors'>
//             <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
//              <BsCardChecklist/>
//               <div className='text-[15px] ml-4 text-black'>Exhibitors</div>
//             </div>
//             </Link>
//             {/* <Link href='/eventManager/requests'>
//             <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
//              <BsCardChecklist/>
//               <div className='text-[15px] ml-4 text-black'>Requests</div>
//             </div>
//             </Link> */}

//         </div>
//       </div>
//       <main className='ml-20 w-full'>{children}</main>
//     </div>
//   );
// };
// export default Sidebar;
import { forwardRef } from "react"
import Link from "next/link"
import {
  HomeIcon,
  CreditCardIcon,
  UserIcon,
  BellIcon,
  BriefcaseIcon,
  CalendarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { useRouter } from "next/router"

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter()

  return (
    <div ref={ref} className=" w-56 fixed bg-white ">
      <div className="flex justify-center mt-2 mb-3  ">
        <h1 className="text-4xl font-bold  text-blue-400">MyEvent</h1>
      </div>

      <div className="flex flex-col rounded-tr-3xl  h-screen bg-blue-200 p-4">
      <Link href="/exhibitor/profile">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/exhibitor/profile"
              ? "bg-white text-black"
              : "text-black hover:bg-white hover:text-blue-950"
          }`}
          >
            <div className="mr-2">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </Link>
        <Link href="/exhibitor/account">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/exhibitor/account"
                ? "bg-white text-black"
                : "text-black hover:bg-white hover:text-purple-950"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/exhibitor/products">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/exhibitor/products"
                ? "bg-white text-black"
                : "text-black hover:bg-white hover:text-purple-950"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </Link>
        
        
      </div>
    </div>
  )
})

SideBar.displayName = "SideBar"

export default SideBar
