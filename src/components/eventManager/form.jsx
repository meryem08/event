'use client'

// import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { Calendar } from 'lucide-react'
// import { signIn } from 'next-auth/react'
import { useState } from 'react'
// import { Alert } from '../components/ui/alert'


export const RegisterForm = () => {
  const [first_name, setFisrtName] = useState('')
  const [last_name, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCpassword] = useState('')
  const [error, setError] = useState(null)

  const handleCheckboxChange = (e) => {
    setGender(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://127.0.0.1:8000/api/eventManager/register', {
        method: 'POST',
        body: JSON.stringify({
          first_name,
          last_name,
          birthday,
          gender,
          email,
          phone,
          password,
          Cpassword,
          
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },

      })
      if (res.ok) {
        window.location.href = '/dashboard'
      } else {
        setError((await res.json()).error)
      }
    } catch (error) {
      setError(error?.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full sm:w-[400px]">
        <div className="flex align-items space-x-2">
            <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="first_name">First Name</Label>
        <Input
          className="w-full"
          required
          value={first_name}
          onChange={(e) => setFisrtName(e.target.value)}
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
          type="birthday"     
          
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
      <div className="flex justify-between w-1/3">
      <Label>
        <input
          type="checkbox"
          value="male"
          checked={gender === 'male'}
          onChange={handleCheckboxChange}
        />
        Male
      </Label>
      
      <Label>
        <input
          type="checkbox"
          value="female"
          checked={gender === 'female'}
          onChange={handleCheckboxChange}
        />
        Female
      </Label>
    </div>
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
        <Label htmlFor="Cpassword">Confirm your password</Label>
        <Input
          className="w-full"
          required
          value={Cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          id="Cpassword"
          type="password"
        />
      </div>
      </div>

        

      

      {/* {error && <Alert>{error}</Alert>} */}
      <div className="w-full">
        <Button className="w-full" size="lg" type='submit'>
          Register
        </Button>
      </div>
    </form>
  )
}


