import React from "react"
import { useState , useEffect } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data";
import { Button } from "@/components/ui/button/index.jsx";
import Sidebar from "@/components/eventManager/sideBar";
import Link from "next/link";

const Exhibitors = () => {

  const [exhibitors, setExhibitors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchExhibitors = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/approvedExibitors`, {
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
      console.log(json)

      setExhibitors(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  // const [exhibitors, setEvents] = useState([])


  useEffect(() => {
    
    fetchExhibitors()
  }, [])

  const handleDelete = (id) => {
    const updatedExhibitors = exhibitors.filter((exhibitor) => exhibitor.id !== id);
    setExhibitors(updatedExhibitors);
    alert("L'élément a été supprimé !");
  };

  const confirmDelete = (id) => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
    if (confirmation) {
      handleDelete(id);
    } else {
      alert("ignored deleting");
    }
  };

  // Fonction pour filtrer les EventManagers en fonction de la recherche
  // const filteredExhibitors = exhibitors.filter((exhibitor) =>
  // exhibitor.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
  // exhibitor.name.last.toLowerCase().includes(searchQuery.toLowerCase())
  // );


  return (   
    
    <div className="relative">
      <Sidebar className='absolute'/>

      <div className="p-4 pl-60 absolute top-5 w-full">
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
             <li key={event.id}  
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"

             >
              
             
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    
                    <BsPersonFill className="text-purple-800" />
                  </div>
                 
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  {exhibitor.fisrt_name} {exhibitor.last_name}
                </p>

                <p className="hidden md:flex">
                 {exhibitor.organization}
                </p>
                <p className="pl-4">
                  n
                </p>
                
                <div className="flex ">
                  <div className="pl-4">
                    <Button onClick={() => confirmDelete(exhibitor.id)}>Delete</Button>
                  </div>
                  <div className="pl-4">
                    <Button onClick={() => handleShow(exhibitor.id)}>Show</Button>
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
      
    </div>
  );
};

export default Exhibitors