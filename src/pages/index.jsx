import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [deleting, setDeleting] = useState("")
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")
  const [showEditEvent, setshowEditEvent] = useState(false)
  const handleOnClose = () => setshowEditEvent(false)

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
      <div className="w-[96%]">
        {/* <nav className=" flex justify-end m-3 p-3  bg-white ">
          <div className="flex justify-around w-[50%] font-semibold ">

            <Link href={"/"} className="hover:text-purple-500">
              Home
            </Link>
           <Link href={"/"} className="hover:text-purple-500">
              Events
            </Link>
            <Link href={"/"} className="hover:text-purple-500">
              About Us
            </Link>
            <Link href={"/eventManager/login"} className="">
              Log in
            </Link>
          </div>
        </nav> */}

        <div>
          <nav className="bg-white p-4 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-orange-600 ml-2 font-bold font-mono text-2xl">
                eventure
              </h1>

              <div className="space-x-4">
                <Link
                  className="text-black font-semibold hover:text-orange-400"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-black font-semibold hover:text-orange-400"
                  href="/"
                >
                  Events
                </Link>
                <Link
                  className="text-black font-semibold hover:text-orange-400"
                  href="/"
                >
                  About us
                </Link>
                <Link
                  className="text-black font-semibold hover:text-orange-400"
                  href="/eventManager/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </nav>
          <section className="h-screen flex items-center justify-center relative">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/eventt.webp")' }}
            ></div>
            <div className="relative z-10 text-white max-w-4xl mx-auto px-4 lg:px-0">
              <h1 className="lg:text-4xl sm:font-bold text-2xl font-semibold">
                The platform that will help you manage your event better
              </h1>
              <p className="mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem voluptatem fugit suscipit?
              </p>
              <div className="p-7">
                <Link href="/eventManager/registerPage">
                  <Button className="w-28 bg-orange-600">Sign Up</Button>
                </Link>
              </div>
              {/* <div className="absolute inset-0 bg-gray-00 opacity-50 blur-md"></div> */}
            </div>
          </section>
        </div>

        <div className="mr-auto ml-auto w-[96%] relative">
          <div className=" ">
            <h1 className="ml-20 mb-10 text-3xl font-bold text-center pt-10">
              Découvrez Nos Évémnements
            </h1>
          </div>
          <div className="flex justify-around">
            {events?.map((event) => (
              <div
                key={event.id}
                style={{ maxWidth: 300 }}
                className="p-2 m-2 rounded-lg border-black bg-orange-600"
              >
                {/* <div className="block object-cover w-full h-130 bg-orange-500 rounded-5">
                  {event.event.photo}
                </div> */}
                <img
              
              src={`http://127.0.0.1:8000/storage/${event?.event?.photo}`}
              alt={event?.event?.photo}
              className="w-full h-[136px] object-cover rounded"
            />
                <h1 className="text-white font-semibold text-lg pt-1 pl-1">
                  {event.event.summary}
                </h1>
                <p className="text-white  pt-1 pl-1">
                  {event.event.country} / {event.event.startingDate}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h1 className="m-24 mb-10 lg:text-4xl sm:font-bold text-2xl font-bold text-center">
              Nos Services
            </h1>
            <section className="flex items-center justify-center">
              <div className="w-full md:w-1/2 p-8">
                <img
                  src="/images/services.jpg"
                  alt="Image"
                  className="w-full h-80 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 pt-1">
                <h2 className="text-3xl font-bold mb-4">
                  Pourquoi Nous Choisir ?{" "}
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vestibulum libero ac ipsum accumsan, nec vehicula nisi
                  vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Fusce vestibulum libero ac ipsum accumsan, nec vehicula
                  nisi vestibulum.
                </p>
                <p className="text-lg text-gray-700">
                  Nunc non libero sit amet dui iaculis feugiat nec id felis.
                  Fusce interdum pretium ligula non egestas.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import React from "react"
// import Link from "next/link"
// function index() {
//   return (
//     <div className="w-[96%]">
//       <div className="sticky">
//         <nav className=" flex justify-end m-3 p-3 bg-opacity-20 bg-white bg-blur-md">
//           <div className="flex justify-around w-[50%] font-semibold ">
//             <Link href={"/"} className="hover:text-purple-500">
//               Home
//             </Link>
//             <Link href={"/"} className="hover:text-purple-500">
//               Services
//             </Link>
//             <Link href={"/"} className="hover:text-purple-500">
//               Events
//             </Link>
//             <Link href={"/"} className="hover:text-purple-500">
//               About Us
//             </Link>
//             <Link href={"/eventManager/registerPage"} className="">
//               Log in
//             </Link>
//           </div>
//         </nav>
//       </div>
//       <div className="flex justify-between">
//         <div className="m-24">
//           <h1 className="lg:text-4xl sm:font-bold text-2xl font-semibold">
//             The platform that will help you manage your event better
//           </h1>
//           <p className="mt-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Exercitationem voluptatem fugit suscipit?
//           </p>
//           <div className="p-7">
//             <Button className="w-28">Sing Up</Button>
//           </div>
//         </div>

//         <div className="flex justify-end relative m-6 p-6 mt-12">
//           <div className="  w-72 h-64 bg-blue-600 blur-3xl rounded-"></div>
//           <div className=" w-72 h-64 bg-purple-600 blur-3xl rounded-"></div>
//           <div className=" absolute right-36 top-44 w-72 h-64 bg-pink-600  blur-3xl rounded-full"></div>
//           <Image
//             src={"/tech.png"}
//             width={350}
//             height={150}
//             className="absolute right-28 "
//           />
//         </div>
//       </div>
//       <div className="mr-auto ml-auto w-[96%] relative">
//         <div className=" ">
//           <h1 className="ml-20 mb-10 text-3xl font-semibold">Services</h1>
//         </div>
//         <div className="flex justify-around ">
//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>

//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>
//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>
//         </div>
//         <div className="flex justify-around ">
//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>

//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>

//           <div
//             style={{ maxWidth: 300 }}
//             className="p-2 m-2 rounded-lg border-black bg-slate-400"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
//               alt="Bold typography"
//               style={{
//                 display: "block",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: 140,
//                 backgroundColor: "var(--gray-5)",
//                 borderRadius: "5px",
//                 margin: "",
//               }}
//             />
//             <h1 as="p" size="3">
//               is the art and technique of arranging type to make written
//               language legible, readable and appealing when displayed.
//             </h1>
//           </div>
//           <div className="w-60 h-64 bg-blue-400 blur-3xl z-0 opacity-95 absolute top-1/3 left-0"></div>
//         </div>

//         <div>
//           <h1 className="m-24 lg:text-4xl sm:font-bold text-2xl font-semibold">
//             Events
//           </h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default index
