// // // import { signIn } from 'next-auth/react'
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// export const EditForm = () => {
//   const [first_name, setFisrtName] = useState('');
//   const [last_name, setLastName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [password_confirmation, setPassword_confirmation] = useState('');

//   const [error, setError] = useState(null);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://127.0.0.1:8000/api/eventManager/update`, {
//         method: 'POST',
//         body: JSON.stringify({
//           first_name,
//           last_name,
//           birthday,
//           // gender,
//           email,
//           phone,
//           password,
//           password_confirmation,
//         }),
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });
//       if (res.ok) {
//         window.location.href = '/eventManager/account';
//       } else {
//         setError((await res.json()).error);
//       }
//     } catch (error) {
//       setError(error?.message);
//     }
//     console.log(error)
//   };
  
//   return (
//     <div className='bg-white p-6 rounded-r-md border border-gray-200 shadow-lg'>
        
//         <form onSubmit={onSubmit} className="space-y-4 lg:w-90">
//         <div className="flex align-items space-x-2">
//             <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="first_name">First Name</Label>
//         <Input
//           className="w-full"
//           required
//           value={first_name}
//           onChange={(e) => setFisrtName(e.target.value)}
//           id="first_name"
//           type="text"
//         />
//       </div>
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="last_name">Last Name</Label>
//         <Input
//           className="w-full"
//           required
//           value={last_name}
//           onChange={(e) => setLastName(e.target.value)}
//           id="last_name"
//           type="text"
//         />
//       </div>
//         </div>
        
      
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="birthday">Birthday</Label>
//         <Input
//           className="w-full"
//           required
//           value={birthday}
//           onChange={(e) => setBirthday(e.target.value)}
//           id="birthday"
//           type="date"     
          
//         />
//       </div>
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="email">Email</Label>
//         <Input
//           className="w-full"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           id="email"
//           type="email"
//         />
//       </div>

//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="phone">Phone</Label>
//         <Input
//           className="w-full"
//           required
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           id="phone"
//           type="number"
//         />
//       </div>

//       <div className="flex align-items space-x-2">
//         <div className="grid w-full items-center gap-1.5">
//                 <Label htmlFor="password">New Password</Label>
//                 <Input
//                 className="w-full"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 type="password"
//                 />
//             </div>
            
//             <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor=" password_confirmation">Confirm your new password</Label>
//         <Input
//           className="w-full"
//           required
//           value={ password_confirmation}
//           onChange={(e) => setPassword_confirmation(e.target.value)}
//           id=" password_confirmation"
//           type="password"
//         />
//       </div>
//       </div>

//       {/* {error && <Alert>{error}</Alert>} */}
//       <div className="w-full">
//         <Button className="w-full" size="lg" type="submit">
//           save changes
//         </Button>
//       </div>
//     </form>
//     </div>
//   )
// }

// // import { signIn } from 'next-auth/react'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const EditForm = () => {
  const [first_name, setFisrtName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  // const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Uncomment the next line and replace the token value
    // const token = "your_access_token_here";

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/eventManager/update`, {
        method: 'POST',
        body: JSON.stringify({
          first_name,
          last_name,
          birthday,
          // gender,
          email,
          phone,
          password,
          password_confirmation,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        window.location.href = '/account';
      } else {
        setError((await res.json()).error);
      }
    } catch (error) {
      setError(error?.message);
    }
    console.log(error)
  };
  
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
                <Label htmlFor="password">New Password</Label>
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
        <Label htmlFor=" password_confirmation">Confirm your new password</Label>
        <Input
          className="w-full"
          required
          value={ password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
          id=" password_confirmation"
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

