'use client'
import useHeader from '@/hooks/useHeader'
import Image from 'next/image'
import '../styles/header.css'
import DesktopMenu from './DesktopMenu'
import BurguerMenu from './BurguerMenu'

const Header = () => {
  const { menu, toggleMenu, handleMenuClose } = useHeader()

  return (
    <header className='min-h-[14vh] flex items-center justify-between text-white p-8 bg-header border-b border-stone-300 w-[90%] m-auto font-[family-name:var(--font-geist-mono)]'>
      <h1 className=' text-stone-700 flex items-center justify-center flex-col sm:text-red-600 sm:text-base md:text-green-600 md:text-lg lg:text-2xl lg:text-blue-600 xl:text-3xl xl:text-yellow-600 mx-auto sm:mx-0'>
        <p>Un nuevo recurso</p>
        <Image src='/logoP-NR.jpg' alt='Logo' width={100} height={100} />
      </h1>
      <div className='hidden sm:block sm:w-56 lg:w-72 xl:w-96'>
        <Image src='/logoNR.jpg' alt='Logo' width={500} height={500} />
      </div>

      <nav className='text-stone-700'>
        <BurguerMenu
          toggleMenu={toggleMenu}
          menu={menu}
          handleMenuClose={handleMenuClose}
        />
        <DesktopMenu />
      </nav>
    </header>
  )
}

export default Header
