// import React, { useState, useEffect } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faBirthdayCake,
//   faUser,
//   faIdCard,
//   faPhone,
//   faEnvelope,
//   faBuilding,
// } from "@fortawesome/free-solid-svg-icons"
// // import { Popover } from "@headlessui/react"

// function PopoverRequest({ visible, onClose, id }) {

//   const [requests, setRequest] = useState([])
//   const handleOnClose = (e) => {
//     if (e.target.id === "container") onClose()
//   }

//   useEffect(() => {
//     const fetchRequests = async (id) => {
//       try {
//         const res = await fetch(
//          `http://127.0.0.1:8000/api/showUser/${id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           },
//         )

//         if (!res.ok) {
//           throw new Error("Réponse de l'API non valide")
//         }

//         const json = await res.json()
//         setRequest(json)
//       } catch (error) {
//         console.error("Une erreur s'est produite :", error)
//       }
//     }

//     fetchRequests()
//   }, [id])

//   if (!visible) return null

//   return (
//     <>
//       <div
//         id="container"
//         onClick={handleOnClose}
//         className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
//       >
//         <div className="bg-white p-10 rounded-3xl w-72 ">
//           <h1 className="font-bold text-center lg bg-purple-100 mb-5">
//             Request Details
//           </h1>
//           <ul>
//             {requests?.map((request) => (
//               <li key={request?.id}>
//                 <p className="mt-3">
//                   <FontAwesomeIcon
//                     icon={faIdCard}
//                     style={{ color: "#EE82EE" }}
//                   />{" "}
//                   <span className="font-bold ml-2">Identifiant</span> :
//                   {request?.id}
//                 </p>
//                 <p className="mt-3 ">
//                   <FontAwesomeIcon icon={faUser} style={{ color: "#EE82EE" }} />
//                   {"    "}
//                   <span className="font-bold ml-2">Name</span> :
//                   {request.first_name + " " + request.last_name}
//                 </p>
//                 <p className="mt-3">
//                   <FontAwesomeIcon
//                     icon={faEnvelope}
//                     style={{ color: "#EE82EE" }}
//                   />{" "}
//                   <span className="font-bold ml-2">Email</span> :{" "}
//                   {request.email}
//                 </p>
//                 <p className="mt-3">
//                   {" "}
//                   <FontAwesomeIcon
//                     icon={faBirthdayCake}
//                     style={{ color: "#EE82EE" }}
//                   />{" "}
//                   <span className="font-bold ml-2">Birthday</span> :{" "}
//                   {request.birthday}
//                 </p>
//                 <p className="mt-3">
//                   <FontAwesomeIcon
//                     icon={faPhone}
//                     style={{ color: "#EE82EE" }}
//                   />{" "}
//                   {/* Icône Phone */}{" "}
//                   <span className="font-bold ml-2">Phone</span> :{" "}
//                   {request.phone}
//                 </p>
//                 <p className="mt-3">
//                   <FontAwesomeIcon
//                     icon={faBuilding}
//                     style={{ color: "#EE82EE" }}
//                   />{" "}
//                   <span className="font-bold ml-2">Organization</span> :{" "}
//                   {request.organization}
//                 </p>
//               </li>
//             ))}  
//              </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default PopoverRequest

import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBirthdayCake,
  faUser,
  faIdCard,
  faPhone,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"
// import { Popover } from "@headlessui/react"

function PopoverRequest({ visible, onClose }) {
  const [requests, setRequests] = useState([])
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose()
  }

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
  }, [])

  if (!visible) return null

  return (
    <>
      {/* <Popover className="relative">
        <Popover.Button className="bg-green-300 text-white px-4 py-1 rounded hover:bg-green-400 mb-2">
          Voir
        </Popover.Button>
        <Popover.Panel className="absolute z-10 bg-green-100 p-5 shadow-md mr-50">
          <div className="">
            <ul>
              {requests.map((request) => (
                <li key={request.id}>
                  <p>{request.first_name + " " + request.last_name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Popover.Panel>
      </Popover> */}

      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="bg-white p-10 rounded-3xl w-72 ">
          <h1 className="font-bold text-center lg bg-purple-100 mb-5">
            Request Details
          </h1>
          <ul>
            {requests.map((request) => (
              <li key={request.id}>
                <p className="mt-3">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    style={{ color: "#EE82EE" }}
                  />{" "}
                  <span className="font-bold ml-2">Identifiant</span> :{" "}
                  {request.id}
                </p>
                <p className="mt-3 ">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#EE82EE" }} />
                  {"    "}
                  <span className="font-bold ml-2">Name</span> :{" "}
                  {request.first_name} {request.last_name}
                </p>
                <p className="mt-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#EE82EE" }}
                  />{" "}
                  <span className="font-bold ml-2">Email</span> :{" "}
                  {request.email}
                </p>
                <p className="mt-3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    style={{ color: "#EE82EE" }}
                  />{" "}
                  <span className="font-bold ml-2">Birthday</span> :{" "}
                  {request.birthday}
                </p>
                <p className="mt-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#EE82EE" }}
                  />{" "}
                  {/* Icône Phone */}{" "}
                  <span className="font-bold ml-2">Phone</span> :{" "}
                  {request.phone}
                </p>
                <p className="mt-3">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: "#EE82EE" }}
                  />{" "}
                  <span className="font-bold ml-2">Organization</span> :{" "}
                  {request.organization}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PopoverRequest