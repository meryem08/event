import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function AdminPackage() {
  const [packageForm, setPackageForm] = useState({
    title: '',
    service: [],
    price: '',
  });

  // const handleInputChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setPackageForm((prevData) => ({
  //     ...prevData,
  //     [name]: type === 'file' ? files[0] : value,
  //   }));
  // };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
  
    setPackageForm((prevData) => ({
      ...prevData,
      [name]: type === 'textarea' ? value.split('\n') : value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(packageForm);

    try {
      const formDataToSend = new FormData();
      Object.entries(packageForm).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('http://127.0.0.1:8000/api/createPackage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'        
        },
        body: formDataToSend,
      });

      if (response.ok) {
        // Redirect or handle success as needed
        window.location.href = '/account';
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-6'>
        <div className=''>
          <Label htmlFor='eventTitle'>Title</Label>
          <Input
            className='w-full'
            required
            value={packageForm.title}
            onChange={handleInputChange}
            name='title'
            type='text'
          />
        </div>
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='service'>Service</Label>
          <Input
            className='w-full'
            required
            value={packageForm.service}
            onChange={handleInputChange}
            name='service'
          />
        </div>


        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='price'>Price</Label>
          <Input
            className='w-full'
            required
            value={packageForm.price}
            onChange={handleInputChange}
            name='price'
            type='text'
          />
        </div>

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default AdminPackage;
