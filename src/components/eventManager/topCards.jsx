import React from 'react'
import { useEffect, useState } from 'react'
// import { fetchWithAuth } from '../pages/api/api'

const TopCards = () => {
  const fetchExposants = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/numberOfExhibitors`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setExposants(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }; 

  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/EventCountOfTheCurrentUser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setEvents(json)
   


  //   const expo = await fetch(`http://127.0.0.1:8000/api/approvedExibitorsCount`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     },
  //   });

  //   if (!expo.ok) {
  //     throw new Error('Réponse de l\'API non valide pour la table liée');
  //   }


  //   const exposantCount = await expo.json();
  //   setExposants(exposantCount);
    
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
    // Handle the error, for example, setEvent({}) and setRelatedData({}) or display an error message
  }
  } 
  const fetchRequests = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/requestCount`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setRequests(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }

  const [exposants, setExposants] = useState(0)
  const [events, setEvents] = useState(0)
  const [requests, setRequests] = useState(0)
  // console.log(requests , 'hi');
  //console.log(managers)
  useEffect(() => {
    fetchExposants()
    fetchEvents()
    fetchRequests()
  }, [])

  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-pink-100 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{events}</p>
                <p className='text-gray-600'>Events</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p> */}
        </div>
        <div className='lg:col-span-2 col-span-1 bg-purple-100 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>
                {/* <ul>
                  {exposants?.map((exposant, index) => (
                    <li key={index}>{exposant}</li>
                  ))}
                </ul> */}
                {exposants}
                </p>
                <p className='text-gray-600'>Exhibitors</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p> */}
        </div>
        <div className='bg-blue-100 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{requests?.count}</p>
                <p className='text-gray-600'>Requests</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p> */}
        </div>
    </div>
  );
  }

export default TopCards