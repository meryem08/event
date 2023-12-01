"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='flex justify-end w-full'>
    <div className=' flex flex-row justify-between mr-12 mt-6 '>
    <div className="flex items-center h-10 bg-white border-2 border-purple-200 rounded-lg p-1 m-2">
      <MdSearch size={20} className="m-2 text-purple-600" />
      <input
        type="search"
        placeholder="Search"
        className="flex-grow p-1 focus:outline-none"
      />
    </div>
    <MdNotifications size={30} className='m-2 pt-1'/>
    
    <div name = 'profile'>
    <Image
        src="/pic1.jpg" // Adjust the path to your image
        width={40} // Adjust the desired width
        height={40}
        className='rounded-xl m-2' // Adjust the desired height
      />
    
    </div>
    </div>
    </div>
  );
};

export default Navbar;