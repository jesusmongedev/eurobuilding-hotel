import { useState } from 'react'
import DefaultCard from './DefaultCard'
import MoreInfoCard from './MoreInfoCard'

const RoomSlider = ({ room_title, room_image, room_price, setRoomTitle }) => {
  const [defaultCard, setDefaultCard] = useState(true)
  const [moreInfoCard, setMoreInfoCard] = useState(false)

  const handleRoomName = (roomName) => {
    setRoomTitle(roomName)
  }

  const handleDefaultCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  const handleMoreInfoCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  return (
    <div className="max-w-[328px] min-w-[280px] sliderCards mt-6">
      <div className="relative flex flex-col background min-h-[328px] py-3  bg-no-repeat bg-contain rounded-md text-white">
        <div className="absolute top-[-1.25em] bg-primary rounded-t-md w-full p-1">
          <h2 className="text-xs text-center uppercase text-white">
            {room_title}
          </h2>
        </div>
        {defaultCard && (
          <DefaultCard
            room_price={room_price}
            room_title={room_title}
            handleDefaultCard={handleDefaultCard}
            handleRoomName={handleRoomName}
          />
        )}

        {moreInfoCard && (
          <MoreInfoCard
            room_price={room_price}
            room_title={room_title}
            handleMoreInfoCard={handleMoreInfoCard}
            handleRoomName={handleRoomName}
          />
        )}

        <style jsx>{`
          .background {
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 60, 0.35),
                rgba(0, 0, 60, 0.6)
              ),
              url(${room_image.url});
          }
        `}</style>
      </div>
    </div>
  )
}

export default RoomSlider

// .background {
//   background-image: linear-gradient(
//       180deg,
//       rgba(196, 196, 196, 0) 0%,
//       rgba(0, 0, 0, 1) 100%
//     ),
//     url(${room_image.url});
// }
