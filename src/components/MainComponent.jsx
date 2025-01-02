import Image from 'next/image'
import '../app/globals.css'
const MainComponent = () => {
  return (
    <main className='lg:grid grid-cols-[1fr_250px] h-screen mt-5'>
      <section className='p-4'>
        <h1 className='text-2xl sm:text-3xl font-[family-name:var(--font-atma)] text-center text-transparent bg-gradient-to-r from-[#01B5FB] to-[#c71c1c] bg-clip-text py-6 uppercase tracking-wide opacity-0 animate-fadeIn transition-all duration-1000 mb-4 '>
          Desde Lanzarote, Playa Blanca 🏖
        </h1>

        <Image
          src='/portada.jpeg'
          alt='Logo'
          width={1000}
          height={600}
          className='md:w-[80vw] w-full max-w-screen-md h-auto object-cover mx-auto'
        />
      </section>
      <aside className='bg-gray-800 text-white p-4 hidden lg:block '>
        Barra Lateral
      </aside>
    </main>
  )
}
export default MainComponent
