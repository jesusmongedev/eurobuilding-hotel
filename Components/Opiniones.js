import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const Opiniones = () => {
  const [opinions, setOpinions] = useState([])
  const [current, setCurrent] = useState(0)

  const star = (star) => {
    var stars = []
    for (var i = 0; i < star; i++) {
      stars.push(<AiFillStar className="text-yellow-400" />)
    }
    if (star < 5) {
      for (var i = 0; i < 5 - star; i++) {
        stars.push(<AiFillStar className="text-gray-400 " />)
      }
    }
    return stars
  }

  useEffect(() => {
    window
      .fetch('/api/opinions')
      .then((res) => res.json())
      .then(({ opinions }) => {
        setOpinions(opinions)
      })
  }, [])
  return (
    <div className="bg-gray-200 px-4 pt-4 pb-2">
      <h2 className="text-sm font-semibold mb-2">OPINIONES</h2>
      <p className="text-xs">{opinions[current]?.decription}</p>
      <div className="flex gap-2 mt-3 mb-2 items-center">
        <Image
          src={opinions[current]?.image}
          width={40}
          height={40}
          objectFit="contain"
          alt={opinions[current]?.name}
          className="rounded-full"
        />
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{opinions[current]?.name}</h3>
          <div className="flex gap-1">{star(opinions[current]?.star)}</div>
        </div>
      </div>
      <div className="text-center space-x-2">
        <button
          onClick={() => {
            setCurrent(0)
          }}
          className="rounded-full border border-gray-400 w-3 h-3"
        ></button>
        <button
          onClick={() => {
            setCurrent(1)
          }}
          className="rounded-full border border-gray-400 w-3 h-3"
        ></button>
        <button
          onClick={() => {
            setCurrent(2)
          }}
          className="rounded-full border border-gray-400 w-3 h-3"
        ></button>
      </div>
    </div>
  )
}

export default Opiniones
