import Header from "@/components/Dashboard/Header"
import React from "react"
import Head from "next/head";
import TopCards from "../components/Dashboard/TopCards";
import BarChart from "../components/Dashboard/BarChart";
import RecentOrders from "../components/Dashboard/RecentOrders";
import Sidebar from "@/components/Dashboard/Sidebar";
import TopBar from "@/components/Dashboard/TopBar";
import Layout from "@/components/Dashboard/Layout";
import EventsManagerTable from "@/components/Dashboard/EventManagerTable";


function dashboard() {
  return (
    <>
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white min-h-screen">
     
     <Layout>
      <TopCards/>
      {/* <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4"> */}
          {/* <EventsManagerTable/> */}
          
          <div className="flex justify-rounded">
          <BarChart/>
          
          <RecentOrders/>
        </div>
        {/* </div> */}
     </Layout>
        
        {/* <div className="flex-grow">
        <Header/>
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
        </div> */}
        
      </main>
    </>
  )
}

export default dashboard
