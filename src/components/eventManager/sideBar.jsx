import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
// import Event from '../pages/createEvent';
import {SiEventbrite} from 'react-icons/si'
import { MdManageAccounts } from 'react-icons/md'
import {GoPersonAdd} from 'react-icons/go'
import { BsCardChecklist } from 'react-icons/bs'
import { useState } from 'react';


 const Sidebar = ({ children }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded((prev) => !prev);
  };
  return (
    
     <div className={`h-screen ${isSidebarExpanded ? 'w-42' : 'w-12'}`}>
     <div className='fixed h-screen p-6 m-1 bg-white border rounded-2xl flex flex-col justify-between'>
        <div className='flex flex-col'>
        <button onClick={toggleSidebar}>
          {isSidebarExpanded ? < FiSettings/> : <FiSettings />}
        </button>
          <dir className="flex flex-row hover:bg-purple-700">
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          
          </dir>
          <span className='border-b-[1px] border-gray-200 w-full p-1'></span>
          
          <Link href='/dashboard'>
            <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-purple-800 text-black' >
              <RxDashboard />
              <div className='text-[15px] ml-4 text-black'>Dashboard</div>
            </div>
            </Link>
            
            <Link href='/account'>
            <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
              <RxPerson />
              <div className='text-[15px] ml-4 text-black'>Account</div>
            </div>
            </Link>
            <Link href='/events'>
            <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
              <SiEventbrite />
              <div className='text-[15px] ml-4 text-black'>Events</div>
            </div>
            </Link>

            <Link href='/exposants'>
            <div className='p-2.5 mt-3 flex items-center rounded-xl px-4 duration-300 cursor-pointer  hover:bg-purple-800 text-black' >
             <BsCardChecklist/>
              <div className='text-[15px] ml-4 text-black'>Exposants</div>
            </div>
            </Link>

        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};
export default Sidebar;
