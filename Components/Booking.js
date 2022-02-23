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
  const [roomTitle, setRoomTitle] = useState('')
  console.log(roomTitle)

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
    if ((kids, adults, startDate, endDate)) {
      router.push({
        pathname: '/confirmacion',
        query: {
          adults,
          kids,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          roomTitle,
        },
      })
    } else {
      setDatePicker(!datePicker)
    }
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
    <div className="px-5 max-w-[320px] mx-auto">
      <div className="flex flex-col gap-2 py-5">
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
              <p className="text-primary font-semibold">{formattedStartDate}</p>
            ) : (
              ''
            )}
          </span>
          <span
            className="euro-button flex flex-col"
            onClick={() => setDatePicker(!datePicker)}
          >
            <div>
              Check out{' '}
              <ChevronDownIcon className="h-4 cursor-pointer inline-block" />
            </div>
            {endDate ? (
              <p className="text-primary font-semibold">{formattedEndDate}</p>
            ) : (
              ''
            )}
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
          <div className="flex sliderContainer w-[280px] gap-8 mx-auto pb-3">
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
                  setRoomTitle={setRoomTitle}
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
        </div>
      )}
      <div className="px-5">
        <button
          onClick={roomPage}
          className="bg-primary text-white rounded-lg py-1 mb-6 w-full"
        >
          RESERVAR
        </button>
      </div>
    </div>
  )
}

export default Booking
