import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar/Navbar"
import HeroSection from "@/components/HeroSection"
import EventSlider from "@/components/EventSlider"
import Footer from "@/components/Footer"
import About from "@/components/AboutUs"

function HomePage() {
  // const [searchQuery, setSearchQuery] = useState("")
  // const [deleting, setDeleting] = useState("")
  // const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  // const [urlsChecked, setUrlsChecked] = React.useState(false)
  // const [person, setPerson] = React.useState("pedro")
  // const [showEditEvent, setshowEditEvent] = useState(false)
  // const handleOnClose = () => setshowEditEvent(false)

  // const fetchEvents = async () => {
  //   try {
  //     const res = await fetch(`http://127.0.0.1:8000/api/allevents`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //     // console.log(res)
  //     if (!res.ok) {
  //       throw new Error("Réponse de l'API non valide")
  //     }
  //     const json = await res.json()
  //     console.log(json)

  //     setEvents(json)
  //   } catch (error) {
  //     console.error("Une erreur s'est produite :", error)
  //   }
  // }
  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   fetchEvents()
  // }, [])
  return (<>
  <Navbar/>
  <HeroSection/>
  <EventSlider/>
  <About/>
  <Footer/>
  </>)

  //     <div className="w-[96%]">
  //       <div>
  //         <nav className="bg-white p-4 fixed top-0 w-full z-50">
  //           <div className="max-w-7xl mx-auto flex justify-between items-center">
  //             <h1 className="text-orange-600 ml-2 font-bold font-mono text-2xl">
  //               eventure
  //             </h1>

  //             <div className="space-x-4">
  //               <Link
  //                 className="text-black font-semibold hover:text-orange-400"
  //                 href="/"
  //               >
  //                 Home
  //               </Link>
  //               <Link
  //                 className="text-black font-semibold hover:text-orange-400"
  //                 href="/"
  //               >
  //                 Events
  //               </Link>
  //               <Link
  //                 className="text-black font-semibold hover:text-orange-400"
  //                 href="/"
  //               >
  //                 About us
  //               </Link>
  //               <Link
  //                 className="text-black font-semibold hover:text-orange-400"
  //                 href="/eventManager/login"
  //               >
  //                 Login
  //               </Link>
  //             </div>
  //           </div>
  //         </nav>
  //         <section className="h-screen flex items-center justify-center relative">
  //           <div
  //             className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
  //             style={{ backgroundImage: 'url("/eventt.webp")' }}
  //           ></div>
  //           <div className="relative z-10 text-white max-w-4xl mx-auto px-4 lg:px-0">
  //             <h1 className="lg:text-4xl sm:font-bold text-2xl font-semibold">
  //               The platform that will help you manage your event better
  //             </h1>
  //             <p className="mt-5">
  //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //               Exercitationem voluptatem fugit suscipit?
  //             </p>
  //             <div className="p-7">
  //               <Link href="/eventManager/registerPage">
  //                 <Button className="w-28 bg-orange-600">Sign Up</Button>
  //               </Link>
  //             </div>
  //           </div>
  //         </section>
  //       </div>

  //       <div className="mr-auto ml-auto w-[96%] relative">
  //         <div className=" ">
  //           <h1 className="ml-20 mb-10 text-3xl font-bold text-center pt-10">
  //             Découvrez Nos Évémnements
  //           </h1>
  //         </div>
  //         <div className="flex justify-around">
  //           {events?.map((event) => (
  //             <div
  //               key={event.id}
  //               style={{ maxWidth: 300 }}
  //               className="p-2 m-2 rounded-lg border-black bg-orange-600"
  //             >
  //               {/* <div className="block object-cover w-full h-130 bg-orange-500 rounded-5">
  //                 {event.event.photo}
  //               </div> */}
  //               <img
  //                 src={`http://127.0.0.1:8000/storage/${event?.event?.photo}`}
  //                 alt={event?.event?.photo}
  //                 className="w-full h-[136px] object-cover rounded"
  //               />
  //               <h1 className="text-white font-semibold text-lg pt-1 pl-1">
  //                 {event.event.summary}
  //               </h1>
  //               <p className="text-white  pt-1 pl-1">
  //                 {event.event.country} / {event.event.startingDate}
  //               </p>
  //             </div>
  //           ))}
  //         </div>

  //         <div>
  //           <h1 className="m-24 mb-10 lg:text-4xl sm:font-bold text-2xl font-bold text-center">
  //             Nos Services
  //           </h1>
  //           <section className="flex items-center justify-center">
  //             <div className="w-full md:w-1/2 p-8">
  //               <img
  //                 src="/images/services.jpg"
  //                 alt="Image"
  //                 className="w-full h-80 rounded-lg shadow-lg"
  //               />
  //             </div>
  //             <div className="w-full md:w-1/2 p-8 pt-1">
  //               <h2 className="text-3xl font-bold mb-4">
  //                 Pourquoi Nous Choisir ?{" "}
  //               </h2>
  //               <p className="text-lg text-gray-700 mb-4">
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  //                 vestibulum libero ac ipsum accumsan, nec vehicula nisi
  //                 vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
  //                 elit. Fusce vestibulum libero ac ipsum accumsan, nec vehicula
  //                 nisi vestibulum.
  //               </p>
  //               <p className="text-lg text-gray-700">
  //                 Nunc non libero sit amet dui iaculis feugiat nec id felis.
  //                 Fusce interdum pretium ligula non egestas.
  //               </p>
  //             </div>
  //           </section>
  //         </div>
  //       </div>
  //     </div>
}

export default HomePage
