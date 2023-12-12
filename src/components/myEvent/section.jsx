import React from 'react'
import Image from 'next/image'
import { useState , useEffect } from 'react'
function section() {
    const fetchEvents = async () => {
        const token = "3|3eCy9WR53QvH7awnoEpB4fOoyo96bdi5GIm0VMOqa590ddd6"
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/ShowEvent/6`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          // console.log(res)
          if (!res.ok) {
            throw new Error("Réponse de l'API non valide")
          }
          const json = await res.json()
          console.log(json)
    
          setEvents(json)
        } catch (error) {
          console.error("Une erreur s'est produite :", error)
        }
      }
    
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [events, setEvents] = useState([])
    
    
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        
        fetchEvents()
      }, [])
    
  return (
    <div className=''>
        {/* {events.map(event => (
            <div key={event.id}> */}

           
        <div className='text-center font-bold text-4xl p-5 m-5'>
            {events.eventTitle}
            Educteck – Salon de l&apos;education et 
            des technologies de la connaissance
        </div>
        <div className='flex justify-center'>
            <Image src={'/pic2.jpg'} width={120} height={150} className='w-[90%]  rounded-lg' />
        </div>
        <div className='flex justify-around m-10 text-xs font-medium'>
            <div className='bg-gray-300 p-1 rounded-md'>#{events.tags}</div>
            <div className='bg-gray-300 p-1 rounded-md'>#Formations</div>
            <div className='bg-gray-300 p-1 rounded-md'>#Tech</div>
        </div>
        <div className='text-center  text-xl p-5 m-5'>
            {events.desciption}
        {/* EDUCTECK - Salon de l'education et des
        technologies de la connaissance
        Quam quo saepe fugit accusantium  */}
      
        </div>
        <div className='flex justify-around '>
        <div className='w-48 m-2 h-24 p-3 rounded-md text-sm  font-bold bg-purple-200'>
                Contact
                <ul className='font-semibold m-2'>
                    <li>056898790</li>
                    <li>event@gmail.com</li>
                </ul>
            </div>
            <div className='w-48 m-2 h-24 p-3 rounded-md text-sm  font-bold bg-purple-200'>timing
            <ul className='font-semibold m-2'>
                    <li>{events.startingDate}</li>
                    <li>{events.endingDate}</li>
                </ul>
            </div>
            <div className='w-48 m-2 h-24 p-3 rounded-md text-sm  font-bold bg-purple-200'>Created by
            <ul className='font-semibold m-2'>
                    <li></li>
                    <li>{events.orgsnization}</li>
                </ul>
            </div>
        </div>
         </div>
        // ))}
    // </div>
  )
}

export default section