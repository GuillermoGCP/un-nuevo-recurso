'use client'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../styles/gallery.css'
import H1Component from '@/components/H1Component'
import H3Component from '@/components/H3Component'

export default function Gallery() {
  const arteterapiaImages = [
    '/arteterapia/WhatsApad026-01-11 at 10.52.38.jpeg',
    '/arteterapia/WhatsApp Imaadfa-11 at 10.52.39.jpeg',
    '/arteterapia/WhatsApp Imadfe2026-01-11 at 10.52.38.jpeg',
    '/arteterapia/WhatsApp Image 2026-01-11 at 10.52.37.jpeg',
    '/arteterapia/WhatsApp Image 2026-01-1df1 at 10.52.37.jpeg',
    '/arteterapia/WhatsApp Image 2026-01-ddd11 at 10.52.39.jpeg',
    '/arteterapia/WhatsApp Image 2026-dfdaf01-11 at 10.52.40.jpeg',
    '/arteterapia/WhatsApp Imdf2026-01-11 at 10.52.37.jpeg',
    '/arteterapia/WhatsApp Imdfda26-01-11 at 10.52.39.jpeg',
    '/arteterapia/Whatsadfadage 2026-01-11 at 10.52.39.jpeg',
    '/arteterapia/addaf.jpg.jpeg',
    '/arteterapia/dff2026-01-11 at 10.52.38.jpeg',
  ]
  const encuentroImages = [
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840076/WhatsApp_Image_2026-01-19_at_17.11.27_rmdpd0.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840076/WhatsApp_Image_2026-01-19_at_17.11.27_2_obliif.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840076/WhatsApp_Image_2026-01-19_at_17.11.27_3_gwfthe.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.26_syzbud.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.26_4_hdaeum.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.27_1_bfgxx1.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.26_3_qblezh.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.26_2_w98gnb.jpg',
    'https://res.cloudinary.com/dbq4zkmbt/image/upload/v1768840075/WhatsApp_Image_2026-01-19_at_17.11.26_1_o6xlpw.jpg',
  ]
  const images = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg',
    '/slider4.jpg',
    '/slider5.jpg',
    '/slider6.jpg',
    '/slider7.jpg',
    '/slider8.jpg',
    '/slider9.jpg',
    '/slider10.jpg',
    '/slider11.jpg',
    '/slider12.jpg',
    '/slider13.jpg',
    '/slider14.jpg',
    '/slider15.jpg',
    '/slider16.jpg',
    '/slider17.jpg',
    '/slider18.jpg',
    '/slider19.jpg',
    '/slider20.jpg',
    '/slider21.jpg',
    '/slider22.jpg',
    '/slider23.jpg',
    '/slider24.jpg',
    '/slider25.jpg',
  ]

  return (
    <>
      <div
        id='arteterapia'
        className='w-[90vw] slider-container max-w-screen-md mx-auto my-10'
      >
        <H1Component title='Taller gratuito de Arteterapia 🎨' />
        <H3Component title='Momentos del encuentro donde compartimos creatividad, emoción y bienestar a través de la pintura.' />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className='my-10'
        >
          {arteterapiaImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={encodeURI(src)} alt={`Arteterapia ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        id='encuentro-la-aurora'
        className='w-[90vw] slider-container max-w-screen-md mx-auto my-10'
      >
        <H1Component title='Encuentro solidario en La Aurora 🤝' />
        <H3Component title='Un resumen en fotos de una tarde llena de juego, risas y colaboración vecinal.' />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className='my-10'
        >
          {encuentroImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Encuentro La Aurora ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-[90vw] slider-container max-w-screen-md mx-auto my-10'>
        <H1Component title='Reflejos del Compromiso de Nuestra Comunidad 🏠' />
        <H3Component title='A través de estas imágenes 🎞, mostramos las iniciativas con las que apoyamos a quienes más lo necesitan: desde mercadillos benéficos hasta actividades recreativas para niños y familias 👨‍👧‍👧.' />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className='my-10'
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
