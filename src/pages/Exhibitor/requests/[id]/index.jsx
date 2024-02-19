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

    const [requests, setRequests] = useState({});


    // useEffect(() => {
    //   fetchData();
    // }, [id]);

    // console.log(requests)
    

    // const handleApprove = async (id) => {
    //   try {
    //     const res = await fetch(
    //       `http://127.0.0.1:8000/api/approveExhibitor/${id}`,
    //       {
    //         method: "POST",
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //           "Content-Type": "application/json",
    //           Accept: "application/json",
    //         },
    //       },
    //     )
  
    //     if (!res.ok) {
    //       throw new Error("Réponse de l'API pour l'approbation non valide")
    //     }
  
    //     // Rafraîchissez la liste des événements après l'approbation
    //     fetchData()
    //   } catch (error) {
    //     console.error(
    //       "Une erreur s'est produite lors de l'approbation de l'événement :",
    //       error,
    //     )
    //   }
    // }


    const fetchData = async () => {
      try {
        if (id) {

          const response = await fetch(`http://127.0.0.1:8000/api/exhibitor/requests/${id}`);
  
          if (response.ok) {
            const requestData = await response.json();
            setRequests(requestData);
          } else {
            console.error("Error fetching data:", response.status);
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [id]);

    const handleApprove = async (id) => {
      try {

        const res = await fetch(

          `http://127.0.0.1:8000/api/approveExhibitor/${id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )
  

        if (!res.ok) {
          throw new Error("Réponse de l'API pour le rejet non valide")
        }
  
        // Rafraîchissez la liste des événements après le rejet
        fetchData()
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors du rejet de l'événement :",
          error,
        )
      }
    }

    const handleReject = async (id) => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/rejectExhibitor/${id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        )
  
        if (!res.ok) {
          throw new Error("Réponse de l'API pour le rejet non valide")
        }
  
        // Rafraîchissez la liste des événements après le rejet
        fetchData()
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors du rejet de l'événement :",
          error,
        )
      }
    }
  return (

<Layout>
<div className="p-4 border rounded-lg bg-white mt-4">
  <div>
   

    <div className="grid grid-cols-5 items-center justify-between cursor-pointer">
      <span className="col-span-1">Identifiant</span>
      <span className="col-span-1">Name</span>
      <span className="hidden md:grid col-span-1">Email</span>
      <span className="hidden md:grid col-span-1">Phone</span>
      <span className="hidden md:grid col-span-1">Organisation</span>
      {/* <span className="hidden md:grid col-span-1">Status</span> */}
      <span className="hidden sm:grid col-span-1"></span>
    </div>

    <ul>
        {Object.keys(requests).map((id) => {
          const exhibitor = requests[id];

          return (
            <li
              key={exhibitor.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 grid grid-cols-5 items-center justify-between"
            >
              <div className="flex items-center col-span-1 pl-2">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BsPersonFill className="text-purple-800" />
                </div>
              </div>
              <p className="col-span-1">
                {exhibitor.first_name + ' ' + exhibitor.last_name}
              </p>
              <p className="hidden md:flex col-span-1">{exhibitor.email}</p>
              <p className="hidden md:flex col-span-1">{exhibitor.phone}</p>
              <p className="hidden md:flex col-span-1">{exhibitor.organization}</p>

              <div className="hidden sm:flex justify-between items-center col-span-1 ">
                {exhibitor.approved !== undefined && (
                  <>
                    <button
                      className="bg-green-300 text-white px-4 py-2 rounded hover:bg-green-400 w-24 m-3"
                      onClick={() => handleApprove(exhibitor.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-400 w-24"
                      onClick={() => handleReject(exhibitor.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
  </div>
</div>
</Layout>
  )
}

export default ExhibitorRequests