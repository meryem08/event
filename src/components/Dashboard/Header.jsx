import React from "react"
import { CgProfile } from "react-icons/cg"

const Header = () => {
  return (
    <div className="flex justify-between px-4 p-4 bg-blue-600">
      <h2 className="text-white font-bold pt-2">Dashboard</h2>
      <div className="flex">
        <p className="pt-2 pr-3 text-white">
          <CgProfile size={20} />
        </p>
        <h2 className="text-white font-bold pr-3 pt-2" > Welcome Back, Admin</h2>
        <button className="bg-green-300 p-2 rounded text-dark hover:bg-green-400 focus:outline-none">
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
