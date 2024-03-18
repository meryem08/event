import Image from "next/image"
import Link from "next/link"
import React from "react"

const EventCard = ({ img , eventTitle, summary, country, startingDate}) => {
  return (
    <div className="w-[95%] shodow-xl  m-10 bg-pink-700">
      <div>
        <img
          src={`http://127.0.0.1:8000/storage/${event?.event?.photo}`}
          alt="event"
          className="h-[250px] w-[100%] object-cover"
        />
        <div className="flex flex-col gap-4 p-[20px]">
          <div>
            <h2 className="text-black font-semibold text-xl ">{eventTitle} </h2>
          </div>
          <div className="text-white">{summary}</div>
          <p className="text-white  pt-1 pl-1">
                 {country} / {startingDate}
             </p>
          <div>
            <Link className="text-white text-left border rounded-xl p-1 bg-blue-500 border-blue-500 px-2" href="#">
              Visiter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
