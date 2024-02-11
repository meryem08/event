import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function EventManagerResetPassword() {

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');


  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Les données à envoyer à l'API
    const data = {
      email,
      password,
      token,
      password_confirmation
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
        if (response.ok) {
        const result = await response.json();
        const token = result.data.token;
        localStorage.setItem('token', token);
  
        // Authentification réussie : redirigez l'utilisateur
        window.location.href = '/eventManager/dashboard'; // Redirigez vers la page du tableau de bord
      } else {
        // Authentification échouée : affichez le message d'erreur
        const errorMessage = await response.text(); // Récupérez le message d'erreur depuis la réponse
        const errorMessageElement = document.getElementById('error-message');
        errorMessageElement.textContent = errorMessage;
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la demande.', error);
    }
  };

  return (
    <>
    <div>
      <img
            src={"/bg.jpg"}
            width={350}
            height={250}
            className="absolute w-screen h-screen "
          />
      <div className=" min-h-screen md:pt-2 pb-2 px-2 md:px-0">
      
        <main className="bg-opacity-25 backdrop-blur-sm max-w-lg mx-auto p-8 md:p-8 my-4 rounded-lg shadow-2xl border border-2">
          <section>
            <h3 className="font-bold  text-xl text-white ml-4">Set the information !</h3>
          </section>

          <section className="mt-6">
            <form className="flex flex-col" 
                  onSubmit={handleResetPassword}>
              <div className="m-2 pt-3 rounded ">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='Email'
                  type="email"
                  id="Email"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="m-2 pt-3 rounded ">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='Code'
                  type="text"
                  id="token"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <div className="m-2 pt-3 rounded ">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='password'
                  type="password"
                  id="password"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="m-2 pt-3 rounded ">
                {/* <Label className="block text-sm font-bold mb-2 ml-3" htmlFor="username">Email</Label> */}
                <input
                  placeholder='password confirmation'
                  type="password"
                  id="password_confirmation"
                  className="p-2 text-white bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 hover: bg-transparent"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                />
              </div>
           
              <Button
                className="m-4 bg-gradient-to-r from-purple-300 to-pink-400 hover:bg-gradient-to-l from-purple-400 to-pink-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Reset the password
              </Button>
            </form>
          </section>
          
        </main>
        
      </div>        

        
      </div>
      <div className="max-w-lg mx-auto flex justify-center text-white">
        <span className="text-gray-400 text-sm font-semibold">© 2023 My event. All Rights Reserved.</span>
        </div>
    </>
  )
}

export default EventManagerResetPassword