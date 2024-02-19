import React from 'react'
import Layout from '@/components/exhibitor/Layout'
import TopCard from '@/components/exhibitor/topCard'
import EditProfile from '@/components/exhibitor/EditProfile'

function account() {
  return (
    <Layout>
        <div className="bg-white-300 flex flex-col  gap-[25px] items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
 
        <TopCard/>
        {/* <EditProfile/> */}
        </div>
    </Layout>
  )
}

export default account