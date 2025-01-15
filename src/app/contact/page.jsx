import H1Component from '@/components/H1Component'
import H3Component from '@/components/H3Component'
import MailIcon from '@/components/icons/MailIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'

const Contact = () => {
  return (
    <div
      className='rounded-lg w-[85%] m-auto max-w-screen-md my-10'
      style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)' }}
    >
      <H1Component title='Déjanos un correo 📭 o llámanos por teléfono 📱' />
      <H3Component title='Ponte en contacto con nosotros y estaremos encantados de ayudarte:' />
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center'>
          <PhoneIcon customClass='h-10 w-10 hover:scale-110 transition-transform' />
          <p className='text-xl sm:text-2xl mx-auto text-center my-4 max-w-[60vw] text-[#755959] font-[family-name:var(--font-atma)] tracking-wide '>
            Llámanos al: 692 73 65 74
          </p>
        </div>

        <div className='flex items-center'>
          <MailIcon
            href='unnuevorecurso@gmail.com'
            aClass='text-grey-500 hover:scale-110 transition-transform'
            svgClass='h-10 w-10'
          />
          <p className='text-xl sm:text-2xl mx-auto text-center my-4 max-w-[60vw] text-[#755959] font-[family-name:var(--font-atma)] tracking-wide'>
            unnuevorecurso@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
export default Contact
