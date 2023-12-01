import React from "react"
import Header from "../components/header/NavBar"
import  TopCards from "../components/topCards"
import BarChart from "../components/barChar";
import RecentOrders from "@/components/RecentOrders";
import NavBar from "../components/header/NavBar";
import Sidebar from "@/components/sideBar";




export default function Home() {
  return (
    <div>
       
      <main className=' bg-purple-50 min-h-screen w-full flex justify-between'>
          
        <Sidebar />
    
        <div className="grid grid-col justify-between mr-6"> 
          < NavBar/>
          < TopCards/>
          <div className="flex justify-around m-2">
            <BarChart />
             <RecentOrders/>
          </div>
          </div>
        
       </main>
    </div>
    )
}
   

