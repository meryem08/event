
import React from "react";

import Image from "next/image";

export default function About() {
    

    return (
       
            <div className='max-w-screen-lg mx-auto p-4'>
               
                <section className='my-4 lg:my-8 flex flex-col md:flex-row items-center justify-center lg:justify-between bg-white p-8 rounded-lg border border-gray-300 transition duration-500 ease-in-out transform lg:hover:scale-105'>
                    <div className='w-full md:w-1/2 lg:w-5/12 mx-auto md:order-2 mb-4 md:mb-0'>
                        <Image
                            src='/images/services.jpg'
                            alt='Inner Space Therapy 1'
                            width={800}
                            height={600}
                            className='rounded-md shadow-md'
                        />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-5/12 mx-auto md:order-1 text-center md:text-left'>
                        <h1 className='rtl:text-right text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-Teal'>
                          Pourquoi nous choisir ?
                        </h1>
                        <p className='rtl:text-right text-lg text-gray-700 mb-4'>
                        Eventure est un site web algérien qui propose différents types d&apos;événements et par ce site web vous pouvez créer vos propres événements, compétitions, formulaires d&apos;événements, etc et les partager avec les gens .aussi vous pouvez participer à d&apos;autres événements 
                        </p>
                    </div>
                </section>

               
            </div>
      
    );
}

