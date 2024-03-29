
import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import Link from 'next/link';
import { data } from 'autoprefixer';
import { useParams } from "next/navigation";
import {useEffect } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';


function RegisterExhibitor() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState({});


  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [profile_photo, setprofile_photo] = useState('')


  const handleFileChange = (e) => {
    setprofile_photo(e.target.files[0]);
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('birthday', birthday);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('organization', organization);
      formData.append('password', password);
      formData.append('profile_photo', profile_photo);
      formData.append('password_confirmation', password_confirmation);

      const response = await fetch(`http://127.0.0.1:8000/api/event/${id}/register`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: formData,
   
      });

      if (response.ok) {
        const result = await response.json();
        const token = result.token;
        localStorage.setItem('token', token);

        // Successful registration: redirect the user
        router.push('/exhibitor/profile'); // Redirect to the dashboard page
      } else {
        // Registration failed: display the error message
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('An error occurred during the registration request.', error);
    }
  };

  return (
    <>
    <div>
      <Image
            alt='waiting..'
            src={"/bg.jpg"}
            width={350}
            height={150}
            className="absolute w-screen h-screen "
          />
      <div className=" min-h-screen pt-1 md:pt-2 px-2 md:px-0">

        <main className="bg-opacity-25 backdrop-blur-sm max-w-lg mx-auto p-6 md:p-6 mt-10 rounded-lg shadow-2xl border border-2">
          {/* <section>
            <h3 className="font-bold  text-2xl text-white ml-4">Register !</h3>
          </section> */}

          <section className="m-2">
            <form className="flex flex-col" 
                  onSubmit={handleRegister}
                  encType="multipart/form-data" >
             <div className='flex'>
               <div className="m-2 rounded ">
                <input
                  placeholder='first name'
                  name='first_name'
                  type="text"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </div>

              <div className="m-2 rounded">
                <input
                  placeholder='last name'
                  type="text"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </div>
                    </div>

              <div className="m-2 rounded">
                <input
                  placeholder='birthday'
                  type="date"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
              <div className="m-2 rounded">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='phone'
                  maxLength={10}
                  minLength={10}
                  type="text"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <div className="m-2 rounded">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='organization'
                  type="text"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <input
                  required
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  onChange={handleFileChange}
                  id="profile_photo"
                  name="profile_photo"
                  type="file"
                />
              </div>
              </div>
              

              <div className="m-2 rounded">
                <input
                  placeholder='Email'
                  type="email"
                  id="Email"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex'>
                <div className="m-2 rounded">
                <input
                  placeholder='password'
                  type="password"
                  id="password"
                  className="p-2 bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="m-2 rounded">
                <input
                  placeholder='password_confirmation'
                  type="password"
                  className="p-2 bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 text-white"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                />
              </div>
              </div>

        

              <div className="flex justify-between">
                <Link
                  href="/eventManager/EventManagerForgotPassword"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-3"
                  title='Contact us to receive a new password.'
                >
                  Forgot your password?
                </Link> 
                <a
                href='/exhibitor/login'
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-3"
                  title='Contact us to receive a new password.'
                >
                  Sign up
                </a>
              </div>
              
               
           
              <Button
                className="m-2 bg-gradient-to-r from-purple-300 to-pink-400 hover:bg-gradient-to-l from-purple-400 to-pink-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </section>
        </main>

        {/* <footer className="max-w-lg mx-auto flex justify-center text-white">
          <span className="text-white">© 2023 My event. All Rights Reserved.</span>
        </footer> */}
      </div>
      </div>
    </>
  )
}

export default RegisterExhibitor