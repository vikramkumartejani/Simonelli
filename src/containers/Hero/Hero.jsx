import React, { useState } from 'react';
import Slider1 from '../../assets/Images/Hero.png'
import Slider2 from '../../assets/Images/Hero.png'
import Slider3 from '../../assets/Images/Banner.png'

const slides = [
  {
    image: Slider1
  },
  {
    image: Slider3
  },
  {
    image: Slider2
  },

];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];
  return (
    <>
      <div className="relative">
        <div className="w-full  h-[537px] bg-cover bg-center flex justify-center md:justify-between  md:pl-16 lg:pl-28 " style={{ backgroundImage: `url(${currentSlide.image})` }}>
          <div className='  max-w-[606px] flex flex-col p-3 justify-center gap-8  '>
            <h1 className=' leading-[4rem] md:tracking-wide text-5xl text-white font-normal '>Bag And Accessory Boutiques For Sale</h1>
            <div>
              <button className=' font-normal bg-black text-sm text-white p-4'>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="absolute  bottom-5 left-0 right-0 p-4 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3  ${currentIndex === index ? 'rounded w-7 bg-white' : 'rounded-full border-2'}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero