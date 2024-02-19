import React, { useState, useEffect } from "react"

function EditEvent({ visible, onClose, eventId }) {
  const [formData, setFormData] = useState({
    eventTitle: "",
    country: "",
    sector: "",
    photo: "",
    tags: "",
    summary: "",
    description: "",
    startingDate: "",
    endingDate: "",
  })

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("eventId:", eventId)

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/event/update/${eventId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      if (!response.ok) {
        throw new Error("Failed to update event")
      }

      const updatedEvent = await response.json()
      console.log("Event updated:", updatedEvent)
    } catch (error) {
      console.error("Error updating event:", error)
    }
  }

  if (!visible) return null

  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="bg-white p-10 rounded-3xl w-72 ">
          {/* <h1 className="font-bold text-center lg bg-purple-100 mb-5">
            Request Details
          </h1> */}
          <form onSubmit={handleSubmit}>
            <label>
              Event Title:
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
              />
            </label>
            <button
              className="bg-black text-white p-2 rounded-lg"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditEvent
