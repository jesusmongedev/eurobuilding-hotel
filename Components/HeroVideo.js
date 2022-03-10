import { SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

const HeroVideo = () => {
  return (
    <div className="relative text-sm" id="search">
      <Image
        src="https://i.imgur.com/6pNQNDv.jpg"
        alt="Hero Image"
        width={800}
        height={1000}
        objectFit="cover"
      />
      <div className="w-full absolute  top-4 flex flex-col justify-center text-secondary px-4">
        <div className="flex items-center bg-white rounded-lg shadow-xl py-3 pr-4  mt-3 ">
          <SearchIcon className="w-5 text-primary ml-20 mr-1" />
          <input
            className="w-full bg-transparent outline-none ml-1 placeholder:text-gray-400 placeholder:font-inherit"
            type="search"
            placeholder="Buscar habitación"
          />
        </div>
      </div>
      <button className="absolute bottom-6 right-[calc(50%_-_91.065px)] bg-primary shadow-2xl text-white py-2 px-8 rounded-lg font-semibold">
        <a href="#booking">RESERVAR AHORA</a>
      </button>
    </div>
    //     <div className="relative text-sm" id="search">
    //   <video autoPlay loop muted className="mx-auto">
    //     <source src="https://i.imgur.com/vI2MKJJ.mp4" type="video/mp4" />
    //   </video>
    //   <div className="w-60 absolute right-[calc(50%_-_7.5rem)] top-4 flex flex-col justify-center text-white">
    //     <div className="w-full flex items-center bg-secondary rounded-full shadow-2xl py-2 pl-12 pr-4 mt-3 ">
    //       <SearchIcon className="w-5" />
    //       <input
    //         className="w-full bg-transparent font-bold outline-none ml-1 placeholder:text-inherit placeholder:font-inherit"
    //         type="search"
    //         placeholder="Buscar habitación"
    //       />
    //     </div>
    //   </div>
    //   <button className="absolute bottom-6 right-[calc(50%_-_79.05px)] bg-primary shadow-2xl text-white py-1 px-5 rounded-lg font-semibold">
    //     RESERVAR AHORA
    //   </button>
    // </div>
  )
}

export default HeroVideo
