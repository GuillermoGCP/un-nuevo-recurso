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
import Paragraph from './Paragraph'

const MainComponent = () => {
  const {
    isModalOpen,
    url,
    firstSectionRef,
    secondSectionRef,
    seventhSectionRef,
    eighthSectionRef,
    ninthSectionRef,
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
        <section
          className='p-4 fourth-section font-[family-name:var(--font-atma)] mt-10'
          ref={ninthSectionRef}
        >
          <H1Component title='Taller gratuito de Arteterapia 🎨' />
          <H3Component
            title={
              <>
                Playa Blanca acoge este sábado un taller gratuito de
                Arteterapia.
                <br />
                Organizado por la Asociación Un Nuevo Recurso, se celebrará en
                La Aurora a las 11:00 h. Abierto a todas las edades, las
                inscripciones se pueden realizar en el{' '}
                <strong>676 78 09 22</strong>.
              </>
            }
          />
          <Image
            src='/arteterapia.jpeg'
            alt='Cartel del taller de Arteterapia'
            width={1000}
            height={600}
            className='w-[60vw] max-w-screen-sm h-auto object-cover mx-auto cursor-pointer'
            onClick={handleOpenModal}
          />
          <Paragraph
            text={
              <>
                <p>
                  Para comenzar el año desconectando del estrés y reconectando
                  con uno mismo, la Asociación Un Nuevo Recurso propone un
                  taller gratuito de Arteterapia que impartirá la monitora
                  especializada Sonia Bordón este sábado 10 de enero, a las
                  11:00 horas, en el Centro Sociocultural La Aurora de Playa
                  Blanca.
                </p>
                <p className='mt-4'>
                  El taller está pensado como un espacio inclusivo y seguro en
                  el que, a través de la pintura, las personas participantes
                  podrán explorar emociones, expresarse libremente y mejorar su
                  bienestar psicológico. No es necesario tener conocimientos
                  previos de pintura, ya que el objetivo no es crear una obra
                  perfecta sino disfrutar del proceso creativo como herramienta
                  para la sanación y el desarrollo personal.
                </p>
                <p className='mt-4'>
                  Ideal para niños, jóvenes y adultos, es especialmente
                  beneficioso para aquellas personas con dificultades de
                  comunicación o ansiedad, ya que fomenta el pensamiento
                  reflexivo, la creatividad y el autoconocimiento; mejorar la
                  capacidad de expresar emociones difíciles de verbalizar, la
                  autoestima y la confianza; y potencia la concentración, la
                  atención y la memoria, entre otras.
                </p>
                <p className='mt-4'>
                  El taller es gratuito pero requiere inscripción previa en el
                  teléfono <strong>+34 676 78 09 22</strong>.
                </p>
              </>
            }
          />
        </section>
        <section
          className='p-4 fourth-section font-[family-name:var(--font-atma)] mt-10'
          ref={secondSectionRef}
        >
          <H1Component title='Paseo canino solidario 🐕' />
          <H3Component title='Este domingo 26 de enero 2025 habrá un paseo canino familiar solidario a mano de Doggys del sur desde el Centro Comercial El Pueblo, dónde colaboraremos con nuestro puesto de la asociacion. ¡Además, habrá una clase GRATUITA de pilates (local 21) a la llegada de la ruta para que todos y todas salgan más relajados todavía!' />
          <div className='flex justify-center'>
            <Image
              src='/dog.jpg'
              alt='Imagen del logo de Doggys del sur'
              width={150}
              height={150}
              className=' w-[100px] sm:w-[125px] md:w-[150px] max-w-screen-sm h-auto object-cover mx-2 '
            />
            <Image
              src='/logoP-NR.jpg'
              alt='Imagen del logo de Un nuevo recurso'
              width={150}
              height={150}
              className='w-[100px] sm:w-[125px] md:w-[150px] max-w-screen-sm h-auto object-cover mx-2'
            />
          </div>
          <Image
            src='/paseo.jpg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='w-[60vw]  max-w-screen-sm h-auto object-cover mx-auto cursor-pointer '
            onClick={handleOpenModal}
            ref={seventhSectionRef}
          />
        </section>
        <section
          className='p-4 eighth-section font-[family-name:var(--font-atma)] mt-10'
          ref={eighthSectionRef}
        >
          <H1Component title='Taller de tote bag COSTURA' />
          <H3Component title='¿Te gustaría aprender a transformar prendas viejas 🩳 en algo útil y único? Te invitamos a participar de un taller ✂ de costura creativa el próximo sábado 15 de febrero, de 10:00 a 12:00, en nuestro local (nº 21) del Centro Comercial El Pueblo – Las Coloradas, en Playa Blanca. ' />

          <Image
            src='/costura.jpeg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='w-[60vw]  max-w-screen-sm h-auto object-cover mx-auto cursor-pointer '
            onClick={handleOpenModal}
            ref={eighthSectionRef}
          />
        </section>
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
