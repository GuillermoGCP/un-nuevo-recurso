'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
import VideoModal from './VideoModal'

const MainComponent = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchInContent, setSearchInContent] = useState(false)
  const {
    isModalOpen,
    url,
    firstSectionRef,
    secondSectionRef,
    seventhSectionRef,
    eighthSectionRef,
    ninthSectionRef,
    tenthSectionRef,
    eleventhSectionRef,
    handleOpenModal,
    handleCloseModal,
  } = usePicModal()

  const handleOpenVideo = () => {
    setIsVideoOpen(true)
  }

  const handleCloseVideo = () => {
    setIsVideoOpen(false)
  }

  const primaryActionClasses =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8b7070] bg-[#8b7070] text-white font-[family-name:var(--font-atma)] shadow-md transition hover:bg-[#725b5b] hover:shadow-lg'
  const secondaryActionClasses =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8b7070] bg-white text-[#8b7070] font-[family-name:var(--font-atma)] shadow-md transition hover:bg-[#f3e8e1] hover:shadow-lg'

  const normalizeTitle = (value) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  const hasSearch = searchTerm.trim().length > 0
  const normalizedSearch = normalizeTitle(searchTerm.trim())
  const matchesText = (text) => normalizeTitle(text).includes(normalizedSearch)
  const titleMatches = {
    arteterapia2026: matchesText(
      'Taller de arte terapia en el campamento de verano con Creciendo Yaiza'
    ),
    arteterapia: matchesText('Taller gratuito de Arteterapia 🎨'),
    encuentro: matchesText('Encuentro solidario en La Aurora 🤝'),
    paseo: matchesText('Paseo canino solidario 🐕'),
    costura: matchesText('Taller de tote bag COSTURA'),
    entrevista: matchesText('Entrevista en El magacine de Biosfera 🎥'),
    mercadillo: matchesText('Mercadillo benéfico 🛍'),
    fortalecimiento: matchesText(
      'Taller de fortalecimiento de suelo pélvico y reeducación postural'
    ),
  }
  const contentMatches = {
    arteterapia2026: matchesText(
      'Taller de arte terapia en el campamento de verano con Creciendo Yaiza. ' +
        'Compartimos algunas imágenes del taller de arte terapia celebrado en el campamento de verano con Creciendo Yaiza.'
    ),
    arteterapia: matchesText(
      'Playa Blanca acoge este sábado un taller gratuito de Arteterapia. ' +
        'Organizado por la Asociación Un Nuevo Recurso, se celebrará en La Aurora a las 11:00 h. ' +
        'Para comenzar el año desconectando del estrés y reconectando con uno mismo, la Asociación Un Nuevo Recurso propone un taller gratuito de Arteterapia. ' +
        'El taller está pensado como un espacio inclusivo y seguro. ' +
        'Ideal para niños, jóvenes y adultos. ' +
        'El taller es gratuito pero requiere inscripción previa.'
    ),
    encuentro: matchesText(
      'El encuentro se celebrará a partir de las 19:00 horas en el centro La Aurora. ' +
        'La propuesta invita a disfrutar de una tarde de risas, emoción y juego. ' +
        'Todo el dinero recaudado se utilizará para los proyectos que tiene en marcha la asociación. ' +
        'Las personas participantes podrán ganar premios donados por empresas colaboradoras.'
    ),
    paseo: matchesText(
      'Este domingo 26 de enero 2025 habrá un paseo canino familiar solidario a mano de Doggys del sur. ' +
        'Desde el Centro Comercial El Pueblo, colaboraremos con nuestro puesto de la asociacion. ' +
        'Habrá una clase gratuita de pilates a la llegada de la ruta.'
    ),
    costura: matchesText(
      'Te invitamos a participar de un taller de costura creativa el próximo sábado 15 de febrero. ' +
        'Transforma prendas viejas en algo útil y único en nuestro local del Centro Comercial El Pueblo.'
    ),
    entrevista: matchesText(
      'El diez de julio del 2024 nos ha entrevistado el equipo de El magacine de Biofera.'
    ),
    mercadillo: matchesText(
      'Segundo domingo de cada mes, en el centro comercial El Pueblo. ¡Te esperamos!'
    ),
    fortalecimiento: matchesText(
      'El taller de fortalecimiento de suelo pélvico y reeducación postural tiene como objetivo principal visibilizar que las disfunciones del suelo pélvico y los dolores crónicos de espalda pueden ser atendidos. ' +
        'No es magia, no es rápido, pero es muy efectivo y puede ayudar a mejorar notablemente la calidad de vida de las personas. ' +
        'Aprender cómo funciona el sistema de sostén postural, el rol que cumplen los distintos músculos implicados y cómo se entrenan naturalmente mediante la respiración. ' +
        'Brindar a las personas una llave para seguir abriendo puertas que les ayuden a vivir mejor, en mayor conexión consigo mismas y fortalecer el autocuidado.'
    ),
  }
  const hasTitleMatches = Object.values(titleMatches).some(Boolean)
  const hasContentMatches = Object.values(contentMatches).some(Boolean)
  const hasMatches = searchInContent ? hasContentMatches : hasTitleMatches
  const arteterapia2026Text =
    'Compartimos algunas imágenes del taller de arte terapia celebrado en el campamento de verano con Creciendo Yaiza.'
  const shouldShow = (key) => {
    if (!hasSearch) return true
    return searchInContent ? contentMatches[key] : titleMatches[key]
  }

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
        {isVideoOpen && (
          <VideoModal
            videoUrl='https://res.cloudinary.com/dbq4zkmbt/video/upload/v1768835852/WhatsApp_Video_2026-01-11_at_10.52.39_po3thc.mp4'
            onClose={handleCloseVideo}
          />
        )}
      </section>

      <Separator text='Noticias y Actividades' />

      <div
        className='noticias  rounded-lg w-[85%] m-auto max-w-screen-md'
        style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <div className='px-4 pt-6'>
          <label
            htmlFor='news-search'
            className='block text-lg text-[#8b7070] font-[family-name:var(--font-atma)]'
          >
            Buscar publicaciones por titulo
          </label>
          <input
            id='news-search'
            type='text'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Ejemplo: Arteterapia, Mercadillo, Entrevista...'
            className='mt-2 w-full rounded-full border border-[#8b7070] bg-white px-4 py-2 text-[#5a4a4a] font-[family-name:var(--font-atma)] shadow-md focus:outline-none focus:ring-2 focus:ring-[#8b7070]'
          />
          <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
            <span className='text-sm text-[#8b7070] font-[family-name:var(--font-atma)]'>
              Buscar en {searchInContent ? 'contenido' : 'titulo'}
            </span>
            <button
              type='button'
              role='switch'
              aria-checked={searchInContent}
              onClick={() => setSearchInContent((prev) => !prev)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full border border-[#8b7070] transition ${
                searchInContent ? 'bg-[#8b7070]' : 'bg-white'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
                  searchInContent ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
        {hasSearch && !hasMatches && (
          <div className='px-4 pt-4 pb-2 text-center text-[#8b7070] font-[family-name:var(--font-atma)]'>
            {searchInContent
              ? 'No hay publicaciones con ese contenido.'
              : 'No hay publicaciones con ese titulo. Cambia el switch para buscar por contenido.'}
          </div>
        )}
        {shouldShow('arteterapia2026') && (
          <section className='p-4 fourth-section font-[family-name:var(--font-atma)] mt-10'>
            <H1Component title='Taller de arte terapia en el campamento de verano con Creciendo Yaiza' />
            <H3Component title={arteterapia2026Text} />
            <Image
              src='/ArteTerapia 2026/WhatsApp Image 2026-07-08 at 10.49.00.jpeg'
              alt='Taller de arte terapia en el campamento de verano con Creciendo Yaiza'
              width={1000}
              height={600}
              className='w-[60vw] max-w-screen-sm h-auto object-cover mx-auto cursor-pointer'
              onClick={handleOpenModal}
            />
            <div className='flex flex-wrap items-center justify-center gap-3 mt-5'>
              <Link
                href='/gallery#arteterapia-2026'
                className={primaryActionClasses}
              >
                <span aria-hidden='true'>📸</span>
                Mira las fotos del encuentro
              </Link>
            </div>
          </section>
        )}
        {shouldShow('fortalecimiento') && (
          <section
            className='p-4 fourth-section font-[family-name:var(--font-atma)] mt-10'
            ref={eleventhSectionRef}
          >
            <H1Component title='Taller de fortalecimiento de suelo pélvico y reeducación postural' />
            <H3Component title='El taller de fortalecimiento de suelo pélvico y reeducación postural tiene como objetivo principal visibilizar que las disfunciones del suelo pélvico y los dolores crónicos de espalda pueden ser atendidos.' />
            <Image
              src='/fortalecimiento.jpeg'
              alt='Cartel del taller de fortalecimiento de suelo pélvico y reeducación postural'
              width={1000}
              height={600}
              className='w-[60vw] max-w-screen-sm h-auto object-cover mx-auto cursor-pointer'
              onClick={handleOpenModal}
            />
            <Paragraph
              text={
                <>
                  <p>
                    No es magia, no es rápido, pero es muy efectivo y puede
                    ayudar a mejorar notablemente la calidad de vida de las
                    personas.
                  </p>
                  <p className='mt-4'>
                    En primer lugar, aprender cómo funciona el sistema de sostén
                    postural, el rol que cumplen los distintos músculos
                    implicados y cómo se entrenan naturalmente mediante la
                    respiración.
                  </p>
                  <p className='mt-4'>
                    Mi intención es poder brindarles a las personas una llave
                    para seguir abriendo puertas que les ayuden a vivir mejor,
                    en mayor conexión consigo mismas y fortalecer el
                    autocuidado.
                  </p>
                  <p className='mt-4'>
                    Intento transmitir la posibilidad de integrar de forma
                    gradual y continua estas herramientas a la vida cotidiana de
                    las personas y quedo a disposición por si surgieran dudas o
                    inquietudes.
                  </p>
                  <p className='mt-4'>María Belén Straitas</p>
                </>
              }
            />
          </section>
        )}
        {shouldShow('arteterapia') && (
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
                  Organizado por la Asociación Un Nuevo Recurso, se celebrará
                  en La Aurora a las 11:00 h. Abierto a todas las edades, las
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
            <div className='flex flex-wrap items-center justify-center gap-3 mt-5'>
              <Link
                href='/gallery#arteterapia'
                className={primaryActionClasses}
              >
                <span aria-hidden='true'>📸</span>
                Mira las fotos del evento
              </Link>
              <button
                type='button'
                className={secondaryActionClasses}
                onClick={handleOpenVideo}
              >
                <span aria-hidden='true'>🎬</span>
                Ver video del evento
              </button>
            </div>
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
                    podrán explorar emociones, expresarse libremente y mejorar
                    su bienestar psicológico. No es necesario tener
                    conocimientos previos de pintura, ya que el objetivo no es
                    crear una obra perfecta sino disfrutar del proceso creativo
                    como herramienta para la sanación y el desarrollo personal.
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
                    El taller es gratuito pero requiere inscripción previa en
                    el teléfono <strong>+34 676 78 09 22</strong>.
                  </p>
                </>
              }
            />
          </section>
        )}
        {shouldShow('encuentro') && (
          <section
            className='p-4 fourth-section font-[family-name:var(--font-atma)] mt-10'
            ref={tenthSectionRef}
          >
            <H1Component title='Encuentro solidario en La Aurora 🤝' />
            <H3Component
              title='El encuentro se celebrará a partir de las 19:00 horas en el centro La Aurora, y contará con la participación activa de los jóvenes con diversidad funcional de la asociación, que atenderán con entusiasmo a todos los asistentes.'
            />
            <Image
              src='https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840076/WhatsApp_Image_2026-01-19_at_17.14.01_ubqwmf.jpg'
              alt='Cartel del encuentro solidario en La Aurora'
              width={1000}
              height={600}
              className='w-[60vw] max-w-screen-sm h-auto object-cover mx-auto cursor-pointer'
              onClick={handleOpenModal}
            />
            <div className='flex flex-wrap items-center justify-center gap-3 mt-5'>
              <Link
                href='/gallery#encuentro-la-aurora'
                className={primaryActionClasses}
              >
                <span aria-hidden='true'>📸</span>
                Mira las fotos del encuentro
              </Link>
            </div>
            <Paragraph
              text={
                <>
                  <p>
                    La propuesta invita a disfrutar de una tarde de risas,
                    emoción y juego, en compañía de vecinos y vecinas del
                    municipio, al tiempo que se apoya una buena causa, ya que
                    todo el dinero recaudado se utilizará para los proyectos que
                    tiene en marcha la asociación con la finalidad de mejorar la
                    calidad de vida de sus usuarios y familias.
                  </p>
                  <p className='mt-4'>
                    Y por si esto no fuera suficiente motivación, cabe destacar
                    que las personas participantes podrán ganar, además, alguno
                    de los fantásticos premios donados por empresas
                    colaboradoras.
                  </p>
                </>
              }
            />
          </section>
        )}
        {shouldShow('paseo') && (
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
        )}
        {shouldShow('costura') && (
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
        )}
        {shouldShow('entrevista') && (
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
        )}

        {shouldShow('mercadillo') && (
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
        )}
      </div>
    </div>
  )
}

export default MainComponent
