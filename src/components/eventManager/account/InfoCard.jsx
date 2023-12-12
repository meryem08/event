// import React, { useState, useEffect } from 'react';
// // import Image from 'next/image'; // Uncomment this line if you are using Next.js Image component

// function InfoCard() {
//   const [eventManagerData, setEventManagerData] = useState(null);

//   useEffect(() => {
//     const fetchEventManagerData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/ShowEventManager/1', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch event manager data');
//         }

//         const eventData = await response.json();
//         setEventManagerData(eventData);
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     };

//     fetchEventManagerData();
//   }, []);

//   if (!eventManagerData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='w-screen h-full p-5 ml-24'>
//       <div className='w-[96%] h-56 bg-white p-4 border-solid border-2 border-gray-100 rounded-md'>
//         <div className='flex justify-between'>
//           <div className='flex justify-start'>
//             {/* Uncomment the next line if you are using Next.js Image component */}
//             {/* <Image src={eventManagerData.photo_path} width={180} height={50} className='w-28 h-28 rounded-md' alt="Event Manager Image" /> */}
//             <div className='m-5'>
//               <div className='font-bold text-lg'>
//                 {eventManagerData.first_name} {eventManagerData.last_name}
//               </div>
//               <div className='font-sans text-sm text-gray-400'>{eventManagerData.email}</div>
//             </div>
//           </div>
//           <div>
//             {/* Add your settings button or other UI elements here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoCard;
import React, { useState, useEffect } from 'react';
// import Image from 'next/image'; // Uncomment this line if you are using Next.js Image component

function InfoCard() {
  const [eventManagerData, setEventManagerData] = useState(null);

  useEffect(() => {
    const fetchEventManagerData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/ShowEventManager', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch event manager data');
        }

        const eventData = await response.json();
        setEventManagerData(eventData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchEventManagerData();
  }, []);

  if (!eventManagerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-screen h-full p-5 ml-24'>
      <div className='w-[96%] h-56 bg-white p-4 border-solid border-2 border-gray-100 rounded-md'>
        <div className='flex justify-between'>
          <div className='flex justify-start'>
            {/* Uncomment the next line if you are using Next.js Image component */}
            {/* <Image src={eventManagerData.photo_path} width={180} height={50} className='w-28 h-28 rounded-md' alt="Event Manager Image" /> */}
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
