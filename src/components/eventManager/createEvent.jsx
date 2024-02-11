// import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Packages from "../Dashboard/packages"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popOver"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Sidebar from "./sideBar"

import React, { useState } from "react"

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    country: "",
    tags: "",
    sector: "",
    summary: "",
    description: "",
    startingDate: "",
    endingDate: "",
    photo: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const handleFileChange = (files) => {
      // Gérer le fichier téléchargé
      setFormData({
        ...formData,
        photo: files[0],
      })
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      if (response.ok) {
        const responseData = await response.json()
        console.log("Réponse de l'API:", responseData)
        console.log("Événement créé avec succès !")
      } else {
        console.error("Erreur lors de la création de l'événement")
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Créer un événement</h1>
      <form onSubmit={handleSubmit}>
        {/* Titre de l'événement */}
        <div className="mb-4">
          <label
            htmlFor="eventTitle"
            className="block text-sm font-medium text-gray-600"
          >
            Titre de l événement
          </label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Pays */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-600"
          >
            Pays
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-600"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Secteur */}
        <div className="mb-4">
          <label
            htmlFor="sector"
            className="block text-sm font-medium text-gray-600"
          >
            Secteur
          </label>
          <input
            type="text"
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Résumé */}
        <div className="mb-4">
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-600"
          >
            Résumé
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Date de début */}
        <div className="mb-4">
          <label
            htmlFor="startingDate"
            className="block text-sm font-medium text-gray-600"
          >
            Date de début
          </label>
          <input
            type="date" // Remplace par le type de date que tu veux utiliser
            id="startingDate"
            name="startingDate"
            value={formData.startingDate}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Date de fin */}
        <div className="mb-4">
          <label
            htmlFor="endingDate"
            className="block text-sm font-medium text-gray-600"
          >
            Date de fin
          </label>
          <input
            type="date" // Remplace par le type de date que tu veux utiliser
            id="endingDate"
            name="endingDate"
            value={formData.endingDate}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-600"
          >
            Photo de l événement
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => handleFileChange(e.target.files)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Créer l événement
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateEvent
