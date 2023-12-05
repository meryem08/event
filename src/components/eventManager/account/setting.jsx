

'use client'

// import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { Calendar } from 'lucide-react'
// import { signIn } from 'next-auth/react'
import { useState } from 'react'


export const EditForm = () => { 
  
  const [first_name, setFisrtName] = useState('')
  const [last_name, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCpassword] = useState('')
  
  const [error, setError] = useState(null)


  //   const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"
  //   try {
  //     const res = await fetch(`http://127.0.0.1:8000/api/updateEvent/1`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //     // console.log(res)
  //     if (!res.ok) {
  //       throw new Error("Réponse de l'API non valide")
  //     }
  //     const json = await res.json()
  //     // console.log(json)

  //     setExposants(json)
  //   } catch (error) {
  //     console.error("Une erreur s'est produite :", error)
  //   }
  // }
  

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = "2|RV9PdKpfS1J7Mfkfcfau9PA0l2PTveLVMMTvoVcu0558ccf0"

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/updateEvent/1`, {
        method: "POST",
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
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
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
    <div>
        
        <form onSubmit={onSubmit} className="space-y-4 lg:w-90">
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
        <Button className="w-full" size="lg" type="submit">
          save changes
        </Button>
      </div>
    </form>
    </div>
  )
}

