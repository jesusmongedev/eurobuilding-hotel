import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const RoomsSection = () => {
  const [rooms, setRooms] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    window
      .fetch('/api/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        console.log(rooms)
        setRooms(rooms)
      })
  }, [])
  return (
    <div className=" px-4 relative max-w-[328px] mx-auto">
      <h2 className="text-sm font-semibold absolute top-[-15px]">
        HABITACIONES
      </h2>
      <section className="flex sliderContainer gap-8 w-full max-w-[288px]  p-3">
        {rooms?.map((euro, i) => {
          console.log(euro)
          return (
            <div key={i} className="min-w-[288px] max-w-[328px] sliderCards ">
              <Image
                src={euro.room_image.url}
                alt={euro.room_image.alt}
                objectFit="cover"
                width={1000}
                height={800}
              />
              <h3 className="text-sm font-semibold py-1">{euro.room_title}</h3>
              <p className="text-xs leading-normal">{euro.room_description}</p>
              <button className="euro-button px-10 my-6">Ver más</button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default RoomsSection
