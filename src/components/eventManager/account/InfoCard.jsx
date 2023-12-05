import React from "react"
import Image from "next/image"
import settings from './setting'
// import settings from "@/components/eventManager/account/setting"
import { Import } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { EditForm } from "./setting"
import { RegisterForm } from "../form"
import { useState, useEffect } from "react"

function InfoCard() {
  const fetchEventManager = async () => {
    const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/ShowEventManager`, {
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

      setEventManager(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const [EventManager, setEventManager] = useState({})
  //console.log(managers)
  useEffect(() => {
    fetchEventManager()
  }, [])
  return (
    <div className=" w-screen h-full p-5 ml-24">
      <div className=" w-[96%] h-56 bg-white  p-4 border-solid border-2 border-gray-100 rounded-md">
        <div className=" flex justify-between ">
          <div className="flex justify-start">
            <Image
              src="/pic1.jpg"
              width={180}
              height={50}
              className="w-28 h-28 rounded-md "
            />
            <div className="m-5">
              <div className="font-bold text-lg">
                {EventManager.first_name}
                {EventManager.last_name}
              </div>
              <div className="font-sans text-sm text-gray-400">a teacher</div>
              <div className="font-sans text-sm text-gray-400">
                Gojo@gmail.com
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-20 h-10 m-7 p-2 border border-solid bg-white rounded-md text-black hover:bg-purple-800 hover:text-white"
              onClick={settings}
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
