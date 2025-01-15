import H1Component from '@/components/H1Component'
import Image from 'next/image'

const LegalTermsComponent = () => {
  return (
    <>
      <H1Component title='Página en construcción' />

      <Image
        src='/banner-construc.avif'
        alt='Logo'
        width={626}
        height={588}
        className='mx-auto mt-10 mb-16'
      />
    </>
  )
}

export default LegalTermsComponent
