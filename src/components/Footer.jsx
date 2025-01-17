import Image from 'next/image'
import '../styles/footer.css'
import MailIcon from './icons/MailIcon'
const Footer = () => {
  return (
    <footer className='footer '>
      <div className='container mx-auto px-6'>
        {/* Información principal */}
        <div className='text-center '>
          <h2
            className='text-2xl font-bold'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Desplazamiento X, Y, blur, y color
            }}
          >
            Un Nuevo Recurso
          </h2>
          <Image
            src='/logoP-NR.jpg'
            alt='Imagen del logo de la asociación'
            width={80}
            height={80}
            className='mx-auto mt-4 border-2 border-white rounded-full'
          />

          <p className='text-md mt-2 font-[family-name:var(--font-atma)]'>
            Centro Comercial El Pueblo,{' '}
            <Image
              src='/centrocomercial2.png'
              alt='Imagen del del centro comercial El Pueblo'
              width={70}
              height={70}
              className='mx-auto mt-4 '
            />
            Local 21 <br />
            Las Coloradas, Playa Blanca <br />
            Lanzarote, España
          </p>
        </div>

        {/* Separador */}
        <div className='my-8 border-t border-white/50 text-center'>
          <h2
            className='text-xl font-bold mb-10'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Colaboramos con
          </h2>
          <div className='flex flex-col md:flex-row justify-center md:gap-40'>
            <a
              href='https://creciendoyaiza.es/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/yaiza2.jpg'
                alt='Imagen del logo de Creciendo Yaiza'
                width={200}
                height={200}
                className='mx-auto mt-4 cursor-pointer object-contain'
              />
            </a>
            <a
              href='https://www.facebook.com/doggysdelsur'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/dog.jpg'
                alt='Imagen del logo de Doggys del sur'
                width={200}
                height={233}
                className='mx-auto mt-4 cursor-pointer'
              />
            </a>
          </div>
        </div>
        <div className='text-center'></div>

        <div className='my-8 border-t border-white/50'></div>

        <div className='flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0'>
          {/* Enlaces sociales */}
          <div
            className='flex flex-col items-center space-y-4 p-6 hover:scale-105 transition-transform'
            style={{
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <p className='text-lg font-semibold font-[family-name:var(--font-atma)]'>
              Síguenos en Facebook
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/UnNuevoRecurso/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:scale-110 transition-transform'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-8 w-8'
                >
                  <path d='M22.5 0h-21C.7 0 0 .7 0 1.5v21c0 .8.7 1.5 1.5 1.5h10.8v-9.2H8.6V9.8h3.7V7.5c0-3.5 2.1-5.4 5.2-5.4 1.5 0 2.8.1 3.2.2v3.6h-2.2c-1.7 0-2 .8-2 2v2.6h4l-.6 3.5h-3.4V24h6.6c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className='text-center text-sm'>
            <p>&copy; 2025 Un Nuevo Recurso. Todos los derechos reservados.</p>
          </div>
        </div>

        {/* Separador para diseñador web */}
        <div className='my-8 border-t border-white/50'></div>

        {/* Información del diseñador web */}
        <div className='text-center'>
          <p className='text-xs'>Diseño y mantenimiento web:</p>
          <p className='font-semibold text-sm'>Guillermo Cerviño Porto</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a
              href='https://www.linkedin.com/in/guillermocporto/'
              className='text-white hover:scale-110 transition-transform'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path d='M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0zM7.06 20.45H3.56V9h3.5zm-1.75-13.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm15.14 13.1h-3.5v-5.6c0-1.33-.02-3.05-1.86-3.05s-2.15 1.46-2.15 2.95v5.7h-3.5V9h3.36v1.56h.05a3.68 3.68 0 0 1 3.32-1.83c3.56 0 4.22 2.34 4.22 5.38z' />
              </svg>
            </a>

            <MailIcon
              href='guillermocporto@gmail.com'
              aClass='text-white hover:scale-110 transition-transform'
              svgClass='h-6 w-6'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
