import { PlusIcon, MinusIcon } from '@heroicons/react/outline'

const NumberOfGuests = ({
  kids,
  adults,
  decrementAdults,
  decrementKids,
  setAdults,
  setKids,
}) => {
  return (
    <div className="flex justify-center border-b border-primary py-2 mx-5">
      <div className="flex flex-1 justify-between ">
        <div className="flex items-center text-sm space-x-2 ">
          <p>Adultos</p>
          <MinusIcon
            className="h-6 cursor-pointer border-2 border-primary rounded-full p-1 text-primary"
            onClick={decrementAdults}
          />
          <span className="text-gray-500 text-center font-semibold w-4">
            {adults}
          </span>
          <PlusIcon
            className="h-6 cursor-pointer border-2 border-primary rounded-full p-1 text-primary"
            onClick={() => setAdults((adults += 1))}
          />
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <p>Niños</p>
          <MinusIcon
            className="h-6 cursor-pointer border-2 border-primary rounded-full p-1 text-primary"
            onClick={decrementKids}
          />
          <span className="text-gray-500 text-center font-semibold w-3">
            {kids}
          </span>
          <PlusIcon
            className="h-6 cursor-pointer border-2 border-primary rounded-full p-1 text-primary"
            onClick={() => setKids((kids += 1))}
          />
        </div>
      </div>
    </div>
  )
}

export default NumberOfGuests
