import React, { useState , useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from "@/components/ui/textarea"


export default function EditEvent({id}) {

    const [modal, setModal] = useState(false);

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

  const toggleModal = () => {
    setModal(!modal); 
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };


  const handlePost = async () => {
    // e.preventDefault();

    try {
        const formData = new FormData();
        formData.append('eventTitle', eventTitle);
        formData.append('country', country);
        formData.append('tags', tags);
        formData.append('sector', sector);
        formData.append('summary', summary);
        formData.append('description', description);
        formData.append('startingDate', startingDate);
        formData.append('endingDate', endingDate);
        formData.append('photo', photo);
  

      const response = await fetch(`http://127.0.0.1:8000/api/event/update/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // Successful registration: redirect the user
        window.location.href = '/eventManager/events';
      } else {
        // Registration failed: display the error message
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('An error occurred during the registration request.', error);
    }
  };

  useEffect(() => {
    // Handle updates when 'id' changes
    console.log('ID changed:', id);
  }, [id]);

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
              {/* <h3 className='text-lg font-semibold '>Product Details</h3> */}
              <form>
                <div className='flex justify-start p-2'>
                  <div className='pr-2'>
                    <Label>Title</Label>
                    <Input value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                
                <div className='flex'>
                    
                <div className='p-2'>
                  <Label>tags</Label>
                  <Input value={tags} onChange={(e) => setTags(e.target.value)} />
                </div>
                <div className='p-2'>
                  <Label>sector</Label>
                  <Input value={sector} onChange={(e) => setSector(e.target.value)} />
                </div>

                </div>
                <div className='p-2'>
                  <Label>Photo</Label>
                  <Input name='photo' type='file' onChange={handleFileChange} />
                </div>
                <div className='p-2'>
                  <Label>description</Label>
                  <div>
                     <Textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </div>
                 

                  {/* <Input value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                </div>

                <div className='p-2'>
                  <Label>summary</Label>
                  <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
                </div>
  
                <div className='flex'>
                <div className='p-2'>
                  <Label>Starting Date</Label>
                  <Input type= 'date' value={startingDate} onChange={(e) => setStartingDate(e.target.value)} />
                </div>
                <div className='p-2'>
                  <Label>Ending Date</Label>
                  <Input type= 'date' value={endingDate} onChange={(e) => setEndingDate(e.target.value)} />
                </div>
                </div>
                <Button onClick={handlePost}>Edit</Button>
              </form>
            </div>
          </div>
        </div>
      )} 
    </div>
  );
}
