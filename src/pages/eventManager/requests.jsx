import React from "react";
import { useState , useEffect } from "react";
import Sidebar from "@/components/eventManager/sideBar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/eventManager/layout";

const Requests = () => {

  const [exhibitors, setExhibitors] = useState([])
  const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


    const fetchRequests = async () => {
      try {
        const res = await fetch(
          'http://127.0.0.1:8000/api/exhibitors/requests',
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )

        if (!res.ok) {
          throw new Error("Réponse de l'API non valide")
        }

        const json = await res.json()
        setExhibitors(json)
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
      }
    }

    // fetchRequests()
    // fetchEvents();
  // Run the effect once on component mount
// useEffect(()=> fetchRequests(),[])
  const handleApprove = async (id) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/approveExhibitor/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )

      if (!res.ok) {
        throw new Error("Réponse de l'API pour l'approbation non valide")
      }

      // Rafraîchissez la liste des événements après l'approbation
      fetchRequests()
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'approbation de l'événement :",
        error,
      )
    }
  }

  // const handleReject = async (id) => {
  //   try {
  //     const res = await fetch(
  //       `http://127.0.0.1:8000/api/rejectEventManager/${id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`,
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       },
  //     )

  //     if (!res.ok) {
  //       throw new Error("Réponse de l'API pour le rejet non valide")
  //     }

  //     // Rafraîchissez la liste des événements après le rejet
  //     fetchEventManagers()
  //   } catch (error) {
  //     console.error(
  //       "Une erreur s'est produite lors du rejet de l'événement :",
  //       error,
  //     )
  //   }
  // }

  return ( 
    <Layout> 
    {/* <div className="relative"> */}
      {/* <Sidebar className='absolute'/> */}

      <div className="p-4 border rounded-lg bg-white mt-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

          <div className=" p-2 grid grid-cols-5 items-center justify-around cursor-pointer">
            <span>Identifiant</span>
            <span className="hidden md:grid">Name</span>
            <span className="hidden md:grid ">Organization</span>
            <span className="hidden md:grid">Email</span>
            <span className="hidden sm:grid"></span>
            <span className="hidden sm:grid"></span>
          </div>

          <ul>
          {exhibitors?.map(exhibitor => (

                <li
                key={exhibitor?.id} 
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"
              >
             
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    
                    {/* <BsPersonFill className="text-purple-800" /> */}
                  </div>
                 
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  {exhibitor.first_name} {exhibitor.last_name}
                </p>

                <p className="hidden md:flex">
                 {exhibitor.organization}
                </p>
                <p className="pl-4">
                {exhibitor.email}
                </p>
                
                <div className="flex ">
                  <div className="pl-4">
                    <Button onClick={() => confirmDelete(exhibitor.id)}>Delete</Button>
                  </div>
                  <div className="pl-4">
                    <Button onClick={() => handleApprove(exhibitor.id)}>approve</Button>
                  </div>

                {/* <p className="pl-4">
                <Popover>
                    <PopoverTrigger>
                      <Button>view</Button> 
                    </PopoverTrigger>
                    <PopoverContent>
                      <EventInfo/>
                    </PopoverContent>
                </Popover>
                </p> */}
                </div>
                
                <div className="sm:flex hidden justify-between items-center">
              </div>
             </li>
              // </Link>
            ))}
          </ul>
          
        </div>
        
        {/* <Link href='/eventManager/createNewEvent'>
            <Button className='m-6'>
               Create Event
            </Button>
        </Link> */}
        
      </div>
      
    {/* </div> */}
    </Layout>
  );
};

export default Requests