import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <ul
      className={`space-x-4 hidden md:flex md:flex-col md:space-y-4 md:items-center md:justify-center  md:w-full md:text-sm xl:flex-row xl:space-x-8 xl:space-y-0 xl:text-base `}
    >
      <li className='hover:text-red-600 hover:animate-bounce'>
        <Link href='/'>Inicio</Link>
      </li>
      <li className='hover:text-red-600 hover:animate-bounce'>
        <Link href='/'>Nosotros</Link>
      </li>
      <li className='hover:text-red-600 hover:animate-bounce'>
        <Link href='/'>Contacto</Link>
      </li>
    </ul>
  )
}
export default DesktopMenu
