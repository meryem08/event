import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function ForgotPassword() {

    const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    // Les données à envoyer à l'API
    const data = {
      email
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
        if (response.ok) {
        // const result = await response.json();
        // const token = result.token;
        // localStorage.setItem('token', token);
  
        // Authentification réussie : redirigez l'utilisateur
        window.location.href = '/ResetPassword'; // Redirigez vers la page du tableau de bord
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
            height={150}
            className="absolute w-screen h-screen "
          />
      <div className=" min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      

        <main className="bg-opacity-25 backdrop-blur-sm max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl border border-2">
          <section>
            <h3 className="font-bold  text-xl text-white ml-4">Enter Your Email To Recieve a Code !</h3>
            {/* <p className="text-gray-600 pt-2">Sign in to your account.</p> */}
          </section>

          <section className="mt-10">
            <form className="flex flex-col" 
                  onSubmit={handleForgotPassword}>
              <div className="m-4 pt-3 rounded ">
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
              
           
              
               
           
              <Button
                className="m-4 bg-gradient-to-r from-purple-300 to-pink-400 hover:bg-gradient-to-l from-purple-400 to-pink-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Send a code
              </Button>
            </form>
          </section>
        </main>

        <footer className="max-w-lg mx-auto flex justify-center text-white">
          <span className="text-white">© 2023 My event. All Rights Reserved.</span>
        </footer>
      </div>
      </div>
    </>
  )
}

export default ForgotPassword