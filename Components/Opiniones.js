import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const Opiniones = () => {
  const [opinions, setOpinions] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    window
      .fetch('/api/opinions')
      .then((res) => res.json())
      .then(({ opinions }) => {
        setOpinions(opinions[current])
      })
  }, [current])
  return (
    <div className="bg-gray-200 px-4 pt-4 pb-2">
      <h2 className="text-sm font-semibold mb-2">OPINIONES</h2>
      <p className="text-xs">{opinions?.decription}</p>
      <div className="flex gap-2 mt-3 mb-2 items-center">
        {opinions?.image && (
          <Image
            src={opinions?.image}
            width={40}
            height={40}
            objectFit="contain"
            alt={opinions?.name}
            className="rounded-full"
          />
        )}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{opinions?.name}</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={
                  i < opinions?.star ? 'text-amber-400' : 'text-gray-400'
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
          className="rounded-button"
        ></button>
        <button
          onClick={() => {
            setCurrent(1)
          }}
          className="rounded-button"
        ></button>
        <button
          onClick={() => {
            setCurrent(2)
          }}
          className="rounded-button"
        ></button>
      </div>
    </div>
  )
}

export default Opiniones
