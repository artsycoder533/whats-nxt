import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="px-4 py-2 fixed w-full shadow-lg z-30 bg-white">
      <Navbar />
    </header>
  )
}

export default Header;