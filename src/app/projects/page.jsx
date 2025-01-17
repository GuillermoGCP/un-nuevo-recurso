'use client'
import H1Component from '@/components/H1Component'
import H3Component from '@/components/H3Component'
import Paragraph from '@/components/Paragraph'
import PicModal from '@/components/PicModal'
import usePicModal from '@/hooks/usePicModal'
import useProjects from '@/hooks/useProjects'
import Image from 'next/image'

const ProjectsComponent = () => {
  const {
    isModalOpen,
    url,
    sixthSectionRef,
    handleOpenModal,
    handleCloseModal,
  } = usePicModal()

  const {
    firstParaGraphText,
    secondParaGraphText,
    thirdParaGraphText,
    fourthParaGraphText,
    fifthParaGraphText,
  } = useProjects()

  return (
    <>
      <div className='p-4 max-w-screen-md mx-auto'>
        <H1Component title='Aquí puedes encontrar más información ℹ sobre nuestros proyectos 🚧' />
      </div>
      <div
        className='noticias  rounded-lg w-[85%] m-auto max-w-screen-md'
        style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <section
          className='p-4 second-section font-[family-name:var(--font-atma)] mt-10'
          ref={sixthSectionRef}
        >
          <H1Component title='Mercadillo benéfico 🛍' />
          <H3Component title='Segundo domingo de cada mes, en el centro comercial El Pueblo 🏪.' />

          <Image
            src='/mercadillo1.jpg'
            alt='Imagen de algunos miembros de la asociación con niños y amigos'
            width={1000}
            height={600}
            className='w-[60vw]  max-w-screen-sm h-auto object-cover mx-auto cursor-pointer mb-8'
            onClick={handleOpenModal}
          />
          <Paragraph
            text={firstParaGraphText}
            title='Visión 👁'
            H3style='text-2xl mx-auto font-[family-name:var(--font-atma)] text-center text-[#01B5FB]  bg-clip-text'
            divstyle='vision-section my-8'
          />
          <Paragraph
            text={secondParaGraphText}
            title='Objetivo ➡'
            H3style='text-2xl mx-auto font-[family-name:var(--font-atma)] text-center text-[#01B5FB]  bg-clip-text'
            divstyle='objective-section my-8'
          />
          <Paragraph
            text={thirdParaGraphText}
            title='¿Qué vamos a hacer? 🎁'
            H3style='text-2xl mx-auto font-[family-name:var(--font-atma)] text-center text-[#01B5FB]  bg-clip-text'
            divstyle='what-we-do-section my-8'
          />
          <Paragraph
            text={fourthParaGraphText}
            title='¿Dónde lo hacemos? ⛺'
            H3style='text-2xl mx-auto font-[family-name:var(--font-atma)] text-center text-[#01B5FB]  bg-clip-text'
            divstyle='where-we-do-section my-8'
          />
          <Paragraph
            text={fifthParaGraphText}
            title='¿Qué necesitamos? 🆘'
            H3style='text-2xl mx-auto font-[family-name:var(--font-atma)] text-center text-[#01B5FB]  bg-clip-text'
            divstyle='needs-section my-8'
          />
        </section>
      </div>
      {isModalOpen && (
        <PicModal pic={url !== '' && url} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default ProjectsComponent
