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
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <h1 className="text-4xl font-bold  text-purple-500">MyEvent</h1>
      </div>

      <div className="flex flex-col">
        <Link href="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard"
                ? "bg-purple-100 text-purple-300"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-300"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/eventsManagers">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/eventsManagers"
                ? "bg-purple-100 text-purple-300"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-300"
            }`}
          >
            <div className="mr-2">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Events Managers</p>
            </div>
          </div>
        </Link>
        <Link href="/requests">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/requests"
                ? "bg-purple-100 text-purple-300"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-300"
            }`}
          >
            <div className="mr-2">
              <BellIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Requests</p>
            </div>
          </div>
        </Link>
        <Link href="/events">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/events"
                ? "bg-purple-100 text-purple-300"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-300"
            }`}
          >
            <div className="mr-2">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Events</p>
            </div>
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-purple-100 text-purple-300"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-300"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
})

SideBar.displayName = "SideBar"

export default SideBar
