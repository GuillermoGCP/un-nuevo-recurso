const VideoModal = ({ videoUrl, onClose }) => {
  return (
    videoUrl && (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='relative bg-white rounded-lg p-4 max-w-[90vw] max-h-[90vh] overflow-hidden'>
          <button
            className='absolute top-2 right-2 text-gray-600 text-2xl hover:text-black'
            onClick={onClose}
            aria-label='Cerrar video'
          >
            &times;
          </button>
          <div className='max-h-[80vh] overflow-y-auto'>
            <video
              src={videoUrl}
              controls
              preload='metadata'
              className='w-full h-auto object-contain rounded-md'
            />
          </div>
        </div>
      </div>
    )
  )
}

export default VideoModal
