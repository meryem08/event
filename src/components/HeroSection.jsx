import Image from "next/image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "./ui/button"
import Link from "next/link"

function HeroSection() {
  const settings = {
    fade: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  const slideImages = [
    {
      imgSrc: "concert5.webp",
      id: "1",
    },
    {
      imgSrc: "conference3.webp",
      id: "2",
    },
    {
      imgSrc: "exposition2.webp",
      id: "3",
    },
    {
      imgSrc: "fashionShow2.webp",
      id: "4",
    },
    {
      imgSrc: "exposition1.webp",
      id: "4",
    },
  ]

  return (
    <div>
      <Slider {...settings} className="bg-white">
        {slideImages.map((img) => (
          <div key={img.id}>
            <div
              style={{
                backgroundImage: `url(/images/${img.imgSrc})`,
              }}
              className="h-[90vh] bg-cover bg-center relative"
            ></div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col justify-between absolute leading-loose bottom-[25%] left-8 right-8 text-center lg:left-48 lg:right-48 p-6 bg-opacity-50 bg-white bg-clip-padding rounded-3xl">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-4xl lg:text-7xl  text-black font-bold ">
            Gérez vos événements en ligne en toute simplicité
            <br />
          </h2>
          <p className="hidden md:block md:text-xl lg:text-3xl sm:text-md font-medium text-black leading-loose font-atkinson">
            Profitez de la facilité de gestion des événements en ligne.
            Inscrivez-vous dès maintenant, et créer votre page d&apos;événement
            sans effort !
          </p>
        </div>
        <Link className="px-auto pt-6 mx-auto " href={"/eventManager/registerPage"}>
        <Button className="bg-gradient-to-r from-blue-400 to-pink-500 hover:from-blue-300 hover:to-pink-400 mx-auto p-6">S&apos;inscrire</Button>
        </Link>
      
      </div>
    </div>
  )
}

export default HeroSection
