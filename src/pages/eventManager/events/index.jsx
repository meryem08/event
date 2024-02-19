import Sidebar from "@/components/eventManager/sideBar"
import { Button } from "@/components/ui/button"
import { data } from "autoprefixer"
import React, { useState, useEffect } from "react"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Link from "next/link"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import EventInfo from "../eventInfo"
import Layout from "@/components/eventManager/layout"
import EditEvent from "@/components/myEvent/EditEvent"

import DropdownMenuDemo from "@/components/exhibitor/menu"

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [deleting, setDeleting] = useState("")
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")
  const [showEditEvent, setshowEditEvent] = useState(false)
  const handleOnClose = () => setshowEditEvent(false)

  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/events`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      const response = await fetch(
        `http://127.0.0.1:8000/api/event/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )

      if (response.ok) {
        // If the deletion was successful, refetch the events
        fetchEvents()
        console.log("Event deleted successfully!")
      } else {
        // Handle deletion failure
        const errorMessage = await response.text()
        console.error("Error deleting event:", errorMessage)
      }
    } catch (error) {
      console.error("An error occurred during the request.", error)
    }
  }

  const confirmDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this event ?",
    )

    if (confirmation) {
      handleDelete(id)
    } else {
      alert("ignore the deleting")
    }
  }

  return (
    <Layout>
      <div>
        {/* <Sidebar className='absolute'/> */}

        <div className="p-4 top-7 w-full">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className=" p-2 grid grid-cols-9 items-center justify-around cursor-pointer">
              <span>Identifiant</span>
              <span className="hidden md:grid">Event</span>
              <span className="hidden md:grid ">Sector</span>
              <span className="hidden md:grid ">Summary</span>
              <span className="hidden md:grid">Start in</span>
              <span className="hidden sm:grid">End in</span>
              <span className="hidden sm:grid"></span>
              <span className="hidden sm:grid"></span>
            </div>

            <ul>
              {events?.map((event) => (
                <li
                  key={event.id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-9 items-center justify-between"
                >
                  {/* <div className="p2">                  
                <Button >
                  <Link href={`/eventManager/events/${event.id}`}
                  > 
                    Show
                  </Link>
                </Button>
              </div>              */}

              <p className="hidden md:flex">
              <BsPersonFill/>
              </p> 

               <p className="hidden md:flex">
                  {event.eventTitle}
               </p>

                  <p className="hidden md:flex">{event.sector}</p>
                  <p className="hidden md:flex">{event.summary}</p>

                  <p className="hidden md:flex">{event.startingDate}</p>
                  <p className="hidden md:flex">{event.endingDate}</p>

                  <Button className="w-16">
                    <Link href={`/eventManager/events/${event.id}`}>Show</Link>
                  </Button>
                  {/* <Button
                    onClick={() => setshowEditEvent(true)}
                    className="w-16"
                  >
                    <Link href={`/eventManager/events/${event.id}`}>edit</Link>{" "}
                    edit
                  </Button> */}
                  <EditEvent
                    onClose={handleOnClose}
                    visible={showEditEvent}
                    eventId={event.id}
                  />

                  <Button
                    onClick={() => confirmDelete(event.id)}
                    className="w-16"
                  >
                    Delete
                  </Button>

                  {/* <p className="pl-14 w-2">
                  <BsThreeDotsVertical/>
                </p> */}

                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="w-4">
                        <BsThreeDotsVertical />
                      </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                      >
                        <Link href={`/exhibitor/requests/${event.id}`}>
                          <DropdownMenu.Item
                            className="group text-base m-2 font-semibold text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            disabled
                          >
                            <button>Requests</button>
                          </DropdownMenu.Item>
                        </Link>

          <Link href={`approveExhibitor/${event.id}`}>
          
          <DropdownMenu.Item
            className="group text-base m-2 font-semibold text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            disabled
          >
            <button>
                Exhibitors
            </button>
            
          </DropdownMenu.Item>
          </Link>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>

                </li>  
                // <div className="flex items-center">

                //   <div className="bg-purple-100 p-3 rounded-lg">
                //   </div>

                // </div>

               

               
                
                
                
               
                
                
              
            ))}
          </ul>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Events
