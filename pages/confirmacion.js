import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { useState } from 'react'
import Head from 'next/head'
import { AiFillStar } from 'react-icons/ai'

const Rooms = () => {
  const router = useRouter()
  const [confirmationClicked, setConfirmationClicked] = useState(false)

  //ES6 Destructuring
  const { adults, kids, startDate, endDate, roomTitle } = router.query
  console.log(startDate)
  console.log(endDate)

  const getUTCStartDate = (dateStartString = Date.now()) => {
    const date = new Date(dateStartString)

    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    )
  }

  const getUTCEndtDate = (dateEndString = Date.now()) => {
    const date = new Date(dateEndString)

    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    )
  }

  // Formatted Start and end Date
  const formattedStartDate = format(getUTCStartDate(startDate), 'dd/MM/yyyy')
  console.log(formattedStartDate)
  const formattedEndDate = format(getUTCEndtDate(endDate), 'dd/MM/yyyy')
  console.log(formattedEndDate)
  // const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <>
      <Head>
        <title>Confirmación</title>
      </Head>
      <main>
        <section className="my-8 flex flex-col gap-6 w-[250px] mx-auto">
          <div className="flex">
            <p className="font-semibold text-md ">
              {' '}
              Check in:{' '}
              <span className="text-primary">{formattedStartDate}</span>
            </p>
            <p className="font-semibold text-md text-right">
              {' '}
              Check out:{' '}
              <span className="text-primary">{formattedEndDate}</span>
            </p>
          </div>
          <div className="shadow-xl shadow-complementary p-4 rounded-lg">
            <h3 className="text-center border-b-2 font-semibold">Huéspedes</h3>
            <div className="flex justify-around">
              <div className="text-center">
                <p>Adultos</p>
                <span className="text-primary font-semibold">{adults}</span>
              </div>
              <div className="text-center">
                <p>Niños</p>
                <span className="text-primary font-semibold">{kids}</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-primary font-bold">
              {confirmationClicked ? 'Felicitaciones' : roomTitle}
            </h3>
            <div className="flex justify-center gap-1 my-4">
              {' '}
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className={i < 5 ? 'text-amber-400' : ''} />
              ))}{' '}
            </div>
            <div className="flex flex-col gap-2">
              {!confirmationClicked && (
                <>
                  <button
                    className="button-gradient text-white font-semibold py-2 rounded-lg"
                    onClick={() => setConfirmationClicked(!confirmationClicked)}
                  >
                    Continuar
                  </button>
                  <button
                    className="bg-complementary text-white font-semibold py-2 rounded-lg"
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
