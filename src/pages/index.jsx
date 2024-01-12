import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function LandingPage() {
  return (
    <div className="w-[96%]">
      <div className="sticky">
        <nav className=" flex justify-end m-3 p-3 bg-opacity-20 bg-white bg-blur-md">
          <div className="flex justify-around w-[50%] font-semibold ">
            <Link href={"/"} className="hover:text-purple-500">
              Home
            </Link>
            <Link href={"/"} className="hover:text-purple-500">
              Services
            </Link>
            <Link href={"/"} className="hover:text-purple-500">
              Events
            </Link>
            <Link href={"/"} className="hover:text-purple-500">
              About Us
            </Link>
            <Link href={"/eventManager/login"} className="">
              Log in
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex justify-between">
        <div className="m-24">
          <h1 className="lg:text-4xl sm:font-bold text-2xl font-semibold">
            The platform that will help you manage your event better
          </h1>
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem voluptatem fugit suscipit?
          </p>
          <div className="p-7">
            <Link href={"/eventManager/registerPage"}>
            <Button className="w-28">Sing Up</Button>
            </Link>
            
          </div>
        </div>

        <div className="flex justify-end relative m-6 p-6 mt-12">
          <div className="  w-72 h-64 bg-blue-600 blur-3xl rounded-"></div>
          <div className=" w-72 h-64 bg-purple-600 blur-3xl rounded-"></div>
          <div className=" absolute right-36 top-44 w-72 h-64 bg-pink-600  blur-3xl rounded-full"></div>
          <Image
            src={"/tech.png"}
            width={350}
            height={150}
            className="absolute right-28 "
          />
        </div>
      </div>
      <div className="mr-auto ml-auto w-[96%] relative">
        <div className=" ">
          <h1 className="ml-20 mb-10 text-3xl font-semibold">Services</h1>
        </div>
        <div className="flex justify-around ">
          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>

          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>

          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>
        </div>
        <div className="flex justify-around ">
          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>

          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>

          <div
            style={{ maxWidth: 300 }}
            className="p-2 m-2 rounded-lg border-black bg-slate-400"
          >
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "5px",
                margin: "",
              }}
            />
            <h1 as="p" size="3">
              is the art and technique of arranging type to make written
              language legible, readable and appealing when displayed.
            </h1>
          </div>
          <div className="w-60 h-64 bg-blue-400 blur-3xl z-0 opacity-95 absolute top-1/3 left-0"></div>
        </div>

        <div>
          <h1 className="m-24 lg:text-4xl sm:font-bold text-2xl font-semibold">
            Events
          </h1>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
