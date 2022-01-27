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
    <div className="relative h-[300px] flex items-center justify-center">
      {sliderImage?.map((slide, index) => {
        return (
          <Image
            key={index}
            src={slide?.room_image.url}
            width={600}
            height={400}
            alt={slide?.room_image.alt}
          />
        )
      })}
    </div>
  )
}

export default EuroBuSlider
