import { useState } from "react"

export default function JokeForm({onNewJoke}) {

  const [text, setText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onNewJoke(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter a joke" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Submit</button>
      
    </form>
  )
}