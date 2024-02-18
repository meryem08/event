// import React, { useState, useEffect } from "react"


// export const EditEvent({ visible, onClose }) {
//     const [eventTitle, setEventTitle] = useState('');
//     const [country, setCountry] = useState('');
//     const [tags, setTags] = useState('');
    
//     const [sector, setSector] = useState('');
//     const [photo, setPhoto] = useState('');
//     const [summary, setSummary] = useState('');
//     const [description, setDescription] = useState('');
//     const [startingDate, setStartingDate] = useState('');
//     const [endingDate, setEndingDate] = useState('');
  
  
//     const [error, setError] = useState(null);
  
//     const onSubmit = async (e) => {
//       e.preventDefault();
// }

// try {
//     const res = await fetch(`http://127.0.0.1:8000/api/eventManager/update`, {
//       method: 'POST',
//       body: JSON.stringify({
//         first_name,
//         last_name,
//         birthday,
//         // gender,
//         email,
//         phone,
//         password,
//         password_confirmation,
//       }),
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });
//     if (res.ok) {
//       window.location.href = '/eventManager/account';
//     } else {
//       setError((await res.json()).error);
//     }
//   } catch (error) {
//     setError(error?.message);
//   }
//   console.log(error)
// };

