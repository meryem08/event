// // components/Popup.js
// import React from 'react';
// import { useState } from 'react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';


// export default function Add() {
//     const [modal, setModal] = useState(false);
  
//     const toggleModal = () => {
//       setModal(!modal);
//     };

// const [name, setname] = useState('');
// const [description, setdescription] = useState('');
// const [price, setprice] = useState('');
// const [quantity, setquantity] = useState('');
// const [photo, setphoto] = useState('');
//     // const [photo, set] = useState(null);


  
//     const handleFileChange = (e) => {
//       setphoto(e.target.files[0]);
//     };
//     const handlePost = async (e) => {
//         e.preventDefault();
    
//         try {
//             const formData = new FormData();
//             formData.append('photo', photo);
      
//           const response = await fetch(`http://127.0.0.1:8000/api/createProduct`, {
//             method: 'POST',
//             headers: {
//               'Content-Type' : 'multipart/form-data' ,
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//               Accept: 'application/json',
//             },
//             body: JSON.stringify({
//               name,
//               description,
//               price,
//               quantity,
//             //   photo,
//             } ),
//           });
//           if (response.ok) {
//             // Successful registration: redirect the user
//             window.location.href ='/exhibitor/profile'; // Redirect to the dashboard page
//           } else {
//             // Registration failed: display the error message
//             const errorMessage = await response.text();
//             console.error(errorMessage);
//           }
//         } catch (error) {
//           console.error('An error occurred during the registration request.', error);
//         }
//       };
  
//     // if(modal) {
//     //   document.body.classList.add('active-modal')
//     // } else {
//     //   document.body.classList.remove('active-modal')
//     // }
//     console.log(photo)
//   return (
//     <>
//     <Button onClick={toggleModal} >Add product</Button>
//     {modal && (
//     <div className='w-screen h-screen fixed top-0 right-0 bottom-0 left-0'>
//         <div onClick={toggleModal} className='bg-slate-400 opacity-70 w-screen h-screen fixed top-0 right-0 bottom-0 left-0 '> </div>
//         <div  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
//             <div className='bg-white m-6 p-6 rounded-lg'>
//                <h3 className='text-lg font-semibold '>Product Details</h3>
//                <form >
//                 <div className='flex p-2' >
//                 <div className='pr-2'>
//                     <Label>Name</Label>
//                     <Input 
//                     value={name}
//                     onChange={(e) => setname(e.target.value)}
//                      />
//                 </div>
//                 <div>
//                     <Label>Description</Label>
//                     <Input
//                     value={description}
//                     onChange={(e) => setdescription(e.target.value)}
//                      />
//                 </div>
//                </div>
//                </form>
               
                
//                 <div className='p-2'>
//                     <Label>Quantity</Label>
//                     <Input 
//                     value={quantity}
//                     onChange={(e) => setquantity(e.target.value)}
//                     />
//                 </div>
//                 <div className='p-2'>
//                     <Label>Price</Label>
//                     <Input
//                      value={price}
//                     onChange={(e) => setprice(e.target.value)} />
//                 </div>
//                 <div className='p-2'>
//                     <Label>Photo</Label>
//                     <Input 
//                     name = 'photo'
//                     value={''}
//                     type="file" onChange={handleFileChange} 
//                     />
                    
//                 </div>
//                     <Button onClick={handlePost}>send</Button>

//             </div>
            
                
                


//         </div>
//     </div>
//      )}
//     </>
//   );
// };

// // export default Add 
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function Add() {
  const [modal, setModal] = useState(false);
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [photo, setphoto] = useState('');

  const toggleModal = () => {
    setModal(!modal); 
  };

  const handleFileChange = (e) => {
    setphoto(e.target.files[0]);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('photo', photo);

      const response = await fetch(`http://127.0.0.1:8000/api/createProduct`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        // Successful registration: redirect the user
        window.location.href = '/exhibitor/profile';
      } else {
        // Registration failed: display the error message
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('An error occurred during the registration request.', error);
    }
  };
  console.log(photo)

  return (
    <>
      <Button onClick={toggleModal}>Add product</Button>
      {modal && (
        <div className='w-screen h-screen fixed top-0 right-0 bottom-0 left-0'>
          <div
            onClick={toggleModal}
            className='bg-slate-400 opacity-70 w-screen h-screen fixed top-0 right-0 bottom-0 left-0 '
          ></div>
          <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <div className='bg-white m-6 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold '>Product Details</h3>
              <form>
                <div className='flex p-2'>
                  <div className='pr-2'>
                    <Label>Name</Label>
                    <Input value={name} onChange={(e) => setname(e.target.value)} />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Input
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </div>
                </div>

                <div className='p-2'>
                  <Label>Quantity</Label>
                  <Input value={quantity} onChange={(e) => setquantity(e.target.value)} />
                </div>
                <div className='p-2'>
                  <Label>Price</Label>
                  <Input value={price} onChange={(e) => setprice(e.target.value)} />
                </div>
                <div className='p-2'>
                  <Label>Photo</Label>
                  <Input name='photo' type='file' onChange={handleFileChange} />
                </div>
                <Button onClick={handlePost}>send</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
