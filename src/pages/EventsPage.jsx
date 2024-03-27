import EventCard from "@/components/EventCard"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"

function EventsPage() {
  const settings = {
    fade: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  const slideImages = [
    {
      imgSrc: "concert5.webp",
      id: "1",
    },
    {
      imgSrc: "conference3.webp",
      id: "2",
    },
    {
      imgSrc: "exposition2.webp",
      id: "3",
    },
    {
      imgSrc: "fashionShow2.webp",
      id: "4",
    },
    {
      imgSrc: "exposition1.webp",
      id: "4",
    },
  ]

  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/allevents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      console.log(json)

      setEvents(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])
  return (
    <>
      <Navbar />

      <div>
        <Slider {...settings} className="bg-white">
          {slideImages.map((img) => (
            <div key={img.id}>
              <div
                style={{
                  backgroundImage: `url(/images/${img.imgSrc})`,
                }}
                className="h-[90vh] bg-cover bg-center relative"
              ></div>
            </div>
          ))}
        </Slider>
        <div className="flex flex-col justify-between absolute leading-loose bottom-[25%] left-8 right-8 text-center lg:left-48 lg:right-48 p-6 bg-opacity-50 bg-white bg-clip-padding rounded-3xl">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-4xl lg:text-7xl  text-black font-bold ">
              Découvrez le Monde des Événements
              <br />
            </h2>
            <p className="hidden md:block md:text-xl lg:text-3xl sm:text-md font-medium text-black leading-loose font-atkinson">
              Explorez, Participez, Vivez!
            </p>
          </div>
          <Link className="px-auto pt-6 mx-auto " href="#events">
            <Button
              className="bg-gradient-to-r from-blue-400 to-pink-500 hover:from-blue-300 hover:to-pink-400 mx-auto p-6"
              style={{ width: "120px" }}
            >
              Consulter
            </Button>
          </Link>
        </div>
      </div>

      {/* */} <div className="flex flex-wrap " id="events">
        {events.map((event) => (
          <div key={event.id} className="max-w-sm w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={`eventManager/events/${event?.event?.id}`}>
                <img
                  src={`http://127.0.0.1:8000/storage/${event?.event?.photo}`}
                  alt="event"
                  className="h-[250px] w-[100%] object-cover"
                />
              </Link>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {event.event.eventTitle}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {event.event.summary}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {event.event.country} / {event.event.startingDate}
                </p>
                <Link href={`eventManager/events/${event.event.id}`}>
                  <Button className="bg-gradient-to-r from-blue-400 to-pink-500 hover:from-blue-300 hover:to-pink-400">
                    Visiter
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default EventsPage
