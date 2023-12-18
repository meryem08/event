import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function register() {
  return (
    <div>
        <form onSubmit={onSubmit} className="space-y-4 w-full sm:w-[400px]">
        {/* <div className="flex align-items space-x-2"> */}
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">Name</Label>
            <Input
            className="w-full"
            required
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
            id="name"
            type="text"
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
                <Label htmlFor="password_confirmation">Confirm your password</Label>
                <Input
                className="w-full"
                required
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                id="password_confirmation"
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
    </div>
  )
}

export default register ;
