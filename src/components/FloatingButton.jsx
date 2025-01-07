'use client'
import { useState, useEffect } from 'react'

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    alert('¡Botón flotante clickeado!')
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className='absolute top-[50%] right-[60%] z-50 p-4  text-white rounded-full hover:scale-105 transition-all opacity-0 animate-slideInFromTop duration-2000 w-[23vw] h-[23vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] xl:w-[9vw] xl:h-[9vw] text-sm md:text-base lg:text-lg xl:text-xl'
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-in',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
          }}
          aria-label='Botón flotante'
        >
          <img
            src='/mundo.webp'
            alt='Imagen de fondo'
            className='world-image'
          />
          <p className='bg-[#009FD9] rounded-lg font-[family-name:var(--font-atma)]'>
            {' '}
            Colabora con nosotros
          </p>
        </button>
      )}
    </>
  )
}

export default FloatingButton
