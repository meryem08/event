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
import Layout from "@/components/eventManager/layout"
function account() {
  return (
    <Layout>
    <div className="">
      
      <InfoCard/> 
      {/* <div className=" bg-white p-6 m-3 rounded-lg">
        
      </div> */}
     <EditForm />

    </div>
    </Layout>
  )
}

export default account