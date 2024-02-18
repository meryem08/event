"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/eventManager/Layout";
// import Layout from 
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"


function ExhibitorRequests() {
    const router = useRouter();
    const { id } = router.query;
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
           
            if (id) {
              const response = await fetch(`http://127.0.0.1:8000/api/exhibitor/requests/${id}`);
    
            if (response.ok) {
              const requestData = await response.json(); // Removed array destructuring
              setRequest(requestData);
            } else {
              console.error("Error fetching data:", response.status);
            }}
          } catch (error) {
            console.error("An error occurred:", error);
          }
        };
    
        fetchData();
      }, [id] );
    console.log(requests)
    

  return (
//     <div>
//        {requests.map((user) => (
//         <li key={user.id} user={user} >
// hello {user.first_name}
//         </li>

//       ))}
//       {requests.first_name} {requests.last_name} 
      
//     </div>


<Layout>
<div className="p-4 border rounded-lg bg-white mt-4">
  <div>
    {/* Ajoutez un champ de recherche */}
    {/* <input
      type="text"
      placeholder="Rechercher par nom..."
      className="w-full p-2 border rounded-md mb-4"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    /> */}

    <div className="grid grid-cols-7 items-center justify-between cursor-pointer">
      <span className="col-span-1">Identifiant</span>
      <span className="col-span-1">Name</span>
      <span className="hidden md:grid col-span-1">Email</span>
      <span className="hidden md:grid col-span-1">Phone</span>
      <span className="hidden md:grid col-span-1">Organisation</span>
      {/* <span className="hidden md:grid col-span-1">Status</span> */}
      <span className="hidden sm:grid col-span-1"></span>
    </div>

    <ul>
      {requests.map((request) => (
        <li
          key={request.id}
          className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 grid grid-cols-7 items-center justify-between"
        >
            <div className="flex items-center col-span-1 pl-2">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BsPersonFill className="text-purple-800" />
            </div>
            
          </div>
          <p className="col-span-1">
            {request.first_name + " " + request.last_name}
          </p>
          <p className="hidden md:flex col-span-1">
            {request.email}
          </p>
          <p className="hidden md:flex col-span-1">
            {request.phone}
          </p>
          <p className="hidden md:flex col-span-1">
            {request.organization}
          </p>
          {/* <p className="hidden md:flex col-span-1">
            <span
              className={
                request.approved === "0"
                  ? "bg-yellow-100 p-2 rounded-lg"
                  : "bg-yellow-100 p-2 rounded-lg"
              }
            >
              Pending
            </span>
          </p> */}

          <div className="hidden sm:flex justify-between items-center col-span-1 ">
            <button
              className="bg-green-300 text-white px-4 py-2 rounded hover:bg-green-400 w-24 m-3"
              onClick={() => handleApprove(request.id)}
            >
              Approve
            </button>
            <button
              className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-400 w-24"
              onClick={() => handleReject(request.id)}
            >
              Reject
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
</Layout>
  )
}

export default ExhibitorRequests