'use client'
import Link from 'next/link'
import '../styles/header.css'
import MenuIcon from './icons/MenuIcon'
import { usePathname } from 'next/navigation'

const BurguerMenu = ({ toggleMenu, menu, handleMenuClose }) => {
  const router = usePathname()
  const currentPage = router

  return (
    <>
      <button
        onClick={toggleMenu}
        className='md:hidden  hover:text-red-600 hover:scale-125 transition-transform duration-500 ease-in-out'
      >
        <MenuIcon />
      </button>
      <ul className={`burguer-menu ${menu ? 'activated' : ''} z-[1000] `}>
        <>
          {currentPage !== '/' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce '>
              <Link href='/' onClick={handleMenuClose}>
                Inicio
              </Link>
            </li>
          )}
          {currentPage !== '/gallery' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
              <Link href='/gallery' onClick={handleMenuClose}>
                Galería
              </Link>
            </li>
          )}

          {currentPage !== '/colaborate' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
              <Link href='/colaborate' onClick={handleMenuClose}>
                Colabora
              </Link>
            </li>
          )}
          {currentPage !== '/contact' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
              <Link href='/contact' onClick={handleMenuClose}>
                Contacto
              </Link>
            </li>
          )}
          {currentPage !== '/projects' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
              <Link href='/projects' onClick={handleMenuClose}>
                Proyectos
              </Link>
            </li>
          )}
          {currentPage !== '/legal-terms' && (
            <li className='text-center text-base py-2 hover:text-red-600 hover:animate-bounce'>
              <Link href='/legal-terms' onClick={handleMenuClose}>
                Transparencia
              </Link>
            </li>
          )}
        </>
      </ul>
    </>
  )
}
export default BurguerMenu
