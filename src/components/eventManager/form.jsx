"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

// export const RegisterForm = () => {
//   const [first_name, setFirstName] = useState("")
//   const [last_name, setLastName] = useState("")
//   // const [birthday, setBirthday] = useState("")
//   const [email, setEmail] = useState("")
//   const [phone, setPhone] = useState("")
//   const [organization, setOrganization] = useState("")
//   const [password, setPassword] = useState("")
//   const [profile_photo, setprofile_photo] = useState('')
//   const [password_confirmation, setPassword_confirmation] = useState("")
//   const [error, setError] = useState(null)


//   const handleFileChange = (e) => {
//     setprofile_photo(e.target.files[0]);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault()

//     try {

//       const formData = new FormData();
//       formData.append('first_name', first_name);
//       formData.append('last_name', last_name);
//       // formData.append('birthday', birthday);
//       formData.append('email', email);
//       formData.append('phone', phone);
//       formData.append('organization', organization);
//       formData.append('password', password);
//       formData.append('profile_photo', profile_photo);
//       formData.append('password_confirmation', password_confirmation);

//       const res = await fetch(
//         "http://127.0.0.1:8000/api/eventManager/register",
//         {
//           method: "POST",
          
//           headers: {
//             // "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: formData,
//         },
//       )
//       if (res.ok) {
//         const result = await res.json()
//         const token = result.token
//         localStorage.setItem("token", token)

//         window.location.href = "/eventManager/dashboard"
//       } else {
//         setError((await res.json()).error)
//       }
//     } catch (error) {
//       setError(error?.message)
//     }
//     // console.log()
//   }
// import React, { useState } from 'react';
// import { Input, Label, Button } from 'your-ui-library'; // Import your UI components

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        organization: '',
        profile_photo: null,
        phone: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profile_photo: e.target.files[0] });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await fetch('http://127.0.0.1:8000/api/eventManager/register', {
                method: 'POST',
                headers: {
                  Accept: "application/json",
                  },
                body: formDataToSend,
            });

            const responseData = await response.json();

            if (!response.ok) {
                if (response.status === 422) {
                    // Handle validation errors
                    setErrors(responseData.errors);
                } else {
                    // Handle other errors (e.g., bad request)
                    console.error('Error:', responseData.error);
                }
            } else {
                // Extract token from response data
            const token = responseData.token;
            // Store token in local storage
            localStorage.setItem("token", token);
            // Redirect to dashboard
            window.location.href = "/eventManager/dashboard";

                  window.location.href = "/eventManager/dashboard"
                // Optionally redirect or show success message
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setLoading(false);
    };

  return (
    // <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4 w-full sm:w-[400px]">
    //   <div className="flex align-items space-x-2">
    //     <div className="grid w-full items-center gap-1.5">
    //       <Label htmlFor="first_name">First Name</Label>
    //       <Input
    //         className="w-full"
    //         // required
    //         value={formData.first_name}
    //         onChange={handleChange}
    //         id="first_name"
    //         type="text"
    //       />
    //     </div>
    //     <div className="grid w-full items-center gap-1.5">
    //       <Label htmlFor="last_name">Last Name</Label>
    //       <Input
    //         className="w-full"
    //         // required
    //         value={formData.last_name}
    //         onChange={handleChange}
    //         id="last_name"
    //         type="text"
    //       />
    //     </div>
    //   </div>
    //   {/* <div className="grid w-full items-center gap-1.5">
    //     <Label htmlFor="birthday">Birthday</Label>
    //     <Input
    //       className="w-full"
    //       required
    //       value={birthday}
    //       onChange={(e) => setBirthday(e.target.value)}
    //       id="birthday"
    //       type="date"
    //     />
    //   </div> */}
    //   <div className="grid w-full items-center gap-1.5">
    //     <Label htmlFor="email">Email</Label>
    //     <Input
    //       className="w-full"
    //       // required
    //       value={formData.email}
    //       onChange={handleChange}
    //       id="email"
    //       type="email"
    //     />
    //     {errors.first_name && <p className="error">{errors.first_name[0]}</p>}
    //   </div>
    //   <div className="flex align-items space-x-2">
    //     <div className="grid w-full items-center gap-1.5">
    //     <Label htmlFor="email">Organization</Label>
    //     <Input
    //       className="w-full"
    //       // required
    //       value={formData.organization}
    //       onChange={handleChange}
    //       id="organization"
    //       type="text"
    //     />
    //   </div>
    //   <div className="grid w-full items-center gap-1.5">
    //     <Label htmlFor="email">profile photo</Label>
    //     <Input
    //       className="w-full"
    //       // required
    //       onChange={handleFileChange}
    //       id="profile_photo"
    //       name="profile_photo"
    //       type="file"
    //     />
    //   </div>
      
    //   </div>
      
    //   {/* <div className="flex justify-between w-1/3">
    //     <Label>
    //       <input
    //         type="checkbox"
    //         value="male"
    //         checked={gender === "male"}
    //         onChange={handleCheckboxChange}
    //       />
    //       Male
    //     </Label>

    //     <Label>
    //       <input
    //         type="checkbox"
    //         value="female"
    //         checked={gender === "female"}
    //         onChange={handleCheckboxChange}
    //       />
    //       Female
    //     </Label>
    //   </div> */}
    //   <div className="grid w-full items-center gap-1.5">
    //     <Label htmlFor="phone">Phone</Label>
    //     <Input
    //       className="w-full"
    //       // required
    //       value={formData.phone}
    //       onChange={handleChange}
    //       id="phone"
    //       type="number"
    //     />
    //   </div>
    //   <div className="flex align-items space-x-2">
    //     <div className="grid w-full items-center gap-1.5">
    //       <Label htmlFor="password">Password</Label>
    //       <Input
    //         className="w-full"
    //         // required
    //         value={formData.password}
    //         onChange={handleChange}
    //         id="password"
    //         type="password"
    //       />
    //     </div>

    //     <div className="grid w-full items-center gap-1.5">
    //       <Label htmlFor="passwordConfirmation">Confirm your password</Label>
    //       <Input
    //         className="w-full"
    //         // required
    //         value={formData.password_confirmation}
    //         onChange={handleChange}
    //         id=""
    //         type="password"
    //       />
    //     </div>
    //   </div>
    //   {/* {error && <Alert>{error}</Alert>} */}
    //   <div className="w-full">
    //     <Button className="w-full" size="lg" type="submit">
    //       Register
    //     </Button>
        
    //   </div>
    // </form>
    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4 w-full sm:w-[400px]">
    <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input
                className="w-full"
                required
                value={formData.first_name}
                onChange={handleChange}
                id="first_name"
                type="text"
                name="first_name"
            />
            {errors.first_name && <p className="text-base font-normal text-red-500">{errors.first_name[0]}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
                className="w-full"
                required
                value={formData.last_name}
                onChange={handleChange}
                id="last_name"
                type="text"
                name="last_name"
            />
            {errors.last_name && <p className="text-base font-normal text-red-500">{errors.last_name[0]}</p>}
        </div>
    </div>
    <div className="flex align-items space-x-2">

    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="user_name">User name </Label>
        <Input
            className="w-full"
            required
            value={formData.user_name}
            onChange={handleChange}
            id="user_name"
            type="user_name"
            name="user_name"
        />
        {errors.user_name && <p className="text-base font-normal text-red-500">{errors.user_name[0]}</p>}
    </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
            className="w-full"
            required
            value={formData.email}
            onChange={handleChange}
            id="email"
            type="email"
            name="email"
        />
        {errors.email && <p className="text-base font-normal text-red-500">{errors.email[0]}</p>}
    </div>
    </div>
    <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="organization">Organization</Label>
            <Input
                className="w-full"
                required
                value={formData.organization}
                onChange={handleChange}
                id="organization"
                type="text"
                name="organization"
            />
            {errors.organization && <p className="text-base font-normal text-red-500">{errors.organization[0]}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="profile_photo">Profile Photo</Label>
            <Input
                className="w-full"
                required
                onChange={handleFileChange}
                id="profile_photo"
                name="profile_photo"
                type="file"
            />
            {errors.profile_photo && <p className="text-base font-normal text-red-500">{errors.profile_photo[0]}</p>}
        </div>
    </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input
            className="w-full"
            required
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            type="number"
            name="phone"
        />
        {errors.phone && <p className="text-base font-normal text-red-500">{errors.phone[0]}</p>}
    </div>
    <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
                className="w-full"
                required
                value={formData.password}
                onChange={handleChange}
                id="password"
                type="password"
                name="password"
            />
            {errors.password && <p className="text-base font-normal text-red-500">{errors.password[0]}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input
                className="w-full"
                required
                value={formData.password_confirmation}
                onChange={handleChange}
                id="password_confirmation"
                type="password"
                name="password_confirmation"
            />
            {errors.password_confirmation && <p className="text-base font-normal text-red-500">{errors.password_confirmation[0]}</p>}
        </div>
    </div>
    <div className="w-full">
        <Button className="w-full" size="lg" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
        </Button>
    </div>
</form>

  )
}
