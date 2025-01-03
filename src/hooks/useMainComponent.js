import { useEffect, useRef, useState } from 'react'
const useMainComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [url, setUrl] = useState('')

  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const handleSelectPic = (event) => {
      const path = event.composedPath()
      if (path.includes(firstSectionRef.current)) {
        setUrl('/portada.jpeg')
      } else if (path.includes(secondSectionRef.current)) {
        setUrl('/mercadillo.jpeg')
      }
    }

    document.addEventListener('click', handleSelectPic)
    return () => {
      document.removeEventListener('click', handleSelectPic)
    }
  }, [])
  return {
    isModalOpen,
    url,
    firstSectionRef,
    secondSectionRef,
    handleOpenModal,
    handleCloseModal,
  }
}
export default useMainComponent
