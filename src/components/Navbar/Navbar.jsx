import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between ">
      <div className="container flex items-center">
        <Link className="logo mr-auto pt-1" href="#">
          <img src="images/logo.png" alt="eventure" className="h-20 pr-3=10" />
        </Link>
        <div className="flex gap-10 font-medium py-4 text-black">
          <Link className="navbar_link relative pt-2" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative pt-2" href="#">
            EVENTS
          </Link>
          <Link className="navbar_link relative pt-2" href="#">
            SERVICES
          </Link>
          <Link className="navbar_link relative pt-2" href="#">
            ABOUT US
          </Link>
          <Link className="navbar_link relative pt-2" href="#">
            CONTACT
          </Link>
          <Link className="" href={"/eventManager/login"}>
            <Button className="bg-pink-400 py-2 hover:bg-blue-300">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
