import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#000033] rounded-lg shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <h1 className="text-white text-2xl navbar_link">Eventure</h1>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="#" className=" me-4 md:me-6 navbar_link relative pt-2">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#" className=" me-4 md:me-6 navbar_link relative pt-2" >
                 EVENT
                </Link>
              </li>
              <li>
                <Link href="#" className=" me-4 md:me-6 navbar_link relative pt-2">
               SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" className=" me-4 md:me-6 navbar_link relative pt-2">
                ABOUT US
                </Link>
              </li>
              
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center dark:text-gray-400 navbar_link">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              Eventure™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  )
}
