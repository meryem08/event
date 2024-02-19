import React, { useState, useEffect } from "react"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import DeleteButton from "@/components/Dashboard/DeleteButton.jsx"
import Link from "next/link"

const EventsManagerTable = () => {
    const [eventManagers, setEventManagers] = useState([])
   
  
    const fetchEventManagers = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/approvedEventManagers`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )
  
        if (!res.ok) {
          throw new Error("Réponse de l'API non valide")
        }
  
        const json = await res.json()
        setEventManagers(json)
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
      }
    }
    
  
    
  
    useEffect(() => {
      fetchEventManagers()
      
    }, [])
  
    const handleDelete = (id) => {
      const updatedEventManagers = eventManagers.filter(
        (eventsManager) => eventsManager.id !== id,
      )
      setEventManagers(updatedEventManagers)
      alert("L'élément a été supprimé !")
    }
  
    const confirmDelete = (id) => {
      const confirmation = window.confirm(
        "Êtes-vous sûr de vouloir supprimer cet élément ?",
      )
      if (confirmation) {
        handleDelete(id)
      } else {
        alert("Suppression annulée.")
      }
    }
  
    // Fonction pour filtrer les EventManagers en fonction de la recherche
    
  
    return (
     
        <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-blue-50">
         
            
           
  
            <div className="grid grid-cols-5 items-center justify-between cursor-pointer">
              <span className="col-span-1">Identifiant</span>
              <span className="col-span-1">Name</span>
              <span className="hidden md:grid col-span-1">Email</span>
            
              <span className="hidden md:grid col-span-1">Organisation</span>
              <span className="hidden sm:grid col-span-1">Delete</span>
            </div>
  
            <ul>
              {eventManagers?.map((eventManager) => (
                <li
                  key={eventManager.id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"
                >
                  <div className="flex items-center col-span-1">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BsPersonFill className="text-purple-800" />
                    </div>
                    <p className="pl-4">
                      <Link href={`/eventsOfUser/${eventManager.id}`}>
                        {eventManager.id}
                      </Link>
                    </p>
                  </div>
                  <p className="col-span-1 text-gray-600">
                    {eventManager.first_name + " " + eventManager.last_name}
                  </p>
                  <p className="hidden md:flex col-span-1">
                    {eventManager.email}
                  </p>
                 
                  
                  <p className="hidden md:flex col-span-1">
                    {eventManager.organization}
                  </p>
                  <div className="hidden sm:flex col-span-1 justify-between items-center">
                    <DeleteButton
                      onClick={() => confirmDelete(eventManager.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
       
    
    )
  }
  
  export default EventsManagerTable