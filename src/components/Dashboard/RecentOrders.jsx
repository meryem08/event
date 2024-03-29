import React, { useEffect, useState } from "react"
import { FaShoppingBag } from "react-icons/fa"
import PopoverRequest from "../PopoverRequest.jsx"
const RecentOrders = () => {
  const [requests, setRequests] = useState([])
  const [showPopoverRequest, setshowPopoverRequest] = useState(false)
  const handleOnClose = () => setshowPopoverRequest(false)

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/api/requestEventManagers",
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
        setRequests(json)
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
      }
    }

    fetchRequests()
  }, []) // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-green-50 overflow-scroll lg:m-2">
      <h1>Recent Requests </h1>

      <ul>
        {requests.map((request, id) => (
          <li
            key={request.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center justify-between cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>

            <div className="pr-20">
              <p className="text-gray-800 font-bold">
                {request.first_name + " " + request.last_name}
              </p>
            </div>
            <button
              onClick={() => setshowPopoverRequest(true)}
              className="bg-green-300 text-white px-4 py-1 rounded hover:bg-green-400 mb-2" 
            >
              Voir
            </button>

            <PopoverRequest
              onClose={handleOnClose}
              visible={showPopoverRequest}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders
