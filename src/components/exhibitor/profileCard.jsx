import React from 'react'
import { useState , useEffect } from 'react';

function ProfileCard() {

  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/showUserProducts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Product  manager data');
        }

        const ProductData = await response.json();
        setProductData(ProductData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchProductData();
  }, );
  return (
     <div>
          <ul>
              {ProductData?.map((product) => (

                <li
                  key={product.id}
                  // className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-9 items-center justify-between"
                  >
                  {/* <div className="flex  items-center justify-center bg-white-700 border-2 border-black-900 border-solid flex flex-col gap-[17px] mb-[15px] p-[11px] md:px-5 rounded-[15px] w-[70%] sm:w-full ">
                    <div className="text-black-900  text-sm w-[48%] sm:w-full " >
                      <>
                      <h3>{product?.name}</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam 
                        impedit laborum repellat veritatis esse excepturi, expedita tempore debitis laboriosam sunt! Nulla, 
                        ipsam quam adipisci ab eligendi illo exercitationem eius at.
                      </>
                    </div>   
                  </div>     
                  <div className="bg-gray-100 h-[136px] w-[81%]"></div> */}
                  <div className="flex  items-center justify-center bg-white-700 border-2 border-black-900 border-solid flex flex-col gap-[17px] mb-[15px] p-[11px] md:px-5 rounded-[15px] w-[70%] sm:w-full ">
                        <div
                        className="text-black-900  text-sm w-[48%] sm:w-full "
                        >
                            <>
                            <h3 className='font-semibold text-xl'>{product?.name} </h3>
                            <p>{product?.description} </p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat
                            </>
                        </div>
                        <div className="w-[81%]">
                          {product?.photo && (
                            <img
                              src={`http://127.0.0.1:8000/storage/${product.photo}`}
                              alt={product.name}
                              className="w-full h-[136px] object-cover rounded"
                            />
                          )}
                        </div>

                        <div className='flex justify-start w-[80%]'><h1 className='font-semibold'>{product?.price} </h1> </div>
                  </div>
                </li>
                
               ))} 
          </ul>
     </div>
  )
}

export default ProfileCard