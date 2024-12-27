import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='min-h-[14vh] flex items-center justify-between text-white p-8 bg-header border-b border-stone-300 w-[90%] m-auto font-[family-name:var(--font-geist-mono)]'>
      <h1 className='text-3xl  text-stone-700 flex items-center justify-center flex-col '>
        <p>Un nuevo recurso</p>
        <Image src='/logoP-NR.jpg' alt='Logo' width={100} height={100} />
      </h1>
      <Image src='/logoNR.jpg' alt='Logo' width={500} height={500} />
      <nav className='text-stone-700'>
        <ul className='flex space-x-4'>
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
