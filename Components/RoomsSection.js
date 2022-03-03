import Image from 'next/image'
import React, { useState } from 'react'

const RoomsSection = ({ rooms }) => {
  const [current, setCurrent] = useState(0)

  return (
    <section className="px-4">
      <h2 className="text-sm font-semibold mb-2">HABITACIONES</h2>
      <div>
        {rooms[current].room_image?.url && (
          <Image
            src={rooms[current]?.room_image.url}
            alt={rooms[current]?.room_image.alt}
            objectFit="cover"
            width={1000}
            height={800}
          />
        )}
        <div className="text-center space-x-2">
          <button
            onClick={() => {
              setCurrent(0)
            }}
            className={`rounded-button ${current === 0 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(1)
            }}
            className={`rounded-button ${current === 1 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(2)
            }}
            className={`rounded-button ${current === 2 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(3)
            }}
            className={`rounded-button ${current === 3 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(4)
            }}
            className={`rounded-button ${current === 4 ? 'bg-gray-500' : ''}`}
          ></button>
        </div>
        <h3 className="text-sm font-semibold py-1">
          {rooms[current]?.room_title}
        </h3>
        <p className="text-xs leading-normal">
          {rooms[current]?.room_description}
        </p>
        <button className="euro-button px-10 my-6 text-sm">Ver más</button>
      </div>
    </section>
  )
}

export default RoomsSection
