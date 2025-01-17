import H3Component from './H3Component'

const Paragraph = ({ title, H3style, divStyle, text }) => {
  return (
    <div className={`${divStyle} p-4 sm:p-8 md:p-12`}>
      <H3Component title={title} extraStyle={H3style} />
      <div>{text}</div>
    </div>
  )
}

export default Paragraph
