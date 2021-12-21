import { useState } from "react";
import Image from 'next/image';
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import EuroRoomsData from '../EuroBuData/EuroRoomsData.json';

const Booking = () => {

  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // Decrement number of adults and kids
  const decrementAdults = () => {
    setAdults( adults > 1? adults - 1 : adults=1);
  }
  const decrementKids = () => {
    setKids( kids > 1? kids - 1 : kids=0);
  }
  // Cancel Booking close Date Range Picker and Number of Guest inputs
  const cancelBookinn = () => {
    setDatePicker(false);
  }

  return (
    <div className="p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold"> HAGA SU RESERVACIÓN </h2>

      <div className="flex justify-between">
        <span
          className="flex gap-5 border-2 border-purple-800 rounded-lg px-3"
          onClick={() => setDatePicker(!datePicker)}
        >
          Check in <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </span>
        <span className="flex gap-5 border-2 border-purple-800 rounded-lg px-3">
          Check out <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </span>
      </div>

      {datePicker && (
        <>
          <DateRangePicker
            className="mx-auto"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#6A0DAD"]}
            onChange={handleSelect}
          />
          <div className="flex justify-between items-center border-b border-purple-800 py-2">
          <h2 className="text-xl font-semibold">Huéspedes</h2>
            <p>Adultos</p>
            <div className="flex">
              <div className="flex items-center gap-5">
                <PlusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={() => setAdults((adults += 1))}
                />
                <span className="text-gray-500 font-semibold">{adults}</span>
                <MinusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={decrementAdults}
                />
              </div>
            </div>
            <p>Niños</p>
            <div>
              <div className="flex items-center gap-5">
                <PlusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={() => setKids((kids += 1))}
                />
                <span className="font-semibold">{kids}</span>
                <MinusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={decrementKids}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <button 
              className="flex-grow text-gray-500"
              onClick={cancelBookinn}
            >
              Cancel
            </button>
            <button 
              className="flex-grow text-purple-800"
            >
              Continue
            </button>
          </div>
          <div>
            {EuroRoomsData.map((val, key) => {
              return (
                <div>
                  <div className="text-xl text-center font-bold mb-2"> {val.room_title} </div>
                  <div className="relative flex items-center h-60 cursor-pointer my-auto"> 
                    <Image
                      src={val.room_image.url}
                      alt={val.room_image.alt}
                      layout="fill" 
                      objectFit="contain"
                    /> 
                  </div>
                  <div> {val.room_description} </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      <button className="bg-purple-800 text-white rounded-lg p-1 mt-1">
        RESERVAR
      </button>
    </div>
  );
};

export default Booking;
