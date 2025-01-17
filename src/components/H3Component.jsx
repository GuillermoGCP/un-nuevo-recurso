const H3Component = ({ title, extraStyle }) => {
  return (
    <h3
      className={
        extraStyle
          ? extraStyle
          : 'text-2xl mx-auto text-center my-4 max-w-[60vw] text-[#755959] font-[family-name:var(--font-atma)] tracking-wide'
      }
    >
      {title}
    </h3>
  )
}
export default H3Component
