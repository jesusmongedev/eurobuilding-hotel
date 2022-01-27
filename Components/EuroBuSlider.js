import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const EuroBuSlider = () => {
  const [sliderImage, setSliderImage] = useState([])

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
    <div className="text-center">
      EuroBuilding Slider
      {/* {sliderImage?.map((slide, index) => {
        return (
          <Image
            key={index}
            src={slide?.room_image.url}
            layout="fill"
            objectFit="contain"
            alt={slide?.room_image.alt}
          />
        )
      })} */}
    </div>
  )
}

export default EuroBuSlider
