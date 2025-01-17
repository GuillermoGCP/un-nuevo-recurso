'use client'
import Image from 'next/image'
import '../app/globals.css'
import PicModal from './PicModal'
import usePicModal from '@/hooks/usePicModal'
import '../styles/mainComponent.css'
import FloatingButton from './FloatingButton'
import H1Component from './H1Component'
import H3Component from './H3Component'
import Separator from './Separator'
import InfoIcon from './icons/InfoIcon'

const MainComponent = () => {
  const {
    isModalOpen,
    url,
    firstSectionRef,
    secondSectionRef,
    handleOpenModal,
    handleCloseModal,
  } = usePicModal()

  return (
    <div className='main-component'>
      <section className='p-4 first-section' ref={firstSectionRef}>
        <H1Component title='Desde Lanzarote, Playa Blanca 🏖' />
        <H3Component
          title=' Nacemos con la vocación de inspirar a los vecinos y vecinas de
          Lanzarote a formar parte del cambio que deseamos ver en el mundo 🌍.
          Promovemos valores sociales como la solidaridad, la reciprocidad, el
          altruismo y la igualdad, fomentando una vida en comunidad más unida y
          consciente.'
        />
        <div className='relative'>
          <FloatingButton route={'/colaborate'} />
          <Image
            src='/portada.jpeg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='md:w-[80vw] w-full max-w-screen-md h-auto object-cover mx-auto cursor-pointer border-2 border-[#8b7070] rounded-lg'
            onClick={handleOpenModal}
          />
        </div>

        {isModalOpen && (
          <PicModal pic={url !== '' && url} onClose={handleCloseModal} />
        )}
      </section>

      <Separator text='Noticias y Actividades' />

      <div
        className='noticias  rounded-lg w-[85%] m-auto max-w-screen-md'
        style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <section className='p-4 third-section font-[family-name:var(--font-atma)] flex flex-col items-center gap-4 mt-10'>
          <H1Component title='Entrevista en El magacine de Biosfera 🎥' />
          <H3Component
            title=' ¡El diez de julio del 2024 nos ha entrevistado el equipo de El
            magacine de Biofera! ¡No te lo pierdas!🎤'
          />
          <div className='video-responsive'>
            <iframe
              src='https://www.youtube.com/embed/LCLPnuGpeWM?si=GhTXTFitsdLkMNEy'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section
          className='p-4 second-section font-[family-name:var(--font-atma)] mt-10'
          ref={secondSectionRef}
        >
          <H1Component title='Mercadillo benéfico 🛍' />
          <H3Component
            title='Segundo domingo de cada mes, en el centro comercial El Pueblo 🏪. ¡Te
            esperamos!'
          />
          <div className='flex justify-center mb-10'>
            <InfoIcon href='/projects' svgClass='w-20 h-20' />
          </div>

          <Image
            src='/mercadillo1.jpg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='w-[60vw]  max-w-screen-sm h-auto object-cover mx-auto cursor-pointer'
            onClick={handleOpenModal}
          />
        </section>
      </div>
    </div>
  )
}

export default MainComponent
