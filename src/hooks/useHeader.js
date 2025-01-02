import { useEffect, useState } from 'react'

const useHeader = () => {
  const [menu, setMenu] = useState(false) // Para el menú de móvil

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }
  useEffect(() => {
    const handleResize = () => {
      setMenu(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    menu,
    toggleMenu,
    handleMenuClose,
  }
}
export default useHeader
