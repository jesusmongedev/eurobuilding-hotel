import { Piscina, Aire, Wifi, Tv } from './SVGIcons'

const MoreInfoCard = ({ room_price, handleMoreInfoCard }) => {
  return (
    <div className="flex flex-col px-2 text-sm gap-3 mt-1">
      <div className="flex flex-1 items-center justify-between">
        <h3 className="font-bold">Características</h3>
        <button onClick={handleMoreInfoCard} className="px-6 border rounded-md">
          Ver menos
        </button>
      </div>
      <p className="leading-tight font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        exercitationem perspiciatis neque, quae adipisci dolorem.
      </p>
      <div className="flex justify-between">
        <div className="">
          <button className="rounded-md font-regular text-xs px-4 py-1 bg-primary mr-3">
            Simple
          </button>
          <button className="border rounded-md font-regular text-xs px-4 py-1">
            Doble
          </button>
        </div>
        <p className="text-[15px] font-bold">${room_price},00</p>
      </div>
      <div className="font-medium">
        <div className="flex gap-2 items-center">
          <Piscina /> Piscina
        </div>
        <div className="flex gap-2 items-center">
          <Aire /> Aire Acondicionado
        </div>
        <div className="flex gap-2 items-center">
          <Wifi /> Wifi Libre
        </div>
        <div className="flex gap-2 items-center">
          <Tv /> TV
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>Cantidad</p>
        <div className="flex gap-4">
          <button className="bg-primary rounded-full w-5 h-5">-</button>{' '}
          <p>0</p>{' '}
          <button className="bg-primary rounded-full w-5 h-5">+</button>
        </div>
      </div>
      <button className="border rounded-md font-semibold">Escoger</button>
    </div>
  )
}

export default MoreInfoCard
