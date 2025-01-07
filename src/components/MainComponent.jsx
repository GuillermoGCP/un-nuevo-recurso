'use client'
import Image from 'next/image'
import '../app/globals.css'
import PicModal from './PicModal'
import useMainComponent from '@/hooks/useMainComponent'
import '../styles/mainComponent.css'

const MainComponent = () => {
  const {
    isModalOpen,
    url,
    firstSectionRef,
    secondSectionRef,
    handleOpenModal,
    handleCloseModal,
  } = useMainComponent()

  return (
    <main>
      <div>
        <section className='p-4 first-section' ref={firstSectionRef}>
          <h1 className='text-2xl sm:text-3xl font-[family-name:var(--font-atma)] text-center text-transparent bg-gradient-to-r from-[#01B5FB] to-[#c71c1c] bg-clip-text py-6 uppercase tracking-wide opacity-0 animate-fadeIn transition-all duration-1000 mb-2'>
            Desde Lanzarote, Playa Blanca 🏖
          </h1>
          <h3 className='text-2xl mx-auto text-center my-4 max-w-[60vw] text-[#755959] font-[family-name:var(--font-atma)] tracking-wide '>
            Nacemos con la vocación de inspirar a los vecinos y vecinas de
            Lanzarote a formar parte del cambio que deseamos ver en el mundo 🌍.
            Promovemos valores sociales como la solidaridad, la reciprocidad, el
            altruismo y la igualdad, fomentando una vida en comunidad más unida
            y consciente.
          </h3>

          <Image
            src='/portada.jpeg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='md:w-[80vw] w-full max-w-screen-md h-auto object-cover mx-auto cursor-pointer border-2 border-[#8b7070] rounded-lg'
            onClick={handleOpenModal}
          />

          {isModalOpen && (
            <PicModal pic={url !== '' && url} onClose={handleCloseModal} />
          )}
        </section>
        <section className='p-4 third-section font-[family-name:var(--font-atma)] flex flex-col items-center gap-4 mt-10'>
          <h1 className='text-2xl sm:text-3xl font-[family-name:var(--font-atma)] text-center text-transparent bg-gradient-to-r from-[#01B5FB] to-[#c71c1c] bg-clip-text py-6 uppercase tracking-wide opacity-0 animate-fadeIn transition-all duration-1000 '>
            Entrevista en El magacine de Biosfera 🎥
          </h1>
          <h3 className='text-2xl mx-auto text-center mb-4 max-w-[60vw] text-[#915959]'>
            ¡El diez de julio del 2024 nos ha entrevistado el equipo de El
            magacine de Biofera! ¡No te lo pierdas!🎤
          </h3>
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
      </div>

      <section
        className='p-4 second-section font-[family-name:var(--font-atma)] mt-10'
        ref={secondSectionRef}
      >
        <h1 className='text-2xl sm:text-3xl font-[family-name:var(--font-atma)] text-center text-transparent bg-gradient-to-r from-[#01B5FB] to-[#c71c1c] bg-clip-text py-6 uppercase tracking-wide opacity-0 animate-fadeIn transition-all duration-1000 '>
          Mercadillo benéfico 🛍
        </h1>
        <h3 className='text-2xl mx-auto text-center mb-4 max-w-[60vw] text-[#915959]'>
          Dos domingos al mes, en el centro comercial El Pueblo 🏪. ¡Te
          esperamos!
        </h3>

        <Image
          src='/mercadillo.jpeg'
          alt='Imagen de algunos miembros de la asociación con niños y amigos'
          width={1000}
          height={600}
          className='w-[60vw]  max-w-screen-md h-auto object-cover mx-auto cursor-pointer'
          onClick={handleOpenModal}
        />
      </section>
    </main>
  )
}

export default MainComponent
