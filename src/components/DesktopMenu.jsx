'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DesktopMenu = () => {
  const router = usePathname()
  const currentPage = router

  return (
    <ul
      className={`space-x-4 hidden md:flex md:flex-col md:space-y-4 md:items-center md:justify-center md:w-full md:text-sm xl:flex-row xl:space-x-8 xl:space-y-0 xl:text-base text-[#4174C0]`}
    >
      {currentPage !== '/' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/'>Inicio</Link>
        </li>
      )}
      {currentPage !== '/gallery' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/'>Galería </Link>
        </li>
      )}
      {currentPage !== '/us' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/'>Quienes somos</Link>
        </li>
      )}
      {currentPage !== '/colaborate' && (
        <li className='hover:text-red-600 hover:animate-bounce '>
          <Link href='/colaborate'>Colabora</Link>
        </li>
      )}
    </ul>
  )
}
export default DesktopMenu
