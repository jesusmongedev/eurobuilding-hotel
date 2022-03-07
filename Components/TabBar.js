import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/solid'

const TabBar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 fixed left-0 right-0 bottom-0 bg-white shadow-lg h-16 z-10">
      <HomeIcon className="w-8 text-primary" />
      <SearchIcon className="w-8 text-primary" />
      <HeartIcon className="w-8 text-primary" />
      <UserIcon className="w-8 text-primary" />
    </nav>
  )
}

export default TabBar
