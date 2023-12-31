import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Layout from "@/components/Dashboard/Layout.jsx";

const Requests = () => {
  const [eventManagers, setEventManagers] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEventManagers = async () => {
      const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3";
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/eventManagers`, {
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
        setEventManagers(json);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };

    const fetchEvents = async () => {
      const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3";
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/nonApprovedEvents/show`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Réponse de l'API non valide");
        }

        const json = await res.json();
        setEvents(json);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };

    fetchEventManagers();
    fetchEvents();
  }, []); // Run the effect once on component mount

  const handleApprove = async (id) => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3";
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/admin/event/approve/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Réponse de l'API pour l'approbation non valide");
      }

      // Rafraîchissez la liste des événements après l'approbation
      fetchEvents();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'approbation de l'événement :",
        error
      );
    }
  };

  const handleReject = async (id) => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3";
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/admin/eventManager/reject/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Réponse de l'API pour le rejet non valide");
      }

      // Rafraîchissez la liste des événements après le rejet
      fetchEvents();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du rejet de l'événement :",
        error
      );
    }
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="p-2 grid grid-cols-6 items-center justify-between cursor-pointer">
            <span>Event Manager ID</span>
            <span>Event</span>
            <span className="hidden md:grid">Sector</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden sm:grid">Action</span>
          </div>
          <ul>
            {events.map((event) => (
              <li
                key={event.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-6 items-center justify-between"
              >
                <p className="hidden md:flex">{event.EventManager_id}</p>
                <p className="hidden md:flex">{event.eventTitle}</p>
                <p className="hidden md:flex">{event.sector}</p>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      event.approved === "0"
                        ? "bg-yellow-200 p-2 rounded-lg"
                        : event.approved === "pending"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-blue-200 p-2 rounded-lg"
                    }
                  >
                    {event.approved}
                  </span>
                </p>

                <div className="sm:flex hidden justify-between items-center">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-24 m-3"
                    onClick={() => handleApprove(event.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-24"
                    onClick={() => handleReject(event.id)}
                  >
                    Reject
                  </button>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Requests;
