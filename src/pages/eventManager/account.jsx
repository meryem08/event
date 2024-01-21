// import React from "react"
// import InfoCard from "@/components/eventManager/account/InfoCard"
// import Sidebar from "@/components/eventManager/sideBar"
// import TabsCard from "@/components/eventManager/account/InfoCard"
// import { EditForm } from "@/components/eventManager/account/setting"
// import { RegisterForm } from "@/components/eventManager/form"
// import { useState , useEffect } from "react"
// import Layout from "@/components/eventManager/Layout"
// function account() {
//   return ( 
//     <> 
//      <Sidebar/>
//         Edit your informations
//         <EditForm />
      

//     {/* </div> */}
//   </>
//   )
// }

// export default account
import React from "react"
import InfoCard from "@/components/eventManager/account/InfoCard"
import Sidebar from "@/components/eventManager/sideBar"
import TabsCard from "@/components/eventManager/account/InfoCard"
import { EditForm } from "@/components/eventManager/account/setting"
import { RegisterForm } from "@/components/eventManager/form"
import { useState , useEffect } from "react"
function account() {
  return (
    <div className="flex justify-between bg-purple-200 ">
      <Sidebar/>
      <>
      {/* <InfoCard/>  */}
      <div className="absolute left-48 bg-white p-6 m-3 rounded-lg">
         <EditForm />
      </div>
     
      </>
      

    </div>
  )
}

export default account