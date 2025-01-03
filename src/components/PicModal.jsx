import Image from 'next/image'

const PicModal = ({ pic, onClose }) => {
  return (
    pic && (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='relative bg-white rounded-lg p-4 max-w-[90vw] max-h-[90vh] overflow-hidden'>
          <button
            className='absolute top-2 right-2 text-gray-600 text-2xl hover:text-black'
            onClick={onClose}
          >
            &times;
          </button>

          <div className='max-h-[80vh] overflow-y-auto'>
            <Image
              src={`${pic}`}
              alt='Full-size image'
              width={1000}
              height={600}
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    )
  )
}

export default PicModal
