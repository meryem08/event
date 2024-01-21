// import { useState, useEffect, Fragment } from "react";
// import SideBar from "./SideBar";
// // import TopBar from "./TopBar";
// import { Transition } from "@headlessui/react";
// import { Navigation } from "lucide-react";
// import Navbar from "../header/NavBar";
// // import SideBar from "../Dashboard/Sidebar";
// import React, { useRef } from 'react';

// export default function Layout({ children }) {
//   const [showNav, setShowNav] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

// //   function handleResize() {
// //     if (innerWidth <= 640) {
// //       setShowNav(false);
// //       setIsMobile(true);
// //     } else {
// //       setShowNav(true);
// //       setIsMobile(false);
// //     }
// //   }

// //   useEffect(() => {
// //     if (typeof window != undefined) {
// //       addEventListener("resize", handleResize);
// //     }

// //     return () => {
// //       removeEventListener("resize", handleResize);
// //     };
// //   }, []);

//   return (
//     <>
//       <Navbar/>
   
//         <SideBar />
//       {/* <main
//         className={`pt-16 transition-all duration-[400ms] ${
//           showNav && !isMobile ? "pl-56" : ""
//         }`}
//       > */}
//         <div className="px-4 md:px-16">{children}</div>
//       {/* </main> */}
//     </>
//   );
// }
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Navbar from "../header/NavBar";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <SideBar />
      <div>
        {children}
      </div>
    </>
  );
}
