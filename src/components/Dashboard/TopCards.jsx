import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

const TopCards = () => {
  const fetchManagers = async () => {
    
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/approvedEventManagersCount`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      setManagers(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/EventCount`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
  const fetchRequests = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/managerRequestCount', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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

      setRequests(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const [managers, setManagers] = useState("")
  const [events, setEvents] = useState("")
  const [requests, setRequests] = useState("")
  //console.log(managers)
  useEffect(() => {
    fetchManagers()
    fetchEvents()
    fetchRequests()
  }, [])

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <Link href="/eventsManagers">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">{managers}</p>
            <p className="text-gray-600">Events Managers</p>
          </div>
        </Link>
        <p className="bg-purple-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg"></span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <Link href="/events">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">{events}</p>
            <p className="text-gray-600">Events</p>
          </div>
        </Link>
        <p className="bg-purple-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg"></span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <Link href="/requests">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">{requests}</p>
            <p className="text-gray-600">Requests</p>
          </div>
        </Link>
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
