import Image from 'next/image'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import opinions from './data'

const Opiniones = () => {
  const [current, setCurrent] = useState(0)

  return (
    <div className="bg-gray-200 px-4 pt-4 pb-2">
      <h2 className="text-sm font-semibold mb-2">OPINIONES</h2>
      <p className="text-xs">{opinions[current]?.decription}</p>
      <div className="flex gap-2 mt-3 mb-2 items-center">
        {opinions[current]?.image && (
          <Image
            src={opinions[current]?.image}
            width={40}
            height={40}
            objectFit="contain"
            alt={opinions[current]?.name}
            className="rounded-full"
          />
        )}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{opinions[current]?.name}</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={
                  i < opinions[current]?.star
                    ? 'text-amber-400'
                    : 'text-gray-400'
                }
              />
            ))}
          </div>
        </div>
      </div>
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
      </div>
    </div>
  )
}

export default Opiniones
