import Head from 'next/head'
import AboutHotel from '../Components/AboutHotel'
import Booking from '../Components/Booking'
import EuroBuSlider from '../Components/EuroBuSlider'
import HeroImage from '../Components/HeroImage'
import HeroVideo from '../Components/HeroVideo'
import Opiniones from '../Components/Opiniones'
import RoomsSection from '../Components/RoomsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>EuroBuilding</title>
        <meta name="description" content="EuroBuilding Hotel App" />
        <link rel="icon" href="https://i.imgur.com/v8S1WPT.png" />
      </Head>
      {/* <HeroImage /> */}
      <div className="max-w-[960px] mx-auto">
        <HeroVideo />
        <Booking />
        <Opiniones />
        <AboutHotel />
        <EuroBuSlider />
        <RoomsSection />
      </div>
    </>
  )
}
