import Sidebar from "@/components/eventManager/sideBar";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EventInfo from "../eventInfo";
import Layout from "@/components/eventManager/layout";
import EditEvent from "@/components/eventManager/EditEvent";
import DropdownMenuDemo from "@/components/exhibitor/menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Events = () => {
  // const [showEditEvent, setshowEditEvent] = useState(false);
  // const handleOnClose = () => setshowEditEvent(false);
  const [showEditEvent, setshowEditEvent] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal); 
  };


  const handleOnClose = () => {
    setshowEditEvent(false);
    setSelectedEventId(null);
  };
  const fetchEvents = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/events`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
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

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/event/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        fetchEvents();
        console.log("Event deleted successfully!");
      } else {
        const errorMessage = await response.text();
        console.error("Error deleting event:", errorMessage);
      }
    } catch (error) {
      console.error("An error occurred during the request.", error);
    }
  };

  const confirmDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmation) {
      handleDelete(id);
    } else {
      alert("Ignoring the deletion");
    }
  };
  const handleEditClick = (id) => {
    setSelectedEventId(id);
    setshowEditEvent(true);
  };

  return (
    <Layout>
      
      <div>
        <div className="p-4 top-7 w-full">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="p-2 grid grid-cols-9 items-center justify-around cursor-pointer">
              {/* <span>Identifiant</span> */}
              <span className="hidden md:grid">Event</span>
              <span className="hidden md:grid ">Sector</span>
              <span className="hidden md:grid ">Summary</span>
              <span className="hidden md:grid">Start in</span>
              <span className="hidden sm:grid">End in</span>
              <span className="hidden sm:grid"></span>
              <span className="hidden sm:grid"></span>
            </div>

            <ul>
              {events?.map((event) => (
                <li
                  key={event.id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-9 items-center justify-between"
                >
                  {/* <p className="hidden md:flex">
                    <BsPersonFill />
                  </p> */}
                  <p className="hidden md:flex">{event.eventTitle}</p>
                  <p className="hidden md:flex">{event.sector}</p>
                  <p className="hidden md:flex">{event.summary}</p>
                  <p className="hidden md:flex">{event.startingDate}</p>
                  <p className="hidden md:flex">{event.endingDate}</p>

                  <Link href={`/exhibitor/requests/${event.id}`}>
                    <Button className="w-16">Requests</Button>
                  </Link>

                  <Link href={`/exhibitor/exhibitors/${event.id}`}>
                    <Button className="w-16">Exhibitor</Button>
                  </Link>
                  <div >
                  <EditEvent id ={event.id} />
                  </div>

                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="w-4">
                        <BsThreeDotsVertical />
                      </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                      >
                        <Link
                          href={`/eventManager/events/${event.id}`}
                          target="_blank"
                        >
                          <DropdownMenu.Item
                            className="group text-base m-2 font-semibold text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            disabled
                          >
                            <button>Show</button>
                          </DropdownMenu.Item>
                        </Link>

                        <button onClick={() => confirmDelete(event.id)}>
                          <DropdownMenu.Item
                            className="group text-base m-2 font-semibold text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            disabled
                          >
                            Delete
                          </DropdownMenu.Item>
                        </button>

                      </DropdownMenu.Content>
                      
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={"/eventManager/createNewEvent"}>
          <Button>Create Event</Button>
        </Link>
      </div>
      {/* Conditionally render the EditEvent component */}
      {/* {showEditEvent && (
        <EditEvent onClose={handleOnClose} visible={showEditEvent} eventId={selectedEventId} />
      )} */}
    </Layout>
  );
};

export default Events;
