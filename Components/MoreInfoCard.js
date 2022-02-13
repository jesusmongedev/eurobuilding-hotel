import { Aire, Cama, Piscina } from './SVGIcons'

const MoreInfoCard = ({ room_price, handleMoreInfoCard }) => {
  return (
    <div className="flex flex-col gap-2 px-2 text-sm">
      <div className="flex flex-1 items-center justify-between">
        <h3 className="font-bold">Características</h3>
        <button onClick={handleMoreInfoCard} className="px-6 border rounded-md">
          Ver menos
        </button>
      </div>
      <p className="leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        exercitationem perspiciatis neque, quae adipisci dolorem.
      </p>
      <div className="flex justify-between">
        <div className="">
          <button className="rounded-md font-semibold px-3 py-[0.1em] bg-primary mr-3">
            Simple
          </button>
          <button className="border rounded-md font-semibold px-3 py-[0.1em]">
            Doble
          </button>
        </div>
        <p>${room_price}</p>
      </div>
      <div>
        <Piscina />
        <Aire />
        <Cama />
      </div>
      <div className="flex justify-between">
        <p>Cantidad</p>
        <div className="flex gap-4">
          ➖<p>0</p>➕
        </div>
      </div>
      <button className="border rounded-md font-semibold">Escoger</button>
    </div>
  )
}

export default MoreInfoCard

{
  /* <div>
          <Piscina />
          <Aire />
          <Cama />
        </div> */
}

{
  /* <div className="flex flex-col grow">
          <p className="self-end pb-2 font-bold">${room_price}</p>
          <button onClick={handleMoreInfoCard} className="border rounded-md">
            Ver menos
          </button>
        </div> */
}
