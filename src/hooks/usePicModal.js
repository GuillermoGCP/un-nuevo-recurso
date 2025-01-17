import { useEffect, useRef, useState } from 'react'
const usePicModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [url, setUrl] = useState('')

  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const fourthSectionRef = useRef(null)
  const fithSectionRef = useRef(null)
  const sixthSectionRef = useRef(null)
  const seventhSectionRef = useRef(null)

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
        setUrl('/mercadillo1.jpg')
      } else if (path.includes(thirdSectionRef.current)) {
        setUrl('/colabora.jpg')
      } else if (path.includes(fourthSectionRef.current)) {
        setUrl('/colabora3.jpg')
      } else if (path.includes(fithSectionRef.current)) {
        setUrl('/colabora2.jpg')
      } else if (path.includes(sixthSectionRef.current)) {
        setUrl('/mercadillo1.jpg')
      } else if (path.includes(seventhSectionRef.current)) {
        setUrl('/paseo.jpg')
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
    thirdSectionRef,
    fourthSectionRef,
    fithSectionRef,
    sixthSectionRef,
    seventhSectionRef,
  }
}
export default usePicModal
