import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
// import Router from 'next/router'

const TabBar = () => {
  // const router = Router.query

  return (
    <nav className="flex items-center justify-evenly fixed left-0 right-0 bottom-0 bg-white tab-shadow rounded-t-lg h-16 z-10">
      <Link href="/">
        <a className="flex flex-col items-center">
          <HomeIcon className="w-8 text-primary" />
          <span className="text-xs font-bold text-gray-500">Home</span>
        </a>
      </Link>
      <Link href="#search">
        <a className="flex flex-col items-center">
          <SearchIcon className="w-8 text-primary" />
          <span className="text-xs font-bold text-gray-500">Search</span>
        </a>
      </Link>
      <Link href="#rooms">
        <a className="flex flex-col items-center">
          <HeartIcon className="w-8 text-primary" />
          <span className="text-xs font-bold text-gray-500">Rooms</span>
        </a>
      </Link>
      <Link href="#profile">
        <a className="flex flex-col items-center">
          <UserIcon className="w-8 text-primary" />
          <span className="text-xs font-bold text-gray-500">Profile</span>
        </a>
      </Link>
    </nav>
  )
}

export default TabBar
