import { SearchIcon } from '@heroicons/react/solid'

const HeroVideo = () => {
  return (
    <div className="relative text-sm" id="search">
      <video autoPlay loop muted className="mx-auto">
        <source src="https://i.imgur.com/vI2MKJJ.mp4" type="video/mp4" />
      </video>
      <div className="w-60 absolute right-[calc(50%_-_7.5rem)] top-4 flex flex-col justify-center text-white">
        <div className="w-full flex items-center bg-secondary rounded-full shadow-2xl py-2 pl-12 pr-4 mt-3 ">
          <SearchIcon className="w-5" />
          <input
            className="w-full bg-transparent font-bold outline-none ml-1 placeholder:text-inherit placeholder:font-inherit"
            type="search"
            placeholder="Buscar habitación"
          />
        </div>
      </div>
      <button className="absolute bottom-6 right-[calc(50%_-_79.05px)] bg-primary shadow-2xl text-white py-1 px-5 rounded-lg font-semibold">
        RESERVAR AHORA
      </button>
    </div>
  )
}

export default HeroVideo
