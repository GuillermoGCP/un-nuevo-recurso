import Link from 'next/link'
import '@/styles/header.css'

const BurguerMenu = ({ toggleMenu, menu, handleMenuClose }) => {
  return (
    <>
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
      <ul className={`burguer-menu ${menu ? 'activated' : ''} z-[1000]`}>
        <>
          <li className='text-center text-base py-2'>
            <Link href='/' onClick={handleMenuClose}>
              Inicio
            </Link>
          </li>
          <li className='text-center text-base py-2'>
            <Link href='/' onClick={handleMenuClose}>
              Nosotros
            </Link>
          </li>
          <li className='text-center text-base py-2'>
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
