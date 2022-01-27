import Head from 'next/head'
import AboutHotel from '../Components/AboutHotel'
import Booking from '../Components/Booking'
import EuroBuSlider from '../Components/EuroBuSlider'
import HeroImage from '../Components/HeroImage'

export default function Home() {
  return (
    <>
      <Head>
        <title>EuroBuilding</title>
        <meta name="description" content="EuroBuilding Hotel App" />
        <link rel="icon" href="https://i.imgur.com/v8S1WPT.png" />
      </Head>
      <HeroImage />
      <Booking />
      <AboutHotel />
      <EuroBuSlider />
    </>
  )
}
