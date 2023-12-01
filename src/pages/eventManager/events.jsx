import Sidebar from "@/components/sideBar"
import { Button } from "@/components/ui/button"
import { data } from "autoprefixer"
import React, { useState, useEffect } from "react"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Link from "next/link"
// Importez la data.js si nécessaire
// import { data } from "../data/data.js";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("")
 

  const fetchEvents = async () => {
    const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/approvedEvents`, {
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

  const [events, setEvents] = useState([])


  useEffect(() => {
    
    fetchEvents()
  }, [])

  // const handleDelete = (id) => {
  //   const updatedEvents = events.filter(
  //     (events) => events.id !== id,
  //   )
  //   setEvents(updatedEvents)
  //   alert("L'élément a été supprimé !")
  // }

  // const confirmDelete = (id) => {
  //   const confirmation = window.confirm(
  //     "Êtes-vous sûr de vouloir supprimer cet élément ?",
  //   )
  //   if (confirmation) {
  //     handleDelete(id)
  //   } else {
  //     alert("Suppression annulée.")
  //   }
  // }

  // // Fonction pour filtrer les EventManagers en fonction de la recherche


  

  return (
    <div className="relative">
      <Sidebar className='absolute'/>
{/* //   Events:
//   {events.map(event => (
//     <div key={event}>
//       {event.eventTitle}
//     </div>
//   ))}
// </div> */}

      <div className="p-4 pl-60 absolute top-5 w-full">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

          <div className=" p-2 grid grid-cols-5 items-center justify-between cursor-pointer">
            <span>Identifiant</span>
            <span className="hidden md:grid">Event Title</span>
            <span className="hidden md:grid">Sector</span>
            <span className="hidden md:grid">Nombre exposants</span>
            <span className="hidden sm:grid"></span>
          </div>

          <ul>
          {events.map(event => (
              <li 
                key={event.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                 
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  {event.eventTitle}
                </p>

                <p className="hidden md:flex">
                  {event.sector}
                </p>
                <p className="pl-4">
                  n
                </p>
                <p className="pl-4">
                  b
                </p>
                <div className="sm:flex hidden justify-between items-center">
              </div>
              </li>
            ))}
          </ul>
          
        </div>
        
        <Link href='/createNewEvent'>
            <Button className='m-6'>
               Create Event
            </Button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Events