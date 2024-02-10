import React, { useState, useEffect } from "react"
import { data } from "@/data/data"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Layout from "@/components/Dashboard/Layout.jsx"
import DeleteButton from "@/components/Dashboard/DeleteButton.jsx"
// Importez la data.js si nécessaire
// import { data } from "../data/data.js";

const Events = () => {
  const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/allevents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }

      const json = await res.json()
      setEvents(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  // const fetchEvent = async (managerId) => {
  //   try {
  //     const res = await fetch(`http://127.0.0.1:8000/api/events/${managerId}`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })

  //     if (!res.ok) {
  //       throw new Error("Réponse de l'API pour les événements non valide")
  //     }

  //     const eventsData = await res.json()
  //     // Mettez à jour l'état des événements pour ce gestionnaire d'événements
  //     setEvents((prevEvents) => ({
  //       ...prevEvents,
  //       [managerId]: eventsData,
  //     }))
  //   } catch (error) {
  //     console.error(
  //       "Une erreur s'est produite lors de la récupération des événements :",
  //       error,
  //     )
  //   }
  // }


  useEffect(() => {
    // fetchEventManagers()
    fetchEvents()
  }, [])

  const handleDelete = (id) => {
    const updatedEvents = events.filter(
      (events) => event.id !== id,
    )
    setEvents(updatedEvents)
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
  // const filteredEvents = events.filter(
  //   (event) =>
  //     event.eventTitle
  //       .toLowerCase()
  //       .includes(searchQuery.toLowerCase()) ||
  //     event.last_name.toLowerCase().includes(searchQuery.toLowerCase()),
  // )

  return (
    <Layout>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          {/* Ajoutez un champ de recherche */}
          <input
            type="text"
            placeholder="Rechercher par nom..."
            className="w-full p-2 border rounded-md mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className=" p-2 grid grid-cols-6 items-center justify-between cursor-pointer">
            <span>Identifiant</span>
            <span className="">Event Title</span>
            <span className="hidden md:grid">Event Manager</span>
            <span className="hidden md:grid">Email</span>
            <span className="hidden md:grid">Sector</span>
            {/* <span className="hidden md:grid">Country </span> */}
            {/* <span className="hidden md:grid">Starting Date</span>
            <span className="hidden md:grid">Ending Date</span> */}
            <span className="hidden sm:grid"></span>
          </div>
          <ul>
            {events.map((event) => (
              <li
                key={event.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-6 items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">{event.id}</p>
                </div>
                <p className="hidden md:flex">{event.event.eventTitle}</p>
                <p className="text-gray-600 sm:text-left text-right">
                  {event?.eventManager?.first_name + " " + event?.eventManager.last_name}
                </p>
                <p className="hidden md:flex">{event?.eventManager?.email + "  "}</p>
                <p className="hidden md:flex pr-15">{event?.event?.sector}</p>
                {/* <p className="hidden md:flex"> {event?.event?.country}</p> */}
                {/* <p className="hidden md:flex"></p> */}
                {/* <p className="hidden md:flex">{event?.event?.endingDate}</p> */}


                <div className="sm:flex hidden justify-between items-center">
                  <DeleteButton
                    onClick={() => confirmDelete(events.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Events