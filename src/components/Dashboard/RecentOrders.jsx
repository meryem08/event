import React, { useState, useEffect } from "react"
import { data } from "../../data/data.js"
import { FaShoppingBag } from "react-icons/fa"
import PopoverRequest from "../PopoverRequest.jsx"

const RecentOrders = () => {
  const [popoverVisible, setPopoverVisible] = useState(false)
  const [requests, setRequests] = useState([])
  const handlePopover = () => {
    setPopoverVisible(!popoverVisible)
  }
  useEffect(() => {
    const fetchRequests = async () => {
      const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/nonApprovedEventsManager`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )

        if (!res.ok) {
          throw new Error("Réponse de l'API non valide")
        }

        const json = await res.json()
        setRequests(json)
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
      }
    }

    fetchRequests()
    // fetchEvents();
  }, [])
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Requests</h1>
      <ul>
        {requests.map((request) => (
          <li
            key={request.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-600 font-bold">{request.first_name}</p>
              <p className="text-gray-600 font-bold">{request.last_name}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              <PopoverRequest
                visible={popoverVisible}
                onToggle={handlePopover}
                content={<div>Contenu du Popover</div>}
              >
                <button onClick={handlePopover}>Voir</button>
              </PopoverRequest>
              {/* <div
                data-popover
                id={`popover-${request.id}`}
                role="tooltip"
                class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Popover title
                  </h3>
                </div>
                <div class="px-3 py-2">
                  <p className="text-gray-600 font-bold">
                    {request.first_name}
                  </p>
                  <p className="text-gray-600 font-bold">{request.last_name}</p>
                </div>
                <div data-popper-arrow></div>
              </div> */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders
