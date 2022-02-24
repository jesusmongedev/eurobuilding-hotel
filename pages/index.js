import Head from 'next/head'
import AboutHotel from '../Components/AboutHotel'
import Booking from '../Components/Booking'
import EuroBuSlider from '../Components/EuroBuSlider'
import HeroVideo from '../Components/HeroVideo'
import Opiniones from '../Components/Opiniones'
import RoomsSection from '../Components/RoomsSection'
import { server } from '../config'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/rooms`)
  const { rooms } = await res.json()

  return {
    props: {
      rooms,
    },
  }
}

export default function Home({ rooms }) {
  return (
    <>
      <Head>
        <title>EuroBuilding</title>
        <meta name="description" content="EuroBuilding Hotel App" />
        <link rel="icon" href="https://i.imgur.com/v8S1WPT.png" />
      </Head>
      <div className="max-w-[960px] mx-auto">
        <HeroVideo />
        <Booking rooms={rooms} />
        <Opiniones />
        <AboutHotel />
        <EuroBuSlider rooms={rooms} />
        <RoomsSection rooms={rooms} />
      </div>
    </>
  )
}
