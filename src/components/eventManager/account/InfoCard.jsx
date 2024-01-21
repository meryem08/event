import React, { useState, useEffect } from 'react';

function InfoCard() {
  const [eventManagerData, setEventManagerData] = useState(null);

  useEffect(() => {
    const fetchEventManagerData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/showUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch event manager data');
        }

        const eventManagerData = await response.json();
        setEventManagerData(eventManagerData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchEventManagerData();
  }, ); // Added dependency to re-run the effect when the token changes

  if (!eventManagerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' h-full '>
      <div className='h-56 bg-white p-4 border-solid border-2 border-gray-100 rounded-md'>
        <div className='flex justify-between'>
          <div className='flex justify-start'>
            <div className='m-5'>
              <div className='font-bold text-lg'>
                {eventManagerData.first_name} {eventManagerData.last_name}
              </div>
              <div className='font-sans text-sm text-gray-400'>{eventManagerData.email}</div>
            </div>
          </div>
          <div>
            {/* Add your settings button or other UI elements here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
