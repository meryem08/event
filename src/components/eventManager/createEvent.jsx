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
import Image from 'next/image'
import { Textarea } from '../ui/textarea'

// import React, { useState } from "react";  
import { TagsInput } from "react-tag-input-component"; 
 import Sidebar from './sideBar'
import Layout from '../exhibitor/Layout'

export const MyForm = () => {
  const [eventTitle, setEventTitle] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [tags, setTags] = useState([]);
  const [sector, setSector] = useState("")
  const [summary, setSummary] = useState("")
  const [description, setDescription] = useState("")
  const [startingDate, setStartingDate] = useState("")
  const [endingDate, setEndingDate] = useState("")
  const [photo, setPhoto] = useState("")
  const [error, setError] = useState(null)

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData();
      formData.append('eventTitle', eventTitle);
      formData.append('country', country);
      formData.append('city', city);
      formData.append('address', address);
      // formData.append('tags', tags);
      formData.append('sector', sector);
      formData.append('summary', summary);
      formData.append('description', description);
      formData.append('startingDate', startingDate);
      formData.append('endingDate', endingDate);
      formData.append('photo', photo);
      formData.append('tags', tags.join(','));

      // Append photo only if it exists

      

      const res = await fetch(
       "http://127.0.0.1:8000/api/eventCreate",
        {
          method: "POST",
          body: formData,
          headers: {
            // "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,

          },
        },
      )
      
      if (res.ok) {
        const result = await res.json();
        window.location.href = "/eventManager/events"
      } else {
        const responseData = await res.json();
        if (res.status === 422) {
          // Handle validation errors
          setError(responseData.errors);
        } else {
          // Handle other errors
          setError(responseData.error);
        }
      }
    }
    catch (error) {
      setError(error?.message)
      console.log(error)
    }
    
  }



  return (
  <>
    <div className='flex justify-between'>
      
      <div  className='flex justify-around border border-stone-200 rounded-3xl w-[90%] m-12'>
        <div className='hidden lg:block text-blue-500 font-semibold w-[50%] p-12 border border-stone-400 rounded-3xl  '>
          <p className=' flex items-center justify-center text-xl'>
          Provide us with more 
          </p>
          <p className=' flex items-center justify-center text-xl'>
            informations about 
          </p>
          <span className=' flex items-center justify-center text-xl'>your event  !</span>
          <Image
              src="/pic3.png"
              alt="welcom"
              width={650}
              height={500}
              
            />
        </div>

    <form onSubmit={onSubmit} className='p-6 w-[50%]' encType="multipart/form-data" >
    
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
         {error && error.eventTitle && ( <p className="text-red-500 font-medium">{error.eventTitle[0]}</p>)}
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
        {error && error.country && ( <p className="text-red-500 font-medium">{error.country[0]}</p>)}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="country">City</Label>
        <Input
          className="w-full"
          
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="city"
          name="city"
          type="text" 
          
        />
        {error && error.city && ( <p className="text-red-500 font-medium">{error.city[0]}</p>)}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="country">Address</Label>
        <Input
          className="w-full"
          
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="address"
          name="address"
          type="text" 
          
        />
        {error && error.address && ( <p className="text-red-500 font-medium">{error.address[0]}</p>)}
      </div>
      <div>
      <Label htmlFor="sector">Sector</Label>
      <select         
              name="sector"
              
              className=' w-full border border-gray-300 rounded-3xl p-2 focus:outline-none focus:border-Teal focus:ring-Teal invalid:border-red-500 invalid:text-red-500 peer cursor-pointer'
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
                  Technology
              </option>
              <option value='Health'>
                  Health 
              </option>
              <option value='Arts & crafts'>
                  Arts & crafts
              </option>
              <option value='Environment & waste'>
                  Environment & waste
              </option>
              <option value='Fashion & beauty'>
                  Fashion & beauty
              </option>
              <option value='Medical & Pharma'>
                  Medical & Pharma
              </option>
              <option value='Travel & Tourism'>
                  Travel & Tourism
              </option>

          </select>
          {error && error.sector && ( <p className="text-red-500 font-medium">{error.sector[0]}</p>)}
          </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Input
          placeholder ="chose a photo"
          className="w-full"
          name='photo' type='file' onChange={handleFileChange}
          id="photo"
        />
        {error && error.photo && ( <p className="text-red-500 font-medium">{error.photo[0]}</p>)}
      </div>

        {/* <div className="grid w-full items-center gap-1.5">
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
            </div> */}
            {/* <div> 
      <h1>Add Tags</h1> 
      <pre>{JSON.stringify(tags)}</pre> 
      <TagsInput 
        value={tags} 
        onChange={setTags} 
        name="tags"
        placeHolder="tags"
      /> 
      <em>Enter tags</em> 
      </div> */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          className="w-full"
          value={summary}
          // onChange={handleInputChange}
          onChange={(e) => setSummary(e.target.value)}
          name ="summary"
          type="text"
          
          max="2000"
        />
        {error && error.summary && ( <p className="text-red-500 font-medium">{error.summary[0]}</p>)}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description" id="Description">Description</Label>
        <Textarea
          className="w-full"
          value={description}
          // onChange={handleInputChange}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
          type="text"
        />
        {error && error.description && ( <p className="text-red-500 font-medium">{error.description[0]}</p>)}
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
          {error && error.startingDate && ( <p className="text-red-500 font-medium">{error.startingDate[0]}</p>)}
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
          {error && error.endingDate && ( <p className="text-red-500 font-medium">{error.endingDate[0]}</p>)}
      </div>

        <div className="mb-4">
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            create event
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default MyForm
