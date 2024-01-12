// import React, { useState, useEffect } from "react"
// import { Popover } from "@headlessui/react"

// function popoverRequest() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [requests, setRequests] = useState([])

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     const fetchRequests = async () => {
//       const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
//       try {
//         const res = await fetch(
//           `http://127.0.0.1:8000/api/nonApprovedEventsManager`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           },
//         )

//         if (!res.ok) {
//           throw new Error("Réponse de l'API non valide")
//         }

//         const json = await res.json()
//         setRequests(json)
//       } catch (error) {
//         console.error("Une erreur s'est produite :", error)
//       }
//     }

//     fetchRequests()
//     // fetchEvents();
//   }, [])
//   return (
//     <>
//       <Popover className="relative">
//         <Popover.Button>Voir</Popover.Button>
//         <Popover.Panel className="absolute z-10">
//           <div className="grid grid-cols-2">
//             <ul>
//               {requests.map((request) => (
//                 <>
//                   <li key={request.id}>{request.first_name}</li>
//                   <li key={request.id}>{request.last_name}</li>
//                 </>
//               ))}
//             </ul>
//           </div>
//         </Popover.Panel>
//       </Popover>
//     </>
//   )
// }

// export default popoverRequest

// function MyPopover() {
//   return (
//     <Popover className="relative">
//       <Popover.Button>Solutions</Popover.Button>

//       <Popover.Panel className="absolute z-10">
//         <div className="grid grid-cols-2">
//           <a href="/analytics">Analytics</a>
//           <a href="/engagement">Engagement</a>
//           <a href="/security">Security</a>
//           <a href="/integrations">Integrations</a>
//         </div>

//       </Popover.Panel>
//     </Popover>
//   )
// }

import React, { useState, useEffect } from "react"
import { Popover } from "@headlessui/react"

function PopoverRequest() {
  const [requests, setRequests] = useState([])

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
  }, [])

  return (
    <>
      <Popover className="relative">
        <Popover.Button className="bg-green-300 text-white px-4 py-2 rounded hover:bg-green-400">
          Voir
        </Popover.Button>
        <Popover.Panel className="absolute z-10 bg-purple-100 p-10 shadow-md">
          <div className="grid grid-cols-6 gap-8">
            <ul>
              {requests.map((request) => (
                <li key={request.id}>
                  <p>
                    { request.first_name + " " + request.last_name}
                  </p>
                
              
              
              </li>
                
              ))}
            </ul>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  )
}

export default PopoverRequest
