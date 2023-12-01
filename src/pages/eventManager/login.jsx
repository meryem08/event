import React from 'react'
// //import Link from 'next/link'

// function login() {
//   return (
//     <>
//     <div className="bg-purple-500 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
//     <header className="max-w-lg mx-auto">
//         <a href="#">
//             <h1 className="text-4xl font-bold text-white text-center">My Event</h1>
//         </a>
//     </header>

//     <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
//         <section>
//             <h3 className="font-bold text-2xl">Welcome to My Event</h3>
//             <p className="text-gray-600 pt-2">Sign in to your account.</p>
//         </section>

//         <section className="mt-10">
//             <form className="flex flex-col" method="POST" action="#">
//                 <div className="mb-6 pt-3 rounded bg-gray-200">
//                     <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="u">Username</label>
//                     <input type="text" id="username" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
//                 </div>
//                 <div className="mb-6 pt-3 rounded bg-gray-200">
//                     <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
//                     <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
//                 </div>
//                 <div className="flex justify-end">
//                     <a href="mailto:myevents@gmail.com?subject=Password%20Reset&body=Hello,%0A%0AI forgot my password. Could you please provide me with a new password?%0A%0AKind regards,%0AYourName" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6 " title='Contact us to receive a new password.'>  Forgot your password?</a>
//                 </div>
//                 <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
//             </form>
//         </section>
//     </main>

  

//     <footer className="max-w-lg mx-auto flex justify-center text-white">
//     <span className="text-white">© 2023 My event. All Rights Reserved.</span>
//     </footer>
// </div>
//     </>
//   )
// }

// export default login

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
      const response = await fetch('http://127.0.0.1:8000/api/eventManager/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
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
  }

  return (
    <>
      <div className="bg-purple-500 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <header className="max-w-lg mx-auto">
          <a href="#">
            <h1 className="text-4xl font-bold text-white text-center">My Event</h1>
          </a>
        </header>

        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 className="font-bold text-2xl">Welcome to My Event</h3>
            <p className="text-gray-600 pt-2">Sign in to your account.</p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleLogin}>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="username">Email</label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <a
                  href="mailto:myevents@gmail.com?subject=Password%20Reset&body=Hello,%0A%0AI forgot my password. Could you please provide me with a new password?%0A%0AKind regards,%0AYourName"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                  title='Contact us to receive a new password.'
                >
                  Forgot your password?
                </a>
              </div>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </section>
        </main>

        <footer className="max-w-lg mx-auto flex justify-center text-white">
          <span className="text-white">© 2023 My event. All Rights Reserved.</span>
        </footer>
      </div>
    </>
  );
}

export default Login;
