
export default function Joke({ id, text }) {

  const handleLike = () => {
    console.log(`like id: ${id}`)
  }

  const handleDislike = () => {
    console.log(`dislike id: ${id}`)
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
    </div>
  )
}