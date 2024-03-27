import Link from 'next/link'
import React from 'react'
import { RegisterForm } from '@/components/eventManager/form'
import Image from 'next/image'
// import { useState } from 'react'

export default function RegisterPage() {

  return( 
    <div className='md:flex md:justify-center md:items-center bg-slate-100 '>
      <div className="md:flex md:justify-center md:items-center shadow-xl px-8 pt-1 w-[70%] bg-white ">
      <Image
              src="/Sign up-bro.png"
              alt="welcom"
              width={450}
              height={300}
              
            />
      <div className="px-8 pb-8 pt-8 sm:bg-white rounded-xl space-y-6">
        <h1 className="font-semibold text-2xl">Create your Account</h1>
        
        <RegisterForm />
        <p className="text-center">
          Have an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/login">
            Sign in
          </Link>{' '}
        </p>
      </div>
    </div>
    </div>
    
  )
}