"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState({});

// console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        if (id) {
          const response = await fetch(`http://127.0.0.1:8000/api/event/${id}`);

        if (response.ok) {
          const eventData = await response.json(); // Removed array destructuring
          setEvent(eventData);
        } else {
          console.error("Error fetching data:", response.status);
        }}
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [id] );
console.log(event)

  return (
    <div className="">
      {event && (
        <ul>
          <li>
          <div>
         <div> 
        <div className='md:flex'>
        {/* {event?.event?.photo} */}
          {/* <Image alt="wrong" src={`/images/slider1.jpg`} width={250} height={150} className='w-[100%] md:w-[100%] p-2 m-2 rounded-md'/> */}
          <div className="w-[81%]">
            {event?.event?.summary && (
              <img
              
                src={`http://127.0.0.1:8000/storage/${event?.event?.photo}`}
                alt={event?.event?.photo}
                className="w-full h-[136px] object-cover rounded"
              />
            )}
            </div>
          <div>
              <h1 className='text-4xl font-semibold p-2 m-2'>{event?.event?.eventTitle}</h1>
              <p className='p-2 m-2 text-purple-600 font-semibold'>{event?.event?.startingDate}</p>
              <h1 className='font-bold p-2 m-2'>summary </h1>
              <p className='w-96 p-2 m-2'>
                {event?.event?.summary}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua. Ut enim ad minim veniam */}
             </p>

          </div>
        </div>
        <div className='p-2 m-2'>
          <h1 className='font-bold'>Description </h1>
          <p className='md:w-[70%]'>
            {event?.event?.description}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua. Ut enim ad minim veniam, quis no
             strud exercitation ullamco laboris nisi ut aliquip ex
             ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum */}
             </p>
        </div>
        <div className='md:flex justify-around '>
          <div className=' m-8 p-4 bg-gradient-to-r from-purple-200 to-purple-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Managed by</h1>
            <ul>
              <li className='font-semibold'>
                The manager : {event?.eventManager?.first_name} {event?.eventManager?.last_name}
                </li>
              <li className='font-semibold'> Organization : {event?.eventManager?.organization} </li>
            </ul> 
          </div>

          <div className=' m-8 p-4 bg-gradient-to-r from-pink-200 to-pink-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Time</h1>
            <ul>
              <li className='font-semibold'>Start in : {event?.event?.startingDate} </li>
              <li className='font-semibold'>End in : {event?.event?.endingDate}</li>
            </ul>
          </div>

          <div className=' m-8 p-4 bg-gradient-to-r from-blue-200 to-blue-300 w-72 rounded-3xl shadow-2xl'>
            <h1 className='font-bold pl-4'>Contact us:</h1>
            <ul>
              <li className='font-semibold'>Email : {event?.eventManager?.email}</li> 
              <li className='font-semibold'>Phone : {event?.eventManager?.phone}</li>
            </ul>
          </div>
        </div>
      </div>  
      <div className='p-12 m-2 absolute right-0 font-semibold'>
          Are you an exhibitor ?
          <Link        
                href={`/eventManager/events/${event?.event?.id}/Register`}
                key={event.id} className='hover:text-purple-600 hover:underline decoration-solid'>
            Register in this event!
          </Link>

          {/* <Link href="./${event.id}/Register" className='hover:text-purple-600 hover:underline decoration-solid'>Register in this event !</Link>  */}
        </div>       
    </div>
          </li>
          {/* <li>{event.title}</li>
          <li>{event.location}</li> */}
        </ul>
      )}
    </div>
  );
};

export default Home;
