import { useState } from 'react'
import DefaultCard from './DefaultCard'
import MoreInfoCard from './MoreInfoCard'

const RoomSlider = ({ room_title, room_image, room_price }) => {
  const [defaultCard, setDefaultCard] = useState(true)
  const [moreInfoCard, setMoreInfoCard] = useState(false)

  const handleDefaultCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  const handleMoreInfoCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  return (
    <div className="min-w-[280px] max-w-[328px] sliderCards mt-6">
      <div className="relative flex flex-col background min-h-[300px] py-3  bg-no-repeat bg-cover rounded-md text-white">
        <div className="absolute top-[-1.25em] bg-primary rounded-t-md w-full">
          <h2 className="text-md text-center uppercase text-white">
            {room_title}
          </h2>
        </div>
        {defaultCard && (
          <DefaultCard
            room_price={room_price}
            handleDefaultCard={handleDefaultCard}
          />
        )}

        {moreInfoCard && (
          <MoreInfoCard
            room_price={room_price}
            handleMoreInfoCard={handleMoreInfoCard}
          />
        )}

        <style jsx>{`
          .background {
            background-image: linear-gradient(
                180deg,
                rgba(196, 196, 196, 0) 30%,
                rgba(0, 0, 60, 0.72) 70%
              ),
              url(${room_image.url});
          }
        `}</style>
      </div>
    </div>
  )
}

export default RoomSlider
