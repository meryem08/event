import { useState , useEffect} from 'react'
import React from 'react'
import Section from '@/components/myEvent/section'
import Image from 'next/image';


function MyEvent() {

  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
    const fetchEvent = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/event/show/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }

        const eventData = await response.json();
        setEventData(eventData);
      } catch (error) {
        console.error('An error occurred:', error);
        setError('Failed to fetch event data. Please try again.');
      }
    };
useEffect(()=>{
   fetchEvent();
}
)
    //
  // }, []);
  return (
    <div>
      <div>
        <div className='md:flex'>
          <Image alt='' src="/Images/slider2.jpg" width={250} height={150} className='w-[100%] md:w-[100%] p-2 m-2 rounded-md'/>
          <div>
              <h1 className='text-4xl font-semibold p-2 m-2'>lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
              <p className='p-2 m-2 text-purple-600 font-semibold'>20 july 2024</p>
              <h1 className='font-bold p-2 m-2'>summary {eventData?.country}</h1>
              <p className='w-96 p-2 m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua. Ut enim ad minim veniam</p>

          </div>
        </div>
        <div className='p-2 m-2'>
          <h1 className='font-bold'>Description {eventData?.country}</h1>
          <p className='md:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua. Ut enim ad minim veniam, quis no
             strud exercitation ullamco laboris nisi ut aliquip ex
             ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className='md:flex justify-around '>
          <div className=' m-8 p-4 bg-gradient-to-r from-purple-200 to-purple-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Managed by</h1>
            <ul>
              <li className='font-semibold'>The manager :{eventData?.user_id}</li>
              <li className='font-semibold'> Organization :</li>
            </ul>
          </div>

          <div className=' m-8 p-4 bg-gradient-to-r from-pink-200 to-pink-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Time</h1>
            <ul>
              <li className='font-semibold'>Start in : {eventData?.startingDate}</li>
              <li className='font-semibold'>End in : {eventData?.endingDate}</li>
            </ul>
          </div>

          <div className=' m-8 p-4 bg-gradient-to-r from-blue-200 to-blue-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Contact us:</h1>
            <ul>
              <li className='font-semibold'>Email :</li>
              <li className='font-semibold'>Phone :</li>
            </ul>
          </div>
        </div>
      </div>  
      <div className='p-12 m-2 absolute right-0 font-semibold'>
          Are you an exhibitor ? <a href="/Exhibitor/Register" className='hover:text-purple-600 hover:underline decoration-solid'>Register in this event !</a> 
        </div>       
    </div>
  )
  }

export default MyEvent