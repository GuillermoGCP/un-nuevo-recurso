'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DesktopMenu = () => {
  const router = usePathname()
  const currentPage = router

  return (
    <ul
      className={`hidden md:text-sm xl-text-base md:grid md:grid-cols-1 md:gap-y-4 md:items-start md:justify-center 
    xl:grid-cols-3 xl:gap-4 xl:w-full 2xl:text-base text-[#4174C0] `}
    >
      {currentPage !== '/' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/'>Inicio</Link>
        </li>
      )}
      {currentPage !== '/gallery' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/gallery'>Galería </Link>
        </li>
      )}

      {currentPage !== '/colaborate' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/colaborate'>Colabora</Link>
        </li>
      )}
      {currentPage !== '/contact' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/contact'>Contacto</Link>
        </li>
      )}
      {currentPage !== '/projects' && (
        <li className=' hover:text-red-600 hover:animate-bounce'>
          <Link href='/projects'>Proyectos</Link>
        </li>
      )}
      {currentPage !== '/legal-terms' && (
        <li className=' hover:text-red-600 hover:animate-bounce'>
          <Link href='/legal-terms'>Transparencia</Link>
        </li>
      )}
    </ul>
  )
}
export default DesktopMenu
