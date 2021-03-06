import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import RoomSlider from './RoomSlider'
import NumberOfGuests from './NumberOfGuests'

const Booking = ({ rooms }) => {
  const [datePicker, setDatePicker] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [roomTitle, setRoomTitle] = useState('')

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

  const roomPage = () => {
    if ((kids, adults, startDate, endDate, roomTitle)) {
      router.push({
        pathname: '/confirmacion',
        query: {
          adults,
          kids,
          startDate: startDate?.toISOString(),
          endDate: endDate?.toISOString(),
          roomTitle,
        },
      })
    } else {
      setDatePicker(!datePicker)
    }
  }

  return (
    <div className="px-5 max-w-[320px] mx-auto" id="booking">
      <div className="flex flex-col gap-2 py-5">
        <h2 className="text-sm font-semibold"> HAGA SU RESERVACIÓN </h2>

        <div className="flex justify-between">
          <span
            className="euro-button flex flex-col text-sm"
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
            className="euro-button flex flex-col text-sm"
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
            {!endDate && (
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange
                inline
              />
            )}
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
            {rooms?.map(
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
        </div>
      )}
      <div>
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
