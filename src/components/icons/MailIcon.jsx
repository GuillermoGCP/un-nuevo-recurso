const MailIcon = ({ href, aClass, svgClass }) => {
  return (
    <a href={`mailto:${href}`} className={aClass}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className={svgClass}
      >
        <path d='M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 2L12 11.67 5.4 6h13.2zm1.4 12H4v-9.2l8 5.33 8-5.33V18z' />
      </svg>
    </a>
  )
}
export default MailIcon
