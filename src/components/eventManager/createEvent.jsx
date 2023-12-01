import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
// import {  CalendarForm } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

  


//   function CreateEvent() {

//   const [eventTitle, setEventTitle] = useState('')
//   const [organization, setOrganization] = useState('')
//   const [country, setCountry] = useState('')
//   const [tags, setTags] = useState('')
//   const [sector, setSector] = useState('')
//   const [summary, setSummary] = useState('')
//   const [description, setDescription] = useState('')
//   const [startingDate, setStartingDate] = useState('')
//   const [endingDate, setEndingDate] = useState('')
//   const [photo, setPhoto]=useState('')
//   const [agreeToTerms, setAgreeToTerms]=useState('')
//   const [error, setError] = useState(null)

//   const onSubmit = async (e) => {
//     e.preventDefault()
//    const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"
   
//    const agreeToTermsBool = agreeToTerms === 'on';
//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/createEvent', {
//         method: 'POST',
//         body: JSON.stringify({
//           eventTitle,
//           organization,
//           country,
//           tags,
//           sector,
//           summary,
//           description,
//           startingDate,
//           endingDate,
//           photo,
//           // agreeToTerms: agreeToTermsBool, 
          
//         }),
//         headers: {
//             Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           'Accept' : 'application/json'
//         },

//       })
//       if (res.ok) {
//         window.location.href = '/pending'
//       } else {
//         setError((await res.json()).error)
//       }
//     } catch (error) {
//       setError(error?.message)
//     }
//   }


//   return (
//     <div className='w-[96%] m-6'>
//       <div className='absolute w-40 h-40 opacity-50 blur-3xl rounded-3xl bg-blue-500'></div>
//       <div className='absolute top-2/4 right-1/3 w-40 h-40 opacity-50 blur-3xl rounded-3xl bg-purple-500'></div>
//         <div className='w-full flex justify-around border border-stone-400 rounded-3xl'>
//       <div className='w-[50%] p-12 border border-stone-400 rounded-3xl '>
//         <div>

//         </div>
//       </div>
//         <form onSubmit={onSubmit} className='w-[50%] m-6 p-6 bg-white'>

//         <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="eventTitle">Event title</Label>
//         <Input
//           className="w-full"
//           required
//           value={eventTitle}
//           onChange={(e) => setEventTitle(e.target.value)}
//           id="eventTitle"
//           name="eventTitle"
//           type="text"
//         />
//         </div>
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="organization">Organization</Label>
//         <Input
//           className="w-full"
//           required
//           value={organization}
//           onChange={(e) => setOrganization(e.target.value)}
//           id="organization"
//           name="organization"
//           type="text"
//         />
//       </div>
        
        
      
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="country">Country</Label>
//         <Input
//           className="w-full"
//           required
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           id="Country"
//           name="country"
//           type="text" 
          
//         />
//       </div>


//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="sector"> Sector</Label>
//       <Select className='' name="sector">
//       <SelectTrigger className="w-[180px] rounded-3xl">
//         <SelectValue placeholder="Select a sector" onChange={(e) => setSector(e.target.value)} />
//       </SelectTrigger>
//       <SelectContent name="sector">
//         <SelectGroup>
//           <SelectLabel>Sector</SelectLabel>
//           <SelectItem  value="Education" name="Education">Education</SelectItem>
//           <SelectItem value="Technology" name ="Technology">Technology</SelectItem>
//           <SelectItem value="Food" name ="Food">Food</SelectItem>
//           <SelectItem value="Culture" name ="Culture">Culture</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//       </div>


//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="photo">Photo</Label>
//         <Input
//           placeholder ="chose a file"
//           className="w-full"
          
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//           id="photo"
//           name="photo"
//           type="file"
//         />
//       </div>

//         <div className="grid w-full items-center gap-1.5">
//                 <Label htmlFor="tags">Tags</Label>
//                 <Input
//                 className="w-full"
//                 required
//                 value={tags}
//                 onChange={(e) => setTags(e.target.value)}
//                 id="tags"
//                 name = "tags"
//                 type="text"
//                 />
//             </div>
            
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="summary">Summary</Label>
//         <Input
//           className="w-full"
//           required
//           value={summary}
//           onChange={(e) => setSummary(e.target.value)}
//           id="summary"
//           name ="summary"
//           type="text"
//         />
//       </div>

//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="description" id="Description">Description</Label>
//         <Input
//           className="w-full"
//           required
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           id="Description"
//           name="description"
//           type="text"
//         />
//       </div>

//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="startingDate">Starting Date</Label>
//         <Input required
//           value={startingDate}
//           onChange={(e) => setStartingDate(e.target.value)}
//           id="startingDate"
//           name="startingDate"
//           type="date"/>
          
//       </div>

//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="endingDate">Ending Date</Label>
//         <Input required
//           value={endingDate}
//           onChange={(e) => setEndingDate(e.target.value)}
//           id="endingDate"
//           name = "endingDate"
//           type="date"/>
//       </div>


//         {/* <div className='my-1 flex items-center'>
//         <input
//             type='checkbox'
//             name='agreeToTerms'
//             id='agreeToTerms'
//             checked={agreeToTerms}
//             onChange={(e) => setAgreeToTerms(e.target.checked)}
//             className="border-spacing-0"
//         />

//           <Label htmlFor='agreeToTerms'>I Agree to Terms of Services</Label>
//         </div> */}

//         <Button type="submit">Submit</Button>

      
      
      
//         <div className="w-full">
     
//       </div>
            
//         </form>
//       </div> 
//     </div>
//   )
// }

// export default CreateEvent



function MyForm() {
  const [formData, setFormData] = useState({
          eventTitle : '',
          organization: '',
          country: '',
          tags: '',
          sector: '',
          summary: '',
          description: '',
          startingDate: '',
          endingDate: '',
          photo: '',
    // Add other fields as needed
  });
   const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"
   const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value, // Handle file input separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); 

    try {
      const response = await fetch('http://127.0.0.1:8000/api/createEvent', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = '/pending'
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <Label htmlFor="eventTitle">Event title</Label> */}
        <Input
          className="w-full"
          required
          value={formData.eventTitle}
          // onChange={(e) => setEventTitle(e.target.value)}
          // id="eventTitle"
          onChange={handleInputChange}
          name="eventTitle"
          type="text"
        />
        </div>

       <div className="grid w-full items-center gap-1.5">
         <Label htmlFor="organization">Organization</Label>
        <Input
          className="w-full"
          required
          value={formData.organization}
          // onChange={(e) => setOrganization(e.target.value)}
          onChange={handleInputChange}
          id="organization"
          name="organization"
          type="text"
        />
      </div>
        
        
      
      <div className="grid w-full items-center gap-1.5">
        {/* <Label htmlFor="country">Country</Label> */}
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

      <select         
              name='sector'
              required
              className='rtl:ml-0 md:w-[34rem] lg:w-[27rem] w-full  md:ml-[7.4rem] rtl:md:mr-[6.2rem] rtl:md:min-w-[21.5rem] rtl:md:w-[28.5rem] rtl:lg:w-[21.5rem] border border-gray-300 h-12 bg-white pl-4 rounded-3xl p-2 focus:outline-none focus:border-Teal focus:ring-Teal invalid:border-red-500 invalid:text-red-500 peer cursor-pointer'
              value={formData.sector}
              onChange={handleInputChange}
          >   
              <option defaultValue>
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
          

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Input
          placeholder ="chose a file"
          className="w-full"
          
          value={formData.photo}
          onChange={handleInputChange}
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
        {/* <Label htmlFor="summary">Summary</Label> */}
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
        {/* <Label htmlFor="description" id="Description">Description</Label> */}
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
  );
}

export default MyForm;
