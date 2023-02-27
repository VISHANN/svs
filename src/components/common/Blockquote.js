export default function Blockquote({ quote, author }) {
  return(
    <blockquote>
      <p>
        {quote}
      </p>
      <cite>
        {author}
      </cite>
    </blockquote>
  )
}