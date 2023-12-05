import React from "react"

import BarChart from "@/components/eventManager/barChar"
import RecentOrders from "@/components/eventManager/RecentOrders"

import Sidebar from "@/components/eventManager/sideBar"
import Navbar from "@/components/header/NavBar"
import TopCards from "@/components/eventManager/topCards"

export default function Home() {
  return (
    <div>
      <main className=" bg-purple-50 min-h-screen w-full flex justify-between">
        <Sidebar />

        <div className="grid grid-col justify-between mr-6">
          <Navbar />
          <TopCards />
          <div className="flex justify-around m-2">
            <BarChart />
            <RecentOrders />
          </div>
        </div>
      </main>
    </div>
  )
}
