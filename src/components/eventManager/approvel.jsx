import React from 'react'
import Image from 'next/image'

function Approvel() {
  return (
    <div>

      <div className="flex justify-center items-center">
      <Image
              src="/blue.png"
              alt="welcom"
              width={450}
              height={300}
              
            />
            
    </div>
    <div className="flex justify-center items-center">
      <p className='font-extrabold text-3xl text-blue-600'>Welcom to Eventure !</p>
      
    </div>
    <div className="flex justify-center items-center">
    <p className='font-medium text-lg'>Please wait for the admin approvel. </p>
      
    </div>
    </div>
    
  )
}

export default Approvel