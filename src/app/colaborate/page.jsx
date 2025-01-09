'use client'
import FlipCard from '@/components/FlipCard'
import H1Component from '@/components/H1Component'
import H3Component from '@/components/H3Component'
import Image from 'next/image'
import usePicModal from '@/hooks/usePicModal'
import PicModal from '@/components/PicModal'
import Separator from '@/components/Separator'
const Colaborate = () => {
  const {
    isModalOpen,
    url,
    handleOpenModal,
    handleCloseModal,
    thirdSectionRef,
    fourthSectionRef,
    fithSectionRef,
  } = usePicModal()
  return (
    <div
      className='colaborate  rounded-lg w-[85%] m-auto max-w-screen-md mt-10'
      style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
    >
      <div className='p-6 '>
        <H1Component title='Colabora con nosotros 🤝' />
        <H3Component
          title=' Únete a nuestra misión para mejorar nuestra comunidad 🏙. Puedes
          colaborar de dos maneras:'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mb-10'>
        <FlipCard
          h2Title='Hazte Voluntario'
          text='Si decides hacerte voluntario, podrás desempeñar alguna labor
              dentro de nuestra entidad, ya sea de forma permanente u ocasional.'
          url='https://forms.gle/NbLHeZmWzBkWodwQ6'
          aTitle='Quiero ser voluntario'
        />
        <FlipCard
          h2Title='Hazte Socio'
          text=' Como socio, contribuirás con una cuota y tendrás derecho a
            participar en el gobierno de nuestra organización.'
          url='https://forms.gle/Ph7hMMrRTzKPUD7s9'
          aTitle='Quiero ser socio'
        />
      </div>
      <Separator text='Algunos colaboradores/as' />
      <H3Component title='Desde nuestra asociación, queremos expresar nuestro más sincero agradecimiento a Ana, Pilar, Quina y Carmen por ofrecernos generosamente su tiempo y dedicación. 🙏 Gracias, gracias de corazón.' />
      <div ref={thirdSectionRef} className='relative max-w-[80%] mx-auto'>
        <Image
          src='/colabora.jpg'
          alt='Imagen de algunos miembros de la asociación con niños y amigos'
          width={900}
          height={500}
          className='w-full max-w-screen-md h-auto object-cover mx-auto cursor-pointer border-2 border-[#8b7070] rounded-lg'
          onClick={handleOpenModal}
        />
      </div>
      <div className='h-14'></div>
      <H3Component title='Las mariposas son un hermoso símbolo de resiliencia, cambio, esperanza y la naturaleza efímera de la vida terrenal. Representan la energía del amor y la libertad, siendo por excelencia un emblema de transformación y renovación. Su ciclo de vida nos enseña a transitar hacia lo positivo y lo bello.' />
      <div ref={fourthSectionRef} className='relative max-w-[80%] mx-auto'>
        <Image
          src='/colabora3.jpg'
          alt='Imagen de algunos miembros de la asociación con niños y amigos'
          width={900}
          height={500}
          className='w-full max-w-screen-md h-auto object-cover mx-auto cursor-pointer border-2 border-[#8b7070] rounded-lg'
          onClick={handleOpenModal}
        />
      </div>
      <div className='h-14'></div>
      <H3Component title='  Con su profundo significado espiritual, las mariposas nos inspiran a creer en lo mejor que la vida nos ofrece. 💖🦋' />
      <div ref={fithSectionRef} className='relative max-w-[80%] mx-auto'>
        <Image
          src='/colabora2.jpg'
          alt='Imagen de algunos miembros de la asociación con niños y amigos'
          width={900}
          height={500}
          className='w-full max-w-screen-md h-auto object-cover mx-auto cursor-pointer border-2 border-[#8b7070] rounded-lg'
          onClick={handleOpenModal}
        />
      </div>
      {isModalOpen && (
        <PicModal pic={url !== '' && url} onClose={handleCloseModal} />
      )}
      <div className='h-14'></div>
    </div>
  )
}

export default Colaborate
