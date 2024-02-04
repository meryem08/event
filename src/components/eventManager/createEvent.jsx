import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Packages from '../Dashboard/packages'
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

// // console.log(formData);
function MyForm() {
  const [formData, setFormData] = useState({
    eventTitle: '',
    country: '',
    tags: '',
    sector: '',
    summary: '',
    description: '',
    startingDate: '',
    endingDate: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, type } = e.target;
  
    if (type === 'file') {
      const selectedFile = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedFile,
      }));
    } else {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const res = await fetch("http://127.0.0.1:8000/api/eventCreate", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        window.location.href = "/eventManager/dashboard";
      } else {
        const errorData = await res.json();
        console.error("Error submitting form:", errorData.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
 
  return (
    <div className='flex justify-between'>
      <Sidebar className="relative"/>
  <div  className='flex justify-around border border-stone-400 rounded-3xl w-[80%] m-12'>
        <div className='w-[50%] p-12 border border-stone-400 rounded-3xl bg-gradient-to-tr from-pink-300 via-sky-300 via-40% to-purple-300 '>
          <p className='text-3xl mt-40'>
          Provide us with more informations
           <span > about your event !</span>

          </p>
        </div>

    <form onSubmit={handleSubmit} encType="multipart/form-data" className='p-6'>
    
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="eventTitle">Event title</Label>
        <Input
          className="w-full"
          required
          value={formData.eventTitle}
          onChange={handleInputChange}
          id="eventTitle"
          name="eventTitle"
          type="text" 
          
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="country">Country</Label>
        <Input
          className="w-full"
          required
          value={formData.country}
          onChange={handleInputChange}
          id="Country"
          name="country"
          type="text" 
          
        />
      </div>
      <div>
      <Label htmlFor="sector">Sector</Label>
      <select         
              name='sector'
              required
              className='rtl:ml-0 md:w-[34rem] lg:w-[27rem] w-full  md:ml-[7.4rem] rtl:md:mr-[6.2rem] rtl:md:min-w-[21.5rem] rtl:md:w-[28.5rem] rtl:lg:w-[21.5rem] border border-gray-300 h-12 bg-white pl-4 rounded-3xl p-2 focus:outline-none focus:border-Teal focus:ring-Teal invalid:border-red-500 invalid:text-red-500 peer cursor-pointer'
              value={formData.sector}
              onChange={handleInputChange}
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
          placeholder ="chose a file"
          className="w-full"
          value={formData.photo}
          onChange={handleInputChange}
          // onChange={(e) => setPhoto(e.target.value)}
          // id="photo"
          name="photo"
          type="file"
        />
      </div>

        <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="tags">Tags</Label>
                <Input
                className="w-full"
                required
                value={formData.tags}
                onChange={handleInputChange}
                // onChange={(e) => setTags(e.target.value)}
                id="tags"
                name = "tags"
                type="text"
                />
            </div>
            
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="summary">Summary</Label>
        <Input
          className="w-full"
          value={formData.summary}
          onChange={handleInputChange}
          // onChange={(e) => setSummary(e.target.value)}
          name ="summary"
          type="text"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description" id="Description">Description</Label>
        <Input
          className="w-full"
          required
          value={formData.description}
          onChange={handleInputChange}
          // onChange={(e) => setDescription(e.target.value)}
          id="Description"
          name="description"
          type="text"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="startingDate">Starting Date</Label>
        <Input required
          value={formData.startingDate}
          onChange={handleInputChange}
          // onChange={(e) => setStartingDate(e.target.value)}
          id="startingDate"
          name="startingDate"
          type="date"/>
          
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="endingDate">Ending Date</Label>
        <Input required
          value={formData.endingDate}
          onChange={handleInputChange}
          // onChange={(e) => setEndingDate(e.target.value)}
          id="endingDate"
          name = "endingDate"
          type="date"/>
      </div>

        <Button type="submit">Submit</Button>

        <div className="w-full">
     
      </div>
      
    </form>
    </div>
    </div>
  );
}

export default MyForm;
