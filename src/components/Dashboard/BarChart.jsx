// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { useState , useEffect } from 'react';

// const BarChart = () => {
//  const [sectors , setSectors] = useState ('')

//   useEffect(() => {
//     const fetchSectors = async () => {
//       try {
//         const res = await fetch(
//           "http://127.0.0.1:8000/api/sector",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           },
//         )

//         if (!res.ok) {
//           throw new Error("Réponse de l'API non valide")
//         }

//         const json = await res.json()
//         setSectors(json)
//       } catch (error) {
//         console.error("Une erreur s'est produite :", error)
//       }
//     }

//     fetchSectors()
//   }, [])

//   const data = {
//     labels: ['Red', 'Blue', 'Yellow' , '1','2','3','4'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [4, 4, 3,2,4,2,6,4],
//         backgroundColor: [
//           '#FBF8CC',
//           '#FFCFD2',
//           '#F1C0E8',
//           '#CFBAF0',
//           '#A3C4F3',
//           '#90DBF4',
//           '#98F5E1',
//           '#B9FBC0'
//         ],
//         borderColor: [
//           'black',
//           'black',
//           'black',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className='border border-slate-800 rounded-xl m-2'>
//       <Pie data={data} />
//     </div>

//   )
  
// };

// export default BarChart;

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const [sectors, setSectors] = useState({});

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/api/sector",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        if (!res.ok) {
          throw new Error("Réponse de l'API non valide");
        }

        const json = await res.json();
        setSectors(json);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };

    fetchSectors();
  }, []);

  // Combine fetched sector data with existing chart data
  const combinedData = {
    labels: [...Object.keys(sectors)],
    datasets: [
      {
        label: 'Events',
        data: [...Object.values(sectors)],
        backgroundColor: [
          '#FF03F6',
          '#6F5FF3',
          '#F1C0E8',
          '#CFBAF0',
          '#A3C4F3',
          '#90DBF4',
          '#98F5E1',
          '#B9FBC0'
        ],
        borderColor: [
          'black',
          'black',
          'black',
        ],
        // borderWidth: 1,
      },
    ],
  };

  return (
    <div className='border border-slate-800 rounded-xl m-2'>
      <Pie data={combinedData} />
    </div>
  );
};

export default BarChart;
