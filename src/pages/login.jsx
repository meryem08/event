import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Les données à envoyer à l'API
    const data = {
      email,
      password,
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
        if (response.ok) {
        const result = await response.json();
        const token = result.token;
        localStorage.setItem('token', token);
  
        // Authentification réussie : redirigez l'utilisateur
        window.location.href = '/dashboard'; // Redirigez vers la page du tableau de bord
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
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
  //   // Les données à envoyer à l'API
  //   const data = {
  //     email,
  //     password,
  //   };
  
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  
  //     if (response.ok) {
  //       const result = await response.json();
  //       const token = result.token;
  //       localStorage.setItem('token', token);
  
  //       // Fetch user details or role information from the server
  //       const userResponse = await fetch('http://127.0.0.1:8000/api/showUser', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json',
  //         },
  //       });
  
  //       if (userResponse.ok) {
  //         const userResult = await userResponse.json();
  //         const userRole = userResult.roles.name; // Adjust this based on your user data structure
  
  //         // Redirect based on user role
  //         switch (userRole) {
  //           case 'admin':
  //             window.location.href = '/dashboard';
  //             break;
  //           case 'eventManager':
  //             window.location.href = '/eventManager/dashboard';
  //             break;
  //           default:
  //             window.location.href = '/default-dashboard';
  //         }
  //       } else {
  //         console.error('Error fetching user details:', userResponse.statusText);
  //       }
  //     } else {
  //       // Authentification échouée : affichez le message d'erreur
  //       const errorMessage = await response.text(); // Récupérez le message d'erreur depuis la réponse
  //       const errorMessageElement = document.getElementById('error-message');
  //       errorMessageElement.textContent = errorMessage;
  //     }
  //   } catch (error) {
  //     console.error('Une erreur s\'est produite lors de la demande.', error);
  //   }
  // };
  

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
            <h3 className="font-bold  text-2xl text-white ml-4">Welcome Back !</h3>
            {/* <p className="text-gray-600 pt-2">Sign in to your account.</p> */}
          </section>

          <section className="mt-10">
            <form className="flex flex-col" 
                  onSubmit={handleLogin}>
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
              <div className="m-4 pt-3 rounded">
                {/* <Label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</Label> */}
                <input
                  placeholder='password'
                  type="password"
                  id="password"
                  className="p-2 bg-transparent rounded w-full focus:outline-none border-b-2 border-white focus:border-purple-600 transition duration-500 px-3 pb-3 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
           
              <div className="flex justify-between">
                <a
                  href="mailto:myevents@gmail.com?subject=Password%20Reset&body=Hello,%0A%0AI forgot my password. Could you please provide me with a new password?%0A%0AKind regards,%0AYourName"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                  title='Contact us to receive a new password.'
                >
                  Forgot your password?
                </a> 
                <a
                  href="mailto:myevents@gmail.com?subject=Password%20Reset&body=Hello,%0A%0AI forgot my password. Could you please provide me with a new password?%0A%0AKind regards,%0AYourName"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                  title='Contact us to receive a new password.'
                >
                  Sign up
                </a>
              </div>
              
               
           
              <Button
                className="m-4 bg-gradient-to-r from-purple-300 to-pink-400 hover:bg-gradient-to-l from-purple-400 to-pink-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign In
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
  );
}

export default Login;
