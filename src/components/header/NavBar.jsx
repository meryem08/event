"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { Fragment, useEffect , useState} from "react"
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid"
import { AiOutlineLogout } from "react-icons/ai"
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Menu, Transition, Popover } from "@headlessui/react"
import Link from "next/link"



const Navbar = () => {
  const pathname = usePathname();
  const handleLogOut = async (e) => {
    e.preventDefault();
    // console.log(formData);

      const response = await fetch('http://127.0.0.1:8000/api/logoutEventManager', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected content-type
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        // Redirect or handle success as needed
        window.location.href = '/';
      } else {
        console.error('Error submitting form:', response.statusText);
      }
  };

  const fetchNotificationCount = async (e) => {
    try{ 
    const response = await fetch('http://127.0.0.1:8000/api/eventManagerNotifCount', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Corrected content-type
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept :  'application/json',
      },
    });

    if (!response.ok) {
      throw new Error("Réponse de l'API non valide")
    }
    const json = await response.json()
    setNotificationCount(json)
  } catch (error) {
    console.error("Une erreur s'est produite :", error)
  }
};
const fetchNotifications = async (e) => {
  try{ 
  const response = await fetch('http://127.0.0.1:8000/api/eventManagerNotifs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Corrected content-type
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept :  'application/json',
    },
  });

  if (!response.ok) {
    throw new Error("Réponse de l'API non valide")
  }
  const json = await response.json()
  setNotifications(json)
} catch (error) {
  console.error("Une erreur s'est produite :", error)
}
};
const [NotificationCount, setNotificationCount] = useState("")
const [Notifications, setNotifications] = useState([])

useEffect(() => {
  fetchNotificationCount()
  fetchNotifications()
  // console.log('Notifications:', Notifications);


}, [])

  return (
    <div className='flex justify-end w-full'>
   <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <BellIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications {NotificationCount} </p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <ul>
                  {Notifications.map((Notification) => ( 
                <li key = {Notification.id}>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        {Notification.data.first_name} {Notification.data.last_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                      {Notification.data.first_name} {Notification.data.last_name} registerd at {Notification.created_at} 
                      </p>
                    </div>
                  </div>
                </div>
                </li>
                ))}
                </ul>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
             
              <span className="hidden md:block font-medium text-gray-700">
                EventManager
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="/eventManager/account"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Menu.Item>
               
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <AiOutlineLogout className="h-4 w-4 mr-2" />
                    <button onClick={handleLogOut}>
                       Log out
                    </button>
                   
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;