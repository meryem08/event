import React from "react"
import InfoCard from "@/components/eventManager/account/InfoCard"
import Sidebar from "@/components/eventManager/sideBar"
import TabsCard from "@/components/eventManager/account/InfoCard"
import { EditForm } from "@/components/eventManager/account/setting"
import { RegisterForm } from "@/components/eventManager/form"

function account() {
  return (
    <div className="flex justify-between bg-purple-200 ">
      <Sidebar />
      <div className="h-full w-fit">
        <InfoCard />
        <div className="w-fit absolute right-12 bg-white mt-6  p-4 border-solid border-2 border-gray-100 rounded-md ">
          <h2 className="m-3 p-2 font-bold text-xl">Edit your profil</h2>
          <EditForm />
        </div>
      </div>

      {/* <div>
        
        
      </div> */}
    </div>
  )
}

export default account
