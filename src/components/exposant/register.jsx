import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });

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

      const response = await fetch('http://127.0.0.1:8000/api/createExposant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected content-type
          // 'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        // Redirect or handle success as needed
        // window.location.href = '/eventManager/pending';
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
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-full sm:w-[400px]">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="first_name">Name</Label>
          <Input
            className="w-full"
            required
            value={formData.name}
            onChange={handleInputChange}
            id="name"
            type="text"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            className="w-full"
            required
            value={formData.email}
            onChange={handleInputChange}
            id="email"
            type="email"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            className="w-full"
            required
            value={formData.phone}
            onChange={handleInputChange}
            id="phone"
            type="text"
          />
        </div>

        <div className="flex align-items space-x-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              className="w-full"
              required
              value={formData.password}
              onChange={handleInputChange}
              id="password"
              type="password"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password_confirmation">Confirm your password</Label>
            <Input
              className="w-full"
              required
              value={formData.password_confirmation}
              onChange={handleInputChange}
              id="password_confirmation"
              type="password"
            />
          </div>
        </div>

        <div className="w-full">
          <Button className="w-full" size="lg" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;