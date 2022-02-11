import { useState } from 'react'
import { Aire, Cama, Piscina } from './SVGIcons'

const RoomSlider = ({ room_title, room_image, room_price }) => {
  const [defaultCard, setDefaultCard] = useState(true)
  const [moreInfoCard, setMoreInfoCard] = useState(false)

  const handleMoreInfoCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  const handleDefaultCard = () => {
    setDefaultCard(!defaultCard)
    setMoreInfoCard(!moreInfoCard)
  }

  return (
    <div className="min-w-[280px] max-w-[328px] sliderCards">
      <div className="relative flex flex-col justify-end background min-h-[300px] py-3  bg-no-repeat bg-cover rounded-md text-white">
        <div className="absolute top-0 bg-primary rounded-t-md w-full">
          <h2 className="text-md text-center uppercase text-white">
            {room_title}
          </h2>
        </div>
        {defaultCard && (
          <div className="flex flex-col space-y-2 px-2">
            <div className="flex justify-between gap-9">
              <div>
                <h3 className="pb-2 font-bold">Características</h3>
                <div className="flex gap-1">
                  <Piscina />
                  <Aire />
                  <Cama />
                </div>
              </div>

              <div className="flex flex-col grow">
                <p className="self-end pb-2 font-bold">${room_price}</p>
                <button
                  onClick={handleMoreInfoCard}
                  className="border rounded-md"
                >
                  Ver más
                </button>
              </div>
            </div>
            <button className="border rounded-md font-semibold">Escoger</button>
          </div>
        )}

        {moreInfoCard && (
          <div className="flex flex-col space-y-2 px-2">
            <div className="flex justify-between gap-9">
              <div>
                <h3 className="pb-2 font-bold">Características</h3>
                <div>
                  <Piscina />
                  <Aire />
                  <Cama />
                </div>
              </div>

              <div className="flex flex-col grow">
                <p className="self-end pb-2 font-bold">${room_price}</p>
                <button
                  onClick={handleDefaultCard}
                  className="border rounded-md"
                >
                  Ver menos
                </button>
              </div>
            </div>
            <button className="border rounded-md font-semibold">Escoger</button>
          </div>
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
