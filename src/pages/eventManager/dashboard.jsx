import React from "react"

import BarChart from "@/components/eventManager/barChar"
import RecentOrders from "@/components/eventManager/RecentOrders"

import Sidebar from "@/components/eventManager/sideBar"
import Navbar from "@/components/header/NavBar"
import TopCards from "@/components/eventManager/topCards"
import Layout from "@/components/eventManager/layout"
import Head from "next/head"

export default function Home() {
  return (
    <>
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className=" min-h-screen">
        {/* <div className="grid grid-col justify-between"> */}
          <Layout>
            <TopCards />
              <div className="flex justify-evenly">
                <BarChart />
                <RecentOrders />
              </div>  
          </Layout>
        {/* </div> */}
      </main>
     
    </>
  )
}
