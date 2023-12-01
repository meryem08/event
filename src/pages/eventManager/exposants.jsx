import React from "react"
import { useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";
import { Button } from "@/components/ui/button/index.jsx";

const exposants = () => {
  const [exposants, setExposants] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    const updatedExposants = exposants.filter((exposants) => exposants.id !== id);
    setExposants(updatedExposants);
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
  const filteredExposants = exposants.filter((exposant) =>
  exposant.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
  exposant.name.last.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className='bg-purple-50 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Exposants</h2>
        <h2>Welcome Back</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Product</span>
            <span className='hidden md:grid'>Event</span>

          </div>
          <table>
           
          </table>
          <ul>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-9 sm:grid-cols-6 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center '>
                      <div className='bg-purple-100 p-3 rounded-lg'>
                          <BsPersonFill className='text-purple-800' />
                      </div>
                      <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                      </div>
                          <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                          <p className='hidden md:flex'>{order.Product}</p>
                          <p className='hidden md:flex'>{order.event}</p>
                          <p className='hidden md:flex'>{order.event}</p>
                          <p className='hidden md:flex'>{order.event}</p>


                      {/* <div className="sm:flex hidden justify-between items-center"> */}
                  
                        <button  className="px-4 py-2 text-white bg-gray-900 hover:bg-gray-500 rounded-md"
                                 onClick={() => confirmDelete(exposants.id)}>Delete</button>
                    
                        <button  className="px-4 py-2 text-black bg-gray-100 hover:bg-gray-600 rounded-md">Edit</button>
                        <BsThreeDotsVertical />
                {/* </div> */}
                    
                </li>),
            )}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default exposants;