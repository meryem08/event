import React from 'react'
import { BsCheckLg } from 'react-icons/bs'


function Packages() {
  return (
    <div >
         <div className='text-center font-bold m-4 p-4'>chose a package :</div>
    <div className='flex justify-around'>
        <div className=' p-3 m-3 border '>
            <div className='flex justify-center p-3 text-lg font-bold'>silver
            </div>
            
            <ul >
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 42 seats</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 500 miters</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 10 tables</li>
            </ul>
        </div>
        <div className=' p-3 m-3 border '>
            <div className='flex justify-center p-3 text-lg font-bold'>golden
            </div>
            
            <ul >
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 42 seats</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 500 miters</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 10 tables</li>
            </ul>
        </div>
        <div className=' p-3 m-3 border '>
            <div className='flex justify-center p-3 text-lg font-bold'>platinium
            </div>
            
            <ul >
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 42 seats</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 500 miters</li>
                <li className='flex justify-around'><BsCheckLg size={15} className='from-neutral-300 text-green-600'/> 10 tables</li>
            </ul>
        </div>
    </div>
        
    </div>
  )
}

export default Packages