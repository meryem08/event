import React, { useState, useEffect } from "react"
import { FaShoppingBag } from "react-icons/fa"

import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import Layout from "@/components/Dashboard/Layout.jsx"
import EventsManagers from "./eventsManagers"

const Requests = () => {
  const [eventManagers, setEventManagers] = useState([])
  // const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchEventManagers = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/requestEventManagers`,
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
        console.log(json)
        setEventManagers(json)
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
      }
    }

    fetchEventManagers()
    // fetchEvents();
  }, []) // Run the effect once on component mount

  const handleApprove = async (id) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/approveEventManager/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )

      if (!res.ok) {
        throw new Error("Réponse de l'API pour l'approbation non valide")
      }

      // Rafraîchissez la liste des événements après l'approbation
      fetchEventManagers()
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'approbation de l'événement :",
        error,
      )
    }
  }

  const handleReject = async (id) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/rejectEventManager/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )

      if (!res.ok) {
        throw new Error("Réponse de l'API pour le rejet non valide")
      }

      // Rafraîchissez la liste des événements après le rejet
      fetchEventManagers()
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du rejet de l'événement :",
        error,
      )
    }
  }

  return (
    // <Layout>
    //   <div className="p-4">
    //     <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto max-w-full overflow-x-auto">
    //       {/* Ajoutez un champ de recherche */}
    //       <input
    //         type="text"
    //         placeholder="Rechercher par nom..."
    //         className="w-full p-2 border rounded-md mb-4"
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //       />

    //       <div className="grid grid-cols-7 items-center justify-between cursor-pointer">
    //         <span className="col-span-1">Identifiant</span>
    //         <span className="col-span-1">Name</span>
    //         <span className="hidden md:grid col-span-1">Email</span>
    //         <span className="col-span-1">Birthday</span>
    //         <span className="hidden md:grid col-span-1">Phone</span>
    //         <span className="hidden md:grid col-span-1">Organisation</span>
    //         <span className="hidden sm:grid col-span-1">Action</span>
    //       </div>

    //       <ul>
    //         {eventManagers.map((eventsManager) => (
    //           <li
    //             key={eventsManager.id}
    //             className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-8 items-center justify-between"
    //           >
    //             <p className="col-span-1">{eventsManager.id}</p>
    //             <p className="col-span-1">
    //               {eventsManager.first_name + " " + eventsManager.last_name}
    //             </p>
    //             <p className="hidden md:flex col-span-1">
    //               {eventsManager.email}
    //             </p>
    //             <p className="col-span-1">{eventsManager.birthday}</p>
    //             <p className="hidden md:flex col-span-1">
    //               {eventsManager.phone}
    //             </p>
    //             <p className="hidden md:flex col-span-1">{eventsManager.organization}</p>
             

    //             <div className="hidden sm:flex justify-between items-center col-span-1 pr-30 text-lright">
    //               <button
    //                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-24 m-3"
    //                 onClick={() => handleApprove(eventsManager.id)}
    //               >
    //                 Approve
    //               </button>
    //               <button
    //                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-24"
    //                 onClick={() => handleReject(eventsManager.id)}
    //               >
    //                 Reject
    //               </button>
    //             </div>


               


    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </Layout>
    <Layout>
      <div className="p-4 border rounded-lg bg-white mt-4">
        <div>
          {/* Ajoutez un champ de recherche */}
          <input
            type="text"
            placeholder="Rechercher par nom..."
            className="w-full p-2 border rounded-md mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="grid grid-cols-9 items-center justify-between cursor-pointer">
            <span className="col-span-1">Identifiant</span>
            <span className="col-span-1">Name</span>
            <span className="hidden md:grid col-span-1">Email</span>
            <span className="col-span-1">Birthday</span>
            <span className="hidden md:grid col-span-1">Phone</span>
            <span className="hidden md:grid col-span-1">Organisation</span>
            <span className="hidden md:grid col-span-1">Status</span>
            <span className="hidden sm:grid col-span-1"></span>
          </div>

          <ul>
            {eventManagers.map((eventsManager) => (
              <li
                key={eventsManager.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 grid grid-cols-9 items-center justify-between"
              >
                  <div className="flex items-center col-span-1 pl-2">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">
                   
                      {eventsManager.id}
                    
                  </p>
                </div>
                <p className="col-span-1">
                  {eventsManager.first_name + " " + eventsManager.last_name}
                </p>
                <p className="hidden md:flex col-span-1">
                  {eventsManager.email}
                </p>
                <p className="col-span-1">{eventsManager.birthday}</p>
                <p className="hidden md:flex col-span-1">
                  {eventsManager.phone}
                </p>
                <p className="hidden md:flex col-span-1">
                  {eventsManager.organization}
                </p>
                <p className="hidden md:flex col-span-1">
                  <span
                    className={
                      eventsManager.approved === "0"
                        ? "bg-yellow-100 p-2 rounded-lg"
                        : "bg-yellow-100 p-2 rounded-lg"
                    }
                  >
                    Pending
                  </span>
                </p>

                <div className="hidden sm:flex justify-between items-center col-span-1 pr-30 ">
                  <button
                    className="bg-green-300 text-white px-4 py-2 rounded hover:bg-green-400 w-24 m-3"
                    onClick={() => handleApprove(eventsManager.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-400 w-24"
                    onClick={() => handleReject(eventsManager.id)}
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Requests
