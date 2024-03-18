import React from 'react';
// import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import { useState , useEffect } from 'react';

  const RecentOrders = () => {
    const [events, setEvents] = useState([]);
  
    const fetchEvents = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!res.ok) {
          throw new Error("Réponse de l'API non valide");
        }
  
        const json = await res.json();
        setEvents(json);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);

  return (
    <div className='w-full relative col-span-1 lg:h-[60vh] h-[50vh] m-1 p-2 border rounded-lg bg-blue-950 overflow-scroll '>
      <h1 className='text-white'>Recent events</h1>
      <ul>
      {events.map((event) => (
          <li
            key={event.id} // Ensure each item has a unique key
            className='border bg-black border-white hover:bg-blue-950 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-400 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-white font-bold'>{event?.eventTitle}</p>
              {/* Add other details as needed */}
            </div>
            <div className='pl-4'>
              <p className='text-white font-bold'>{event?.startingDate}</p>
              {/* Add other details as needed */}
            </div>

            <div className='pl-4'>
              <p className='text-white font-bold'>{event?.sector}</p>
              {/* Add other details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders;