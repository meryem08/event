import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Packages from "../Dashboard/packages"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popOver"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


 import Sidebar from './sideBar'
import Layout from '../exhibitor/Layout'

// function MyForm() {


// const [formData, setFormData] = useState({
//   eventTitle: '',
//   country: '',
//   tags: '',
//   sector: '',
//   summary: '',
//   description: '',
//   startingDate: '',
//   endingDate: '',
//   photo: null, // Use null for file input
  
// });

// const handleInputChange = (e) => {
//   const { name, value, type, files } = e.target;

//   if (type === 'file') {
//     // Handle file input separately
//     const selectedFile = files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: selectedFile,
//       // photoName: selectedFile ? selectedFile.name : '', // Store the file name
//     }));
//   } else {
//     // Handle other input types
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/eventCreate", {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });

//     if (res.ok) {
//       window.location.href = "/eventManager/dashboard";
//     } else {
//       const errorData = await res.json();
//       setError(errorData.error);
//     }
//   } catch (error) {
//     console.error("Error submitting form:", error.message);
//     // Handle other errors if needed
//   }
// };

// function MyForm() {
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     eventTitle: '',
//     country: '',
//     tags: '',
//     sector: '',
//     summary: '',
//     description: '',
//     startingDate: '',
//     endingDate: '',
//     photo: '', // Remove this line if you don't want to handle file input
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
  
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
// console.log(formData)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/eventCreate", {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           Accept: 'application/json',
//         },
//       });

//       if (res.ok) {
//         window.location.href = "/eventManager/dashboard";
//       } else {
//         const errorData = await res.json();
//         setError(errorData.error);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error.message);
//       // Handle other errors if needed
//     }
//   };

export const MyForm = () => {
  const [eventTitle, setEventTitle] = useState("")
  const [country, setCountry] = useState("")
  const [tags, setTags] = useState("")
  const [sector, setSector] = useState("")
  const [summary, setSummary] = useState("")
  const [description, setDescription] = useState("")
  const [startingDate, setStartingDate] = useState("")
  const [endingDate, setEndingDate] = useState("")
  const [photo, setPhoto] = useState("")
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
       "http://127.0.0.1:8000/api/eventCreate",
        {
          method: "POST",
          body: JSON.stringify({
            eventTitle,
            country,
            tags,
            sector,
            summary,
            description,
            startingDate,
            endingDate,
            photo,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,

          },
        },
      )
      if (res.ok) {
        const result = await res.json();
        console.log(result)
        // const token = result.token;
        // localStorage.setItem('token', token);

  
        window.location.href = "/eventManager/events"
      } else {
        setError((await res.json()).error)
      }
    } catch (error) {
      setError(error?.message)
      console.log(error)
    }
    
  }




  return (
  <>
    <div className='flex justify-between'>
      
      <div  className='flex justify-around border border-stone-400 rounded-3xl w-[80%] m-12'>
        <div className='w-[50%] p-12 border border-stone-400 rounded-3xl bg-gradient-to-tr from-pink-300 via-sky-300 via-40% to-purple-300 '>
          <p className='text-3xl mt-40'>
          Provide us with more informations
           <span > about your event !</span>

          </p>
        </div>

    <form onSubmit={onSubmit} className='p-6' enctype="multipart/form-data" >
    
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="eventTitle">Event title</Label>
        <Input
          className="w-full"
          
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          id="eventTitle"
          name="eventTitle"
          type="text" 
          
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="country">Country</Label>
        <Input
          className="w-full"
          
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          id="country"
          name="country"
          type="text" 
          
        />
      </div>
      <div>
      <Label htmlFor="sector">Sector</Label>
      <select         
              name="sector"
              
              className='rtl:ml-0 md:w-[34rem] lg:w-[27rem] w-full  md:ml-[7.4rem] rtl:md:mr-[6.2rem] rtl:md:min-w-[21.5rem] rtl:md:w-[28.5rem] rtl:lg:w-[21.5rem] border border-gray-300 h-12 bg-white pl-4 rounded-3xl p-2 focus:outline-none focus:border-Teal focus:ring-Teal invalid:border-red-500 invalid:text-red-500 peer cursor-pointer'
              value={sector}
              onChange={(e) => setSector(e.target.value)}
          >   
              <option value='Education'>
                  Education
              </option>
              <option value='food'>
                  food
              </option>
              <option value='technology'>
                  tech
              </option>
              <option value='culture'>
                  culture
              </option>
              <option value='technology'>
                  tech
              </option>

          </select>
          </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Input
          placeholder ="chose a photo"
          className="w-full"
          value={photo}
          
          onChange={(e) => setPhoto(e.target.value)}
          // onChange={(e) => setPhoto(e.target.value)}
          id="photo"
          name="photo"
          type="file"
        />
      </div>

        <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="tags">Tags</Label>
                <Input
                className="w-full"
                
                value={tags}
                // onChange={handleInputChange}
                onChange={(e) => setTags(e.target.value)}
                id="tags"
                name = "tags"
                type="text"
                />
            </div>
            
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="summary">Summary</Label>
        <Input
          className="w-full"
          value={summary}
          // onChange={handleInputChange}
          onChange={(e) => setSummary(e.target.value)}
          name ="summary"
          type="text"
          
          max="2000"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description" id="Description">Description</Label>
        <Input
          className="w-full"
          value={description}
          // onChange={handleInputChange}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
          type="text"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="startingDate">Starting Date</Label>
        <Input 
          value={startingDate}
          // onChange={handleInputChange}
          onChange={(e) => setStartingDate(e.target.value)}
          id="startingDate"
          name="startingDate"
          type="date"/>
          
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="endingDate">Ending Date</Label>
        <Input 
          value={endingDate}
          // onChange={handleInputChange}
          onChange={(e) => setEndingDate(e.target.value)}
          id="endingDate"
          name = "endingDate"
          type="date"/>
      </div>

        {/* <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-600"
          >
            Photo de l événement
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => handleFileChange(e.target.files)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div> */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Créer l événement
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default MyForm
