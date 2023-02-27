export default function Blockquote({ quote, cite }) {
  return(
    <blockquote>
      <p>
        {quote}
      </p>
      <cite>
        {cite}
      </cite>
    </blockquote>
  )
}