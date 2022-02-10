import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://i.imgur.com/g1zODkm.jpg"
        layout="fill"
        objectFit="cover"
        priority
        alt="EuroBuilding Banner"
      />
    </div>
  )
}

export default HeroImage
