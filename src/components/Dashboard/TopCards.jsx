import React from "react"
import { useState, useEffect } from "react"

const TopCards = () => {
  const fetchManagers = async () => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/count`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setManagers(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const fetchEvents = async () => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/EventCount`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setEvents(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const fetchNonApprovedEvents = async () => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/nonApprovedEvents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setNonApprovedEvents(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const [managers, setManagers] = useState("")
  const [events, setEvents] = useState("")
  const [nonApprovedEvents, setNonApprovedEvents] = useState("")
  //console.log(managers)
  useEffect(() => {
    fetchManagers()
    fetchEvents()
    fetchNonApprovedEvents()

  }, [])

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{managers}</p>
          <p className="text-gray-600">Events Managers</p>
        </div>
        <p className="bg-purple-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg"></span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{events}</p>
          <p className="text-gray-600">Events</p>
        </div>
        <p className="bg-purple-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg"></span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{nonApprovedEvents}</p>
          <p className="text-gray-600">Requests</p>
        </div>
        <p className="bg-purple-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg"></span>
        </p>
      </div>
    </div>
  )
}

export default TopCards
export async function getServerSideProps(context) {
  const { id } = context.query
  const eventManager = await getProductById(id)
  return {
    props: {
      eventManager,
    },
  }
}
