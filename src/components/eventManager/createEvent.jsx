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
  photo: null, // Use null for file input
  // Add other fields as needed
});
// console.log("hello");
// console.log(formData);
const [eventManagers, setEventManagers] = useState([])

const fetchEventManagers = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/showUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error("Réponse de l'API non valide")
    }

    const json = await res.json()
    setEventManagers(json)
    console.log(json)
  } catch (error) {
    setError(error.message)
    console.error("Une erreur s'est produite :", error)
  }
}

const handleInputChange = (e) => {
  const { name, value, type, files } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === 'file' ? files[0] : value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);

  try {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const response = await fetch('http://127.0.0.1:8000/api/eventCreate', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: formDataToSend,
    });

    if (response.ok) {
      // Redirect or handle success as needed
      window.location.href = '/eventManager/pending';
    } else {
      // Handle error response
      // const errorData = await response.json();
      // setError(errorData.error);
      console.error('Error submitting form:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting form:', error.message);
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

    <form onSubmit={handleSubmit} className='p-6'>
    
      <div className=''>
        <Label htmlFor="eventTitle">id</Label>

        <select id="id" name="id">
  <option value="eventManagers.id">{eventManagers.id}</option>
  </select>



        </div>
      
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="country">Country</Label>
        <Input
          className="w-full"
          required
          value={formData.country}
          onChange={handleInputChange}
          // onChange={(e) => setCountry(e.target.value)}
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
          // value={formData.photo}
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


        {/* <div className='my-1 flex items-center'>
        <input
            type='checkbox'
            name='agreeToTerms'
            id='agreeToTerms'
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="border-spacing-0"
        />

          <Label htmlFor='agreeToTerms'>I Agree to Terms of Services</Label>
        </div> */}
        {/* <Popover>
          <PopoverTrigger>Submit</PopoverTrigger>
          <PopoverContent>
            <Packages/>
          </PopoverContent>
        </Popover> */}

        <Button type="submit">Submit</Button>

      
      
      
        <div className="w-full">
     
      </div>

    
        {/* Field 2:
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
        />
      
      {/* Add other form fields as needed */}
      
    </form>
    </div>
  );
}

export default MyForm;
