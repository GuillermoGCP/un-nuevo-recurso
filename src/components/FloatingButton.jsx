'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const FloatingButton = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    router.push(route)
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
