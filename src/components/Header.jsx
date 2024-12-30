'use client'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const toggleMenu = () => {}
  return (
    <header className='min-h-[14vh] flex items-center justify-between text-white p-8 bg-header border-b border-stone-300 w-[90%] m-auto font-[family-name:var(--font-geist-mono)]'>
      <h1 className=' text-stone-700 flex items-center justify-center flex-col sm:text-red-600 sm:text-base md:text-green-600 md:text-lg lg:text-2xl lg:text-blue-600 xl:text-3xl xl:text-yellow-600'>
        <p>Un nuevo recurso</p>
        <Image src='/logoP-NR.jpg' alt='Logo' width={100} height={100} />
      </h1>
      <div className='hidden sm:block lg:width-1/2'>
        <Image src='/logoNR.jpg' alt='Logo' width={500} height={500} />
      </div>

      <nav className='text-stone-700'>
        {/* Menú de hamburguesa para móviles */}
        <button onClick={toggleMenu} className='md:hidden'>
          <svg
            className='icon-menu'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
            />
          </svg>{' '}
        </button>

        <ul className=' space-x-4 hidden md:flex'>
          <li>
            <Link href='/'>Inicio</Link>
          </li>
          <li>
            <Link href='/'>Nosotros</Link>
          </li>
          <li>
            <Link href='/'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
