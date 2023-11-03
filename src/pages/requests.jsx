import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
import Layout from '@/components/Dashboard/Layout.jsx';
import Grid from '@/components/Dashboard/Grid.jsx';

const requests = () => {
  return (
   <Layout>
    
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Request</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last request</span>
            <span className='hidden sm:grid'>Action</span>
          </div>
          <ul>
            {data.map((request, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
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