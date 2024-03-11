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
        <h1 className="text-4xl font-bold  text-purple-500">MyEvent</h1>
      </div>

      <div className="flex flex-col rounded-tr-3xl  h-screen bg-purple-300 p-4">
        <Link href="/eventManager/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "eventManager/dashboard"
                ? "bg-white text-black"
                : "text-black hover:bg-white hover:text-purple-950"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/eventManager/account">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/eventManager/account"
              ? "bg-white text-black"
              : "text-black hover:bg-white hover:text-purple-950"
          }`}
          >
            <div className="mr-2">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/eventManager/events">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/eventManager/events"
              ? "bg-white text-black"
              : "text-black hover:bg-white hover:text-purple-950"
          }`}
          >
            <div className="mr-2">
              <BellIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Events</p>
            </div>
          </div>
        </Link>
        <Link href="/eventManager/exhibitors">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/eventManager/exhibitors"
              ? "bg-white text-black"
              : "text-black hover:bg-white hover:text-purple-950"
          }`}
          >
            <div className="mr-2">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Exhibitors</p>
            </div>
          </div>
        </Link>
        <Link href="/eventManager/requests">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/eventManager/requests"
              ? "bg-white text-black"
              : "text-black hover:bg-white hover:text-purple-950"
          }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Requests</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
})

SideBar.displayName = "SideBar"

export default SideBar
