import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import RoomSlider from './RoomSlider'
import NumberOfGuests from './NumberOfGuests'

const Booking = () => {
  const [datePicker, setDatePicker] = useState(false)
  // const [roomsSlider, setRoomsSlider] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [roomList, setRoomList] = useState([])

  const formattedStartDate = format(new Date(startDate), 'dd/MM/yy')
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yy')

  const [adults, setAdults] = useState(1)
  const [kids, setKids] = useState(0)
  const router = useRouter()

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  // Decrement number of adults and kids
  const decrementAdults = () => {
    setAdults(adults > 1 ? adults - 1 : (adults = 1))
  }
  const decrementKids = () => {
    setKids(kids > 1 ? kids - 1 : (kids = 0))
  }
  // // Cancel Booking close Date Range Picker and Number of Guest inputs
  // const cancelBookinn = () => {
  //   setRoomsSlider(false)
  //   setDatePicker(false)
  // }
  // roomPage function will open the RoomPage
  const roomPage = () => {
    router.push({
      pathname: '/rooms',
      query: {
        adults,
        kids,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    })
  }
  // Users data provide in the Home page
  useEffect(() => {
    window
      .fetch('/api/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        setRoomList(rooms)
      })
  }, [])

  return (
    <div className="max-w-[320px] mx-auto">
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-sm font-semibold"> HAGA SU RESERVACIÓN </h2>

        <div className="flex justify-between">
          <span
            className="euro-button flex flex-col"
            onClick={() => setDatePicker(!datePicker)}
          >
            <div>
              Check in{' '}
              <ChevronDownIcon className="h-4 cursor-pointer inline-block" />
            </div>
            {startDate ? (
              <p className="text-primary">{formattedStartDate}</p>
            ) : (
              ''
            )}
          </span>
          <span className="euro-button flex flex-col">
            <div>
              Check out{' '}
              <ChevronDownIcon className="h-4 cursor-pointer inline-block" />
            </div>
            {endDate ? <p className="text-primary">{formattedEndDate}</p> : ''}
          </span>
        </div>
      </div>

      {datePicker && (
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange
              inline
            />
          </div>

          <h2 className="text-xl font-semibold text-center">Huéspedes</h2>
          <NumberOfGuests
            kids={kids}
            adults={adults}
            decrementKids={decrementKids}
            decrementAdults={decrementAdults}
            setAdults={setAdults}
            setKids={setKids}
          />

          <h2 className="text-xl font-semibold text-center my-2 ">
            Seleccione su habitación
          </h2>
          <div className="flex sliderContainer max-w-[320px] gap-8 mx-auto pb-3">
            {roomList?.map(
              ({
                id,
                room_title,
                room_description,
                room_image,
                room_price,
              }) => (
                <RoomSlider
                  key={id}
                  room_title={room_title}
                  room_description={room_description}
                  room_image={room_image}
                  room_price={room_price}
                />
              )
            )}
          </div>
          {/* <div className="flex">
            <button className="flex-grow text-gray-500" onClick={cancelBookinn}>
              Cancel
            </button>
            <button
              onClick={() => setRoomsSlider(!roomsSlider)}
              className="flex-grow text-primary"
            >
              Continue
            </button>
          </div> */}
          <button
            onClick={roomPage}
            className="bg-primary text-white rounded-lg p-1 mb-6"
          >
            RESERVAR
          </button>
        </div>
      )}
    </div>
  )
}

export default Booking
