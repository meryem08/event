"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export const RegisterForm = () => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [organization, setOrganization] = useState("")
  const [password, setPassword] = useState("")
  const [profile_photo, setprofile_photo] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState("")
  const [error, setError] = useState(null)


  const handleFileChange = (e) => {
    setprofile_photo(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault()

    try {

      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('birthday', birthday);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('organization', organization);
      formData.append('password', password);
      formData.append('profile_photo', profile_photo);
      formData.append('password_confirmation', password_confirmation);

      const res = await fetch(
        "http://127.0.0.1:8000/api/eventManager/register",
        {
          method: "POST",
          
          headers: {
            // "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: formData,
        },
      )
      if (res.ok) {
        const result = await res.json()
        const token = result.token
        localStorage.setItem("token", token)

        window.location.href = "/eventManager/dashboard"
      } else {
        setError((await res.json()).error)
      }
    } catch (error) {
      setError(error?.message)
    }
    // console.log()
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4 w-full sm:w-[400px]">
      <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="first_name">First Name</Label>
          <Input
            className="w-full"
            required
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            id="first_name"
            type="text"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            className="w-full"
            required
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            id="last_name"
            type="text"
          />
        </div>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="birthday">Birthday</Label>
        <Input
          className="w-full"
          required
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          id="birthday"
          type="date"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Organization</Label>
        <Input
          className="w-full"
          required
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          id="organization"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">profile photo</Label>
        <Input
          className="w-full"
          required
          onChange={handleFileChange}
          id="profile_photo"
          name="profile_photo"
          type="file"
        />
      </div>
      
      </div>
      
      {/* <div className="flex justify-between w-1/3">
        <Label>
          <input
            type="checkbox"
            value="male"
            checked={gender === "male"}
            onChange={handleCheckboxChange}
          />
          Male
        </Label>

        <Label>
          <input
            type="checkbox"
            value="female"
            checked={gender === "female"}
            onChange={handleCheckboxChange}
          />
          Female
        </Label>
      </div> */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input
          className="w-full"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          type="number"
        />
      </div>
      <div className="flex align-items space-x-2">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="passwordConfirmation">Confirm your password</Label>
          <Input
            className="w-full"
            required
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            id=""
            type="password"
          />
        </div>
      </div>
      {/* {error && <Alert>{error}</Alert>} */}
      <div className="w-full">
        <Button className="w-full" size="lg" type="submit">
          Register
        </Button>
      </div>
    </form>
  )
}
