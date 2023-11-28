import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
import Layout from '@/components/Dashboard/Layout.jsx';
import Grid from '@/components/Dashboard/Grid.jsx';

const requests = () => {

  
const EventsManagers = () => {
  const [eventManagers, setEventManagers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchEventManagers = async () => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/eventManagers`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }

      const json = await res.json()
      setEventManagers(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }

  useEffect(() => {
    fetchEventManagers()
  }, [])
}
  return (
   <Layout>
    
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='p-2 grid grid-cols-6  items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span>Event</span>
            <span className='hidden md:grid'>Sector</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden sm:grid'>Action</span>
          </div>
          <ul>
            {data.map((request, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-6 items-center justify-between'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {request.event.toLocaleString()}
                    </p>
                    <p className='text-gray-800 text-sm'>{request.name.first}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      request.status == 'Processing'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : request.status == 'Completed'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {request.status}
                  </span>
                </p>
                <p className='hidden md:flex'>{request.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
  <button
    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-24'
    //onClick={handleApprove}
  >
    Approve
  </button>
  <button
    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-24'
    //onClick={handleReject}
  >
    Reject
  </button>
  <BsThreeDotsVertical />
</div>

              </li>
            ))}
          </ul>
        </div>
      </div>
      </Layout>
    
  );
};

export default requests;