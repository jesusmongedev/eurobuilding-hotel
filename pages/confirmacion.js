import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Rooms = () => {
  const router = useRouter()
  const [roomList, setRoomList] = useState([])
  const [confirmationClicked, setConfirmationClicked] = useState(false)

  //ES6 Destructuring
  const { adults, kids, startDate, endDate, roomTitle } = router.query
  const guests = parseInt(adults) + parseInt(kids)
  // Formatted Start and endd Date
  const formattedStartDate = format(new Date(startDate), 'dd/MM/yyyy')
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yyyy')
  // const range = `${formattedStartDate} - ${formattedEndDate}`

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
    <>
      <Head>
        <title>Confirmación</title>
      </Head>
      <main>
        <section className="my-8 flex flex-col gap-6 w-[250px] mx-auto">
          <div className="flex justify-between">
            <p className="font-semibold text-sm ">{formattedStartDate}</p>
            <p className="font-semibold text-sm ">{formattedEndDate}</p>
          </div>
          <div className="shadow-xl shadow-complementary p-4">
            <h3 className="text-center border-b-2 font-semibold">Huéspedes</h3>
            <div className="flex justify-around">
              <div className="text-center">
                <p>Adultos</p>
                {adults}
              </div>
              <div className="text-center">
                <p>Niños</p>
                {kids}
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl text-primary font-bold">
              {confirmationClicked ? 'Felicitaciones' : roomTitle}
            </h3>
            <div>⭐⭐⭐⭐⭐</div>
            <div className="flex flex-col gap-1">
              {!confirmationClicked && (
                <>
                  <button
                    className="button-gradient text-white py-1 rounded-[4px]"
                    onClick={() => setConfirmationClicked(!confirmationClicked)}
                  >
                    Continuar
                  </button>
                  <button
                    className="bg-primary text-white py-1 rounded-[4px]"
                    onClick={() => router.push('/')}
                  >
                    Editar
                  </button>
                </>
              )}
              {confirmationClicked && (
                <button
                  className="button-gradient text-white py-1 rounded-[4px] mt-2"
                  onClick={() => setConfirmationClicked(!confirmationClicked)}
                >
                  RESERVADA
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Rooms

// export async function getServerSideProps() {
//   const getRooms = await fetch(
//     "https://api.jsonbin.io/b/61c1595878cc9429607cc3df"
//   ).then((res) => res.json());

//   return {
//     props: {
//       getRooms,
//     },
//   };
// }
