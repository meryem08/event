
import React from "react";

import Image from "next/image";

export default function About() {
    

    return (
       
        <div className="max-w-screen-xl mx-auto p-4">
        <section className="my-4 lg:my-8 flex flex-col md:flex-row items-center justify-center lg:justify-between bg-gray-50 p-8 rounded-lg border border-gray-300 transition duration-500 ease-in-out transform lg:hover:scale-105" id="about">
          <div className="w-full md:w-1/2 lg:w-5/12 mx-auto md:order-2 mb-4 md:mb-0">
            <Image
              src="/images/team.webp"
              alt="Inner Space Therapy 1"
              width={800}
              height={600}
              className="rounded-md shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 mx-auto md:order-1 text-center md:text-left">
            <h1 className="rtl:text-right text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-Teal">
              Qui sommes nous ?
            </h1>
            <p className="rtl:text-right text-lg text-gray-700 mb-4">
              Eventure, une plateforme en ligne algérienne, se distingue par sa
              diversité d&apos;événements proposés. Grâce à cet espace virtuel,
              vous avez la possibilité de non seulement créer vos propres
              événements, mais également de les gérer et de les partager avec
              facilité. Que ce soit pour organiser une événement sportif, une
              exposition artistique ou une conférence communautaire, Eventure met
              à votre disposition les outils nécessaires pour concrétiser vos
              projets événementiels et les faire connaître auprès d&apos;un large
              public. De plus, en vous tenant informé des événements à venir,
              cette plateforme devient une véritable vitrine des activités
              culturelles, sportives et sociales qui animent la vie en Algérie. En
              un seul endroit, Eventure réunit organisateurs et participants,
              favorisant ainsi l&apos;échange, la découverte et le partage
              d&apos;expériences enrichissantes au sein de la communauté locale.
            </p>
          </div>
        </section>
      </div>
    );
}

