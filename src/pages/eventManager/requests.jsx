import React from "react";
import { useState , useEffect } from "react";
import Sidebar from "@/components/eventManager/sideBar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/eventManager/layout";
import popOver from "@/components/popOver";

// const Requests = () => {

//   // const [exhibitors, setExhibitors] = useState([])
//   const [events, setEvents] = useState([])
  // const [searchQuery, setSearchQuery] = useState("")


//     const fetchRequests = async () => {
//       try {
//         const res = await fetch(
//           'http://127.0.0.1:8000/api/allRequests',
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           },
//         )

//         if (!res.ok) {
//           throw new Error("Réponse de l'API non valide")
//         }

//         const json = await res.json()
//         setEvents(json)
//       } catch (error) {
//         console.error("Une erreur s'est produite :", error)
//       }
     

//     }
//  console.log(events)
//     fetchRequests()
//     // fetchEvents();
//   // Run the effect once on component mount


// useEffect(() => {
//   fetchRequests()
//   return () => {
//     fetchRequests()
//   };
// }, []);


// useEffect(()=> fetchRequests(),[])
//   const handleApprove = async (id) => {
//     try {
//       const res = await fetch(
//         `http://127.0.0.1:8000/api/approveExhibitor/${id}`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         },
//       )

//       if (!res.ok) {
//         throw new Error("Réponse de l'API pour l'approbation non valide")
//       }

//       // Rafraîchissez la liste des événements après l'approbation
//       fetchRequests()
//     } catch (error) {
//       console.error(
//         "Une erreur s'est produite lors de l'approbation de l'événement :",
//         error,
//       )
//     }
//   }

//   useEffect(()=> fetchRequests(),[])
//   const handleReject = async (id) => {
//     try {
//       const res = await fetch(
//         `http://127.0.0.1:8000/api/rejectExhibitor/${id}`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         },
//       )

//       if (!res.ok) {
//         throw new Error("Réponse de l'API pour l'approbation non valide")
//       }

//       // Rafraîchissez la liste des événements après l'approbation
//       fetchRequests()
//     } catch (error) {
//       console.error(
//         "Une erreur s'est produite lors de l'approbation de l'événement :",
//         error,
//       )
//     }
//   }

const Requests = () => {
  const [events, setEvents] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/allRequests', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Réponse de l'API non valide");
      }

      const json = await res.json();
      setEvents(json);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    // Run fetchRequests on component mount
    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/approveExhibitor/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Réponse de l'API pour l'approbation non valide");
      }

      // Refresh the list of events after approval
      fetchRequests();
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'approbation de l'événement :", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/rejectExhibitor/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Réponse de l'API pour l'approbation non valide");
      }

      // Refresh the list of events after rejection
      fetchRequests();
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'approbation de l'événement :", error);
    }
  };
  console.log(events)

  return ( 
    <Layout> 
    {/* <div className="relative"> */}
      {/* <Sidebar className='absolute'/> */}

      <div className="p-4 border rounded-lg bg-white mt-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

          <div className=" p-2 grid grid-cols-5 items-center justify-around cursor-pointer">
            <span className="hidden md:grid">Name</span>
            {/* <span className="hidden md:grid ">Organization</span> */}
            <span className="hidden sm:grid"> Event</span>

            <span className="hidden md:grid">Email</span>
            <span className="hidden sm:grid"></span>
            <span className="hidden sm:grid"></span>

          </div>

          <div>
      {events.map(event => (
        <div key={event.id}>
          <ul>
          {event?.exhibitors?.map((exhibitor) => (
             <li key={exhibitor.id}  
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"

             >
              {exhibitor?.id} 
                <div className="flex items-center">
                  <div className=" rounded-lg">
                   {exhibitor.first_name} {exhibitor?.last_name}
                    {/* <BsPersonFill className="text-purple-800" /> */}
                  </div>
                 
                </div>
{/* 
                <p className="text-gray-600 sm:text-left text-right">
                   {exhibitor?.organization}

                </p> */}

                <p className="hidden md:flex">
                  {event?.eventTitle}
                </p>
                <p className="pl-4">
                {exhibitor?.email}

                </p>
                
                <div className="flex ">
                  <div className="pl-4">
                    <Button onClick={() => handleApprove(exhibitor.user_id)}>Approve</Button>
                  </div>
                  <div className="pl-4">
                    <Button onClick={() => handleReject(exhibitor.user_id)}>Reject</Button>
                  </div>
                  <div className="pl-4">
                    {/* <Button onClick={() => handleShow(exhibitor.user_id)}>Show</Button> */}
                    <popOver/>
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
      ))}
    </div>
          
        </div>
        
      </div>
      
    {/* </div> */}
    </Layout>
  );
};

export default Requests