import React, { useEffect, useState } from 'react';

function EventInfo() {
  const [event, setEvent] = useState([]);

  const fetchEvents = async (id) => {
    // const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0";
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/ShowEvent/${id}`, {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Réponse de l'API non valide");
      }

      const json = await res.json();
      console.log(json);

      setEvent(json);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <div>
        
        <h3 className='text font-bold'>Event Info</h3>
        <ul className='m-2'>
          <li>Event Title: {event.eventTitle}</li>
          <li>Country: {event.country}</li>
          <li>Sector: {event.sector}</li>
          <li>Tags: {event.tags}</li>
        </ul>
      </div>
      <div>
        <h3 className='text font-bold'>Event Timing</h3>
        <ul className='m-2'>
          <li>Starting Date: {event.startingDate}</li>
          <li>Ending Date: {event.endingDate}</li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfo;
