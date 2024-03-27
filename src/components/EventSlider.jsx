import React, { useEffect, useState } from "react"
import EventCard from "./EventCard"
import Slider from "react-slick"
import Link from "next/link"

// const events = [
//   {img: "/images/event3.jpg"},
//   {img: "/images/beautyEvent.jpg"},
//   {img: "/images/concert2.webp"},
//   {img: "/images/conference3.webp"},
// ]

const EventSlider = () => {
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
  }, []);

  const settings = {
    arrows: true,
    infiite : false,
    speed : 500,
    slidesToShow : 4,
    slidesToScroll:1 ,
    // nextArrow : <NextArrow/>,
    // PrevArrow : <PrevArrow/>,

    responsive :[
      {
        breakpoint : 1280,
        settings : {
  slidesToShow : 3,
        }
      },
      {
        breakpoint : 1000,
        settings : {
          slidesToShow : 2,
                }

      },
      {
        breakpoint : 650,
        settings : {
          slidesToShow : 1,
                }

      },
     
    ],

    // afterChange:current => {
    //   setProgress(100/(data.length-slideToShow+1) * (current+1));
    //   console.log(slideToShow);
    // }


  }
  return (
    <>
      <h2 className="text-2xl md:text-2xl lg:text-4xl  text-black font-bold text-center pt-5">
        Découvrez Notre Univers d&apos;Événements{" "}
      </h2>
     <div className="reletive ">
      {/* <Link href={`eventManager/events/${event.id}`}> */}
      <Slider {...settings}>{
        events.map((event)=><EventCard key={event.id} id = {event.event.id} img={event.event.photo} eventTitle={event.event.eventTitle} summary={event.event.summary} country={event.event.country} startingDate={event.event.startingDate}/>)
      }</Slider>
      {/* </Link> */}
      
      
     </div>
    </>
  )
}

export default EventSlider
