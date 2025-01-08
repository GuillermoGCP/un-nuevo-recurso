const H1Component = ({ title }) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-[family-name:var(--font-atma)] text-center text-transparent bg-gradient-to-r from-[#01B5FB] to-[#c71c1c] bg-clip-text py-6 uppercase tracking-wide opacity-0 animate-fadeIn transition-all duration-1000 mb-2'>
      {title}
    </h1>
  )
}
export default H1Component
