import React from 'react';
// import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import { useState , useEffect } from 'react';

  const RecentOrders = () => {
    const [exposants, setExposants] = useState([]);
  
    const fetchExposants = async () => {
      const token = "20|C2X1k4yhZh65UIfTBnKg8mv2FWht47RqG8yrGo5b35b459ab";
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/exposantShow`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
  
        if (!res.ok) {
          throw new Error("Réponse de l'API non valide");
        }
  
        const json = await res.json();
        setExposants(json);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };
  
    useEffect(() => {
      fetchExposants();
    }, []);

  return (
    <div className='w-full col-span-1 lg:h-[70vh] h-[50vh] m-1 p-4 border rounded-lg bg-white overflow-scroll '>
      <h1>Recent exposants</h1>
      <ul>
      {exposants.map((exposant) => (
          <li
            key={exposant.id} // Ensure each item has a unique key
            className='w-900 bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{exposant.name}</p>
              {/* Add other details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders;