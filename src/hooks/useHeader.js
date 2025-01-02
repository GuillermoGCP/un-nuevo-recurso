import { useEffect, useState } from 'react'

const useHeader = () => {
  const [menu, setMenu] = useState(false) // Para el menú de móvil

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }

  // Este useEffect se ejecuta cuando el tamaño de la pantalla cambia
  useEffect(() => {
    const handleResize = () => {
      setMenu(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  //Esto es para que se cierre el menú al hacer click fuera de él, pero se ajuste a los botones del menú si este está abierto
  useEffect(() => {
    const handleClick = (event) => {
      const path = event.composedPath()
      if (menu && !path.includes(document.querySelector('.burguer-menu'))) {
        setMenu(!menu)
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [menu])

  return {
    menu,
    toggleMenu,
    handleMenuClose,
  }
}
export default useHeader
