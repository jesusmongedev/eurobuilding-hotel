// import Image from 'next/image'
// import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <div className="w-60 absolute right-[calc(50%_-_7.5rem)] flex flex-col justify-center text-white z-10 text-sm">
      <div className="w-full flex items-center bg-secondary rounded-full shadow-lg py-2 pl-14 pr-4 mt-3 ">
        <SearchIcon className="w-4" />
        <input
          className="w-full bg-transparent font-bold outline-none ml-1 placeholder:text-inherit placeholder:font-inherit"
          type="search"
          placeholder="Search here ..."
        />
      </div>
      <button className="absolute right-[calc(50%_-_63.47px)] top-32 shadow-lg bg-primary py-1 px-4 rounded-full font-bold">
        Reserva Ahora
      </button>
      {/* <header className="sticky top-0 z-10 grid grid-cols-3 shadow-md p-5 bg-primary text-white md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            onClick={() => router.push('/')}
            src="https://i.imgur.com/IFs5niC.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="EuroBuilding logo"
          />
        </div>
        <div className="flex items-center justify-center font-bold">
          <h1>EUROBUILDING</h1>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center border-2 p-2 rounded-full">
            <MenuIcon className="h-5 cursor-pointer" />
            <UserCircleIcon className="h-5 cursor-pointer" />
          </div>
        </div>
      </header> */}
    </div>
  )
}

export default Header
