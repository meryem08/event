import Layout from '@/components/exhibitor/Layout'
import React from 'react'
import TopCard from '@/components/exhibitor/topCard'
import ProfileCard from '@/components/exhibitor/profileCard'

export default function dashboard() {

  
  return (
    <Layout>
      
      <div className="bg-white-300 flex flex-col  gap-[25px] items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">

        <TopCard/>
        <ProfileCard/>
      </div>
     
    </Layout>
  )
}
