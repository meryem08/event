// import React, { useState , useEffect } from 'react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Textarea } from "@/components/ui/textarea"


// export default function EditEvent({id}) {

  //   const [modal, setModal] = useState(false);

  //   const [eventTitle, setEventTitle] = useState("")
  //   const [country, setCountry] = useState("")
  //   const [tags, setTags] = useState([])
  //   const [sector, setSector] = useState("")
  //   const [summary, setSummary] = useState("")
  //   const [description, setDescription] = useState("")
  //   const [startingDate, setStartingDate] = useState("")
  //   const [endingDate, setEndingDate] = useState("")
  //   const [photo, setPhoto] = useState("")
  //   const [error, setError] = useState(null)

  // const toggleModal = () => {
  //   setModal(!modal); 
  // };

  // const handleFileChange = (e) => {
  //   setPhoto(e.target.files[0]);
  // };


  // const handlePost = async () => {
  //   // e.preventDefault();

  //   try {
  //       const formData = new FormData();
  //       formData.append('eventTitle', eventTitle);
  //       formData.append('country', country);
  //       formData.append('tags', tags.join(',')); 
  //       formData.append('sector', sector);
  //       formData.append('summary', summary);
  //       formData.append('description', description);
  //       formData.append('startingDate', startingDate);
  //       formData.append('endingDate', endingDate);
  //       formData.append('photo', photo);
        

  //     const response = await fetch(`http://127.0.0.1:8000/api/event/update/${id}`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         // "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: formData,
  //     });
      
  //     if (response.ok) {
  //       // Successful registration: redirect the user
  //       window.location.href = '/eventManager/events';
  //     } else {
  //       // Registration failed: display the error message
  //       const errorMessage = await response.text();
  //       console.error(errorMessage);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred during the registration request.', error);
  //   }

  //   console.log(formData);
  // };

  // useEffect(() => {
  //   // Handle updates when 'id' changes
  //   console.log('ID changed:', id);
  // }, [id]);


//   const EditEvent = ({ id }) => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [formData, setFormData] = useState({
//       eventTitle: '',
//       country: '',
//       sector: '',
//       summary: '',
//       description: '',
//       startingDate: '',
//       endingDate: '',
//       tags: [],
//       photo: null,
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleFileChange = (e) => {
//       const file = e.target.files[0];
//       setFormData({
//         ...formData,
//         photo: file,
//       });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       try {
//         const formData = new FormData();
//         for (const key in formData) {
//           formData.append(key, formData[key]);
//         }
//         const response = await fetch(`http://127.0.0.1:8000/api/event/update/${id}`, {
//           method: 'POST',
//           headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                     // "Content-Type": "application/json",
//                     // Accept: "application/json",
//                   },
//           body: formData,
//         });
//         if (response.ok) {
//                 // Successful registration: redirect the user
//                 window.location.href = '/eventManager/events';
//               } else {
//                 // Registration failed: display the error message
//                 const errorMessage = await response.text();
//                 console.error(errorMessage);
//               }
//         console.log('Event updated successfully');
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//   const toggleModal = () => {
//   setModal(!modal); 
//   };
  
//   const [modal, setModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={toggleModal}>Edit</Button>
//        {modal && ( 
//         <div className='w-screen h-screen fixed top-0 right-0 bottom-0 left-0'>
//           <div
//             onClick={toggleModal}
//             className='bg-slate-400 opacity-70 w-screen h-screen fixed top-0 right-0 bottom-0 left-0 '
//           ></div>
//           <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
//             <div className='bg-white m-6 p-6 rounded-lg'>
//               {/* <h3 className='text-lg font-semibold '>Product Details</h3> */}
//               <form onSubmit={handleSubmit}>
//                 <div className='flex justify-start p-2'>
//                   <div className='pr-2'>
//                     <Label>Title  </Label>
//                     <Input  onChange={handleChange} />
//                   </div>
//                   {/* <div>
//                     <Label>Country</Label>
//                     <Input
//                       onChange={handleChange}
//                     />
//                   </div> */}
//                 </div>

                
//                 {/* <div className='flex'>
                    
//                 <div className='p-2'>
//                   <Label>tags</Label>
//                   <Input onChange={handleChange} />
//                 </div>
//                 <div className='p-2'>
//                   <Label>sector</Label>
//                   <Input onChange={handleChange} />
//                 </div>

//                 </div> */}
//                 {/* <div className='p-2'>
//                   <Label>Photo</Label>
//                   <Input type="file" name="photo" onChange={handleFileChange} />
//                 </div>
//                 <div className='p-2'>
//                   <Label>description</Label>
//                   <div>
//                      <Textarea onChange={handleChange}/>
//                   </div>
//                 </div>

//                 <div className='p-2'>
//                   <Label>summary</Label>
//                   <Textarea onChange={handleChange} />
//                 </div>
  
//                 <div className='flex'>
//                 <div className='p-2'>
//                   <Label>Starting Date</Label>
//                   <Input type= 'date' onChange={handleChange} />
//                 </div>
//                 <div className='p-2'>
//                   <Label>Ending Date</Label>
//                   <Input type= 'date' onChange={handleChange}/>
//                 </div>
//                 </div> */}
//                 <Button type="submit" disabled={loading}>Edit</Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )} 
//     </div>
//   );
// }
// export default EditEvent;

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const EditEvent = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    eventTitle: '',
    country: '',
    sector: '',
    summary: '',
    description: '',
    startingDate: '',
    endingDate: '',
    tags: [],
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch(`http://127.0.0.1:8000/api/event/update/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataToSend,
      });
      if (response.ok) {
        window.location.href = '/eventManager/events';
      } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button onClick={toggleModal}>Edit</Button>
      {modal && (
        <div className='w-screen h-screen fixed top-0 right-0 bottom-0 left-0'>
          <div
            onClick={toggleModal}
            className='bg-slate-400 opacity-70 w-screen h-screen fixed top-0 right-0 bottom-0 left-0 '
          ></div>
          <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <div className='bg-white m-6 p-6 rounded-lg'>
              <form onSubmit={handleSubmit}>
                <div className='flex justify-start p-2'>
                  <div className='pr-2'>
                    <Label>Title</Label>
                    <Input name="eventTitle" onChange={handleChange} />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input name="country" onChange={handleChange} />
                  </div>
                </div>
                 <div className='flex'>
                    
                 <div className='p-2'>
                   <Label>tags</Label>
                   <Input name= "tags" onChange={handleChange} />
                 </div>
                 <div className='p-2'>
                   <Label>sector</Label>
                   <Input name= "sector" onChange={handleChange} />
                 </div>

                 </div>
                {/* <div className='p-2'>
                  <Label>Photo</Label>
                  <Input type="file" name="photo" onChange={handleFileChange} />
                </div> */}
                <div className='p-2'>
                  <Label>Description</Label>
                  <Input name="description" onChange={handleChange} />
                </div>

                <div className='p-2'>
                  <Label>Summary</Label>
                  <Input name="summary" onChange={handleChange} />
                </div>

                <div className='flex'>
                  <div className='p-2'>
                    <Label>Starting Date</Label>
                    <Input type="date" name="startingDate" onChange={handleChange} />
                  </div>
                  <div className='p-2'>
                    <Label>Ending Date</Label>
                    <Input type="date" name="endingDate" onChange={handleChange} />
                  </div>
                </div>
                <Button type="submit" disabled={loading}>Edit</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditEvent;
