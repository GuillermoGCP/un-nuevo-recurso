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
  )
}
