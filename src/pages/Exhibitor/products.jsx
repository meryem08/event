import Layout from '@/components/exhibitor/Layout'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Products() {
  return (
    <Layout>

    
<div className="p-4 top-5 w-full">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">

          <div className=" p-2 grid grid-cols-4 items-center justify-around cursor-pointer">
            {/* <span>Identifiant</span> */}
            <span className="hidden md:grid">Product</span>
            <span className="hidden md:grid ">price</span>
            <span className="hidden md:grid">quantity</span>
            <span className="hidden sm:grid"></span>
            {/* <span className="hidden sm:grid"></span> */}
          </div>

          <ul>
          {/* {events?.map(event => ( */}
            
              <Link
                href={`/eventManager/events`}
                // key={event.id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-5 items-center justify-between"
              >
                
                <div className="flex items-center">

                <div className="bg-purple-100 p-3 rounded-lg">
                    {/* <BsPersonFill className="text-purple-800" /> */}
                     {/* {event.id} */}
                  </div>
                 
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  {/* {event.eventTitle} */}
                </p>

                <p className="hidden md:flex">
                  {/* {event.sector} */}
                </p>
                {/* <p className="pl-4">
                  
                </p>
                 */}
                <div className="flex ">
                  <div className="pl-4">
                    {/* <Button 
                    // onClick={() => confirmDelete(event.id)}
                    >Delete</Button> */}
                  </div>

                  {/* <div className="pl-4">
                    <Button onClick={() => handleShow(event.id)}>Show</Button>
                  </div> */}

                  {/* <div className="pl-4">
                    <Button onClick={() => confirmDelete(event.id)}>edit</Button>
                  </div> */}
                {/* <p className="pl-4">
                <Popover>
                    <PopoverTrigger>
                      <Button>view</Button> 
                    </PopoverTrigger>
                    <PopoverContent>
                      <EventInfo/>
                    </PopoverContent>
                </Popover>
                </p> */}
                </div>
{/*                 
                <div className="sm:flex hidden justify-between items-center">
              </div> */}
              </Link>
            {/* ))} */}
          </ul>
          
        </div>
        
      </div>
      
    </Layout>
  )
}

export default Products