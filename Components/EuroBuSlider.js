import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const EuroBuSlider = () => {
  const [sliderImage, setSliderImage] = useState([])
  const [current, setCurrent] = useState(0)
  const sliderImageLength = sliderImage?.length

  const nextSlide = () => {
    setCurrent(current === sliderImageLength - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderImageLength - 1 : current - 1)
  }

  console.log(current)

  useEffect(() => {
    window
      .fetch('/api/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        console.log(rooms)
        setSliderImage(rooms)
      })
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      <FaArrowAltCircleLeft
        className="slider-arrow left-[15px]"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="slider-arrow right-[15px]"
        onClick={nextSlide}
      />
      {sliderImage?.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-1 duration-1000 scale-105'
                : 'opacity-0 duration-1000 ease'
            }
          >
            {index === current && (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                src={slide?.room_image.url}
                alt={slide?.room_image.alt}
                width={305}
                height={240}
                objectFit="contain"
                className="rounded-lg"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EuroBuSlider
