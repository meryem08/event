import React, { useState, useEffect } from "react"
import { data } from "@/data/data"
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Layout from "@/components/Dashboard/Layout.jsx"
import DeleteButton from "@/components/Dashboard/DeleteButton.jsx"
import Link from "next/link"
// Importez la data.js si nécessaire
// import { data } from "../data/data.js";

const EventsManagers = () => {
  const [eventManagers, setEventManagers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

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
  const fetchEvent = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/eventsOfUser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Réponse de l'API pour les événements non valide")
      }

      const eventsData = await res.json()
      // Mettez à jour l'état des événements pour ce gestionnaire d'événements
      setEvents((prevEvents) => ({
        ...prevEvents,
        [managerId]: eventsData,
      }))
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des événements :",
        error,
      )
    }
  }

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEventManagers()
    fetchEvent()
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
  const filteredEventManagers = eventManagers.filter(
    (eventManager) =>
      eventManager.first_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      eventManager.last_name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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

          <div className="grid grid-cols-7 items-center justify-between cursor-pointer">
            <span className="col-span-1">Identifiant</span>
            <span className="col-span-1">Name</span>
            <span className="hidden md:grid col-span-1">Email</span>
            <span className="col-span-1">Birthday</span>
            <span className="hidden md:grid col-span-1">Phone</span>
            <span className="hidden md:grid col-span-1">Organisation</span>
            <span className="hidden sm:grid col-span-1">Delete</span>
          </div>

          <ul>
            {filteredEventManagers.map((eventManager) => (
              <li
                key={eventManager.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-7 items-center justify-between"
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
                <p className="col-span-1">{eventManager.birthday}</p>
                <p className="hidden md:flex col-span-1">
                  {eventManager.phone}
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
      </div>
    </Layout>
  )
}

export default EventsManagers

// import React, { useState, useEffect } from "react"
// import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
// import Layout from "@/components/Dashboard/Layout.jsx"
// import DeleteButton from "@/components/Dashboard/DeleteButton.jsx"

// const EventsManagers = () => {
//   const [eventsManagers, setEventsManagers] = useState([])

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api//eventManagers")
//       if (response.ok) {
//         const data = await response.json()
//         setEventsManagers(data)
//       } else {
//         console.error("Erreur lors de la récupération des données de l'API.")
//       }
//     } catch (error) {
//       console.error("Une erreur s'est produite lors de la demande.", error)
//     }
//   }

//   const handleDelete = (id) => {

//     console.log("Suppression de l'élément avec l'ID : ", id)
//   }

//   return (
//     <Layout>
//       <div className="p-4">
//         <div className="w-full m-auto p-4 beventsManager rounded-lg bg-white overflow-y-auto">
//           <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
//             <span>Identifiant</span>
//             <span className="sm:text-left text-right">Name</span>
//             <span className="hidden md:grid">Email</span>
//             <span className="hidden sm:grid">Delete</span>
//           </div>
//           <ul>
//             {eventsManagers.map((eventsManager) => (
//               <li
//                 key={eventsManager.id}
//                 className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
//               >
//                 <div className="flex items-center">
//                   <div className="bg-purple-100 p-3 rounded-lg">
//                     <BsPersonFill className="text-purple-800" />
//                   </div>
//                   <p className="pl-4">{eventsManager.id}</p>
//                 </div>
//                 <p className="text-gray-600 sm:text-left text-right">
//                   {eventsManager.first_name}
//                 </p>
//                 <p className="hidden md:flex">{eventsManager.email}</p>
//                 <div className="sm:flex hidden justify-between items-center">
//                   <DeleteButton
//                     onClick={() => handleDelete(eventsManager.id)}
//                   />
//                   <BsThreeDotsVertical />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default EventsManagers
