import Sidebar from "@/components/eventManager/sideBar"
import { Button } from "@/components/ui/button"
import { data } from "autoprefixer"
import React, { useState, useEffect } from "react"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import EventInfo from "../eventInfo"


const Events = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [deleting , setDeleting] = useState('')
 

  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/events`, {
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/event/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // If the deletion was successful, refetch the events
        fetchEvents()
        console.log('Event deleted successfully!');
      } else {
        // Handle deletion failure
        const errorMessage = await response.text();
        console.error('Error deleting event:', errorMessage);
      }
    } catch (error) {
      console.error('An error occurred during the request.', error);
    }
  };

  const confirmDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this event ?"
    );

    if (confirmation) {
      handleDelete(id);
    } else {
      alert("ignore the deleting");
    }
  };

  return (
    <div className="relative">
      <Sidebar className='absolute'/>

      <div className="p-4 pl-60 absolute top-5 w-full">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

          <div className=" p-2 grid grid-cols-5 items-center justify-around cursor-pointer">
            <span>Identifiant</span>
            <span className="hidden md:grid">Event Title</span>
            <span className="hidden md:grid ">Sector</span>
            <span className="hidden md:grid"></span>
            <span className="hidden sm:grid"></span>
            <span className="hidden sm:grid"></span>
          </div>

          <ul>
          {events?.map(event => (
            
              <Link
                href={`/eventManager/events/${event.id}`}
                key={event.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"
              >
                
                <div className="flex items-center">

                  <div className="bg-purple-100 p-3 rounded-lg">
                    {/* <BsPersonFill className="text-purple-800" /> */}
                     {event.id}
                  </div>
                 
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  {event.eventTitle}
                </p>

                <p className="hidden md:flex">
                  {event.sector}
                </p>
                {/* <p className="pl-4">
                  
                </p>
                 */}
                <div className="flex ">
                  <div className="pl-4">
                    <Button onClick={() => confirmDelete(event.id)}>Delete</Button>
                  </div>

                  {/* <div className="pl-4">
                    <Button onClick={() => handleShow(event.id)}>Show</Button>
                  </div> */}

                  <div className="pl-4">
                    <Button onClick={() => confirmDelete(event.id)}>edit</Button>
                  </div>
                {/* <p className="pl-4">
                <Popover>
                    <PopoverTrigger>
                      <Button>view</Button> 
                    </PopoverTrigger>
                    <PopoverContent>
                      <EventInfo/>
                    </PopoverContent>
                </Popover>
                </p> */}
                </div>
{/*                 
                <div className="sm:flex hidden justify-between items-center">
              </div> */}
              </Link>
            ))}
          </ul>
          
        </div>
        
        <Link href='/eventManager/createNewEvent'>
            <Button className='m-6'>
               Create Event
            </Button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Events