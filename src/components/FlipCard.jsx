import '../styles/flipCard.css'
const FlipCard = ({ h2Title, text, url, aTitle }) => {
  return (
    <div className='card-container w-[90%] h-[300px] m-auto '>
      <div className=' card-inner '>
        <div className=' card-front bg-[#f5f5f5]'>
          <h2 className='text-2xl mx-auto text-center my-4 max-w-[60vw] text-[#755959] font-[family-name:var(--font-atma)] tracking-wide'>
            {h2Title}
          </h2>
          <p className='text-sm sm:text-base tracking-wide mb-6 font-[family-name:var(--font-geist-mono)] text-center text-gray-500'>
            {text}
          </p>
        </div>
        <div className='card-back bg-[#e3e1e1]'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center text-center w-28 h-28 text-white  px-4 py-2 rounded-full bg-[#b55252] hover:bg-[#529ebc] transition-all duration-500 ease-in-out'
            style={{
              boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            {aTitle}
          </a>
        </div>
      </div>
    </div>
  )
}
export default FlipCard
