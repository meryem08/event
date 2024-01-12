// import MyForm from "@/components/eventManager/createEvent"
// import React, { useState, useEffect } from "react"
// import Link from "next/link"

// function CreateNewEvent() {
//   const [eventManager, setEventManager] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchEventManager = async () => {
//       const token = "4|OTqutePv5Qgfh5bBRMyKaJGMnO7HZJ8kI4huoDNiee3a94bc"
//       try {
//         const res = await fetch(`http://127.0.0.1:8000/api/eventsManagersall`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         })

//         if (!res.ok) {
//           throw new Error("Réponse de l'API non valide")
//         }

//         const json = await res.json()
//         setEventManager(json)
//         console.log(json)
//       } catch (error) {
//         setError(error.message)
//         console.error("Une erreur s'est produite :", error)
//       }
//     }

//     // Appeler la fonction pour récupérer le statut d'approbation
//     fetchEventManager()
//   }, [])

//   return (
//     <div>
//       <Link href="/eventManager/dashboard">
//         <button
//           className="border-stone-400 rounded-3xl bg-gradient-to-tr from-pink-300 via-sky-300 via-40% to-purple-300 p-3 mt-2 ml-2"
//           title="Vous devez être approuvé pour pouvoir créer votre événement"
//         >
//           Retour au dashboard
//         </button>
//       </Link>

//       {eventManager && (
//         <div key={eventManager.id}>
//           {/* Utilisation de l'objet 'eventManager' pour vérifier le statut d'approbation */}
//           {eventManager.approved ? (
//             <>
//               <p className="text-center text-black text-xl pt-6">
//                 Félicitations ! Vous êtes approuvé pour créer votre page d
//                 événement.
//               </p>
//               <MyForm key={eventManager.id} />
//             </>
//           ) : (
//             <>
//               <p className="text-center text-black text-xl pt-6">
//                 Vous devez être approuvé par l administrateur pour créer votre
//                 page d événement.
//               </p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default CreateNewEvent

// import MyForm from "@/components/eventManager/createEvent"
// import React, { useState, useEffect } from "react"
// import Link from "next/link"
// import { v4 as uuidv4 } from "uuid"

// function CreateNewEvent() {
//   const [eventManager, setEventManager] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     // Vérifiez si le token est déjà stocké dans le local storage
//     const storedToken = localStorage.getItem("userToken")

//     // Si le token n'est pas présent, générez un nouveau token et stockez-le
//     if (!storedToken) {
//       const newToken = generateToken() // Fonction pour générer un nouveau token
//       localStorage.setItem("userToken", newToken)
//       fetchEventManager(newToken)
//     } else {
//       // Si le token est déjà présent, utilisez-le pour récupérer les données de l'utilisateur
//       fetchEventManager(storedToken)
//     }
//   }, [])

//   const fetchEventManager = async (token) => {
//     try {
//       const res = await fetch(`http://127.0.0.1:8000/api/showUser`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       })

//       if (!res.ok) {
//         throw new Error("Réponse de l'API non valide")
//       }

//       const json = await res.json()
//       setEventManager(json)
//       console.log(json)
//     } catch (error) {
//       setError(error.message)
//       console.error("Une erreur s'est produite :", error)
//     }
//   }

//   const generateToken = () => {
//     const newToken = uuidv4()
//     return newToken
//   }

//   return (
//     <div>
//       <Link href="/eventManager/dashboard">
//         <button
//           className="border-stone-400 rounded-3xl bg-gradient-to-tr from-pink-300 via-sky-300 via-40% to-purple-300 p-3 mt-2 ml-2"
//           title="Vous devez être approuvé pour pouvoir créer votre événement"
//         >
//           Retour au dashboard
//         </button>
//       </Link>

//       {eventManager && (
//         <div key={eventManager.id}>
//           {/* Utilisation de l'objet 'eventManager' pour vérifier le statut d'approbation */}
//           {eventManager.approved ? (
//             <>
//               <p className="text-center text-black text-xl pt-6">
//                 Félicitations ! Vous êtes approuvé pour créer votre page d
//                 événement.
//               </p>
//               <MyForm key={eventManager.id} />
//             </>
//           ) : (
//             <>
//               <p className="text-center text-black text-xl pt-6">
//                 Vous devez être approuvé par l administrateur pour créer votre
//                 page d événement.
//               </p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default CreateNewEvent

import { useState, useEffect } from "react"
import Link from "next/link"
import MyForm from "@/components/eventManager/createEvent"

function CreateNewEvent() {
  const [eventManagers, setEventManagers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEventManagers = async () => {
      const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/allManager`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        if (!res.ok) {
          throw new Error("Réponse de l'API non valide")
        }

        const json = await res.json()
        setEventManagers(json)
        console.log(json)
      } catch (error) {
        setError(error.message)
        console.error("Une erreur s'est produite :", error)
      }
    }

    // Appeler la fonction pour récupérer le statut d'approbation
    fetchEventManagers()
  }, [])

  return (
    <div>
      <Link href="/eventManager/dashboard">
        <button
          className="border-stone-400 rounded-3xl bg-gradient-to-tr from-pink-300 via-sky-300 via-40% to-purple-300 p-3 mt-2 ml-2"
          title="Vous devez être approuvé pour pouvoir créer votre événement"
        >
          Retour au dashboard
        </button>
      </Link>

      {eventManagers.map((manager) => (
        <div key={manager.id}>
          {/* Utilisation de l'objet 'manager' pour vérifier le statut d'approbation */}
          {manager.approved ? (
            <>
              <p className="text-center text-black text-xl pt-6">
                Félicitations ! Vous êtes approuvé pour créer votre page d
                événement.
              </p>
              <MyForm key={manager.id} />
            </>
          ) : (
            <>
              <p className="text-center text-black text-xl pt-6">
                Vous devez être approuvé par l administrateur pour créer votre
                page d événement.
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default CreateNewEvent
