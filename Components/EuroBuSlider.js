import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const EuroBuSlider = ({ rooms }) => {
  const [current, setCurrent] = useState(0)
  const sliderImageLength = rooms?.length

  const nextSlide = () => {
    setCurrent(current === sliderImageLength - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderImageLength - 1 : current - 1)
  }

  return (
    <div className="relative flex items-center justify-center mb-8 mt-14">
      <BiLeftArrow className="slider-arrow left-[15px]" onClick={prevSlide} />
      <BiRightArrow className="slider-arrow right-[15px]" onClick={nextSlide} />
      <span className="absolute  top-[-32px] text-center z-10 font-semibold text-white bg-primary w-full max-w-[1000px] p-1 ">
        Vive la experiencia EuroBuilding
      </span>
      {rooms?.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-1 duration-1000 ease-in-out'
                : 'opacity-0 duration-1000 ease-in-out'
            }
          >
            {index === current && (
              <Image
                src={slide?.euro_slider.url}
                alt={slide?.euro_slider.alt}
                width={800}
                height={800}
                objectFit="contain"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EuroBuSlider
