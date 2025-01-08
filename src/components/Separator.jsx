const Separator = ({ text }) => {
  return (
    <div className='flex items-center justify-center space-x-4 font-[family-name:var(--font-geist-mono)] my-12 text-center mt-28 w-[75%] m-auto'>
      <div className='h-1 w-[20vw] bg-[#6b90c7] md:h-2'></div>
      <p className='text-md font-semibold text-gray-500 md:text-xl'>{text}</p>
      <div className='h-1 w-[20vw] bg-[#6b90c7] md:h-2 '></div>
    </div>
  )
}
export default Separator
