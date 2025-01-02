import Link from 'next/link'
import '../styles/header.css'
import MenuIcon from './MenuIcon'

const BurguerMenu = ({ toggleMenu, menu, handleMenuClose }) => {
  return (
    <>
      <button
        onClick={toggleMenu}
        className='md:hidden  hover:text-red-600 hover:scale-125 transition-transform duration-500 ease-in-out'
      >
        <MenuIcon />
      </button>
      <ul className={`burguer-menu ${menu ? 'activated' : ''} z-[1000]`}>
        <>
          <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
            <Link href='/' onClick={handleMenuClose}>
              Inicio
            </Link>
          </li>
          <li className='text-center text-base py-2  hover:text-red-600 hover:animate-bounce'>
            <Link href='/' onClick={handleMenuClose}>
              Nosotros
            </Link>
          </li>
          <li className='text-center text-base py-2  hover:text-red-600 hover:animate-bounce'>
            <Link href='/' onClick={handleMenuClose}>
              Contacto
            </Link>
          </li>
        </>
      </ul>
    </>
  )
}
export default BurguerMenu
