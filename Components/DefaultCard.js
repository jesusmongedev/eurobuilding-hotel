import { Aire, Cama, Piscina } from './SVGIcons'

const DefaultCard = ({
  room_price,
  room_title,
  handleDefaultCard,
  handleRoomName,
}) => {
  return (
    <div className="flex flex-col mt-auto space-y-2 px-2 text-sm">
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
          <p className="self-end pb-2 text-[15px] font-bold">
            ${room_price},00
          </p>
          <button onClick={handleDefaultCard} className="border rounded-md">
            Ver más
          </button>
        </div>
      </div>
      <button
        className="border rounded-md font-semibold"
        onClick={() => handleRoomName(room_title)}
      >
        Escoger
      </button>
    </div>
  )
}

export default DefaultCard
