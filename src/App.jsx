import './App.css'
import Joke from './Joke'

import { useState } from 'react'
import JokeForm from './JokeForm'

function App() {

  const [favorite, setFavorite] = useState(1)

  const jokes = [
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered."
    },
    {
      id: 2, 
      text: "I used to be addicted to soap, but I'm clean now."
    }
  ]

  const handleFavorite = (id) => {
    setFavorite(id)
  }

  const handleNewJoke = (text) => {
    console.log("new joke", text)
  }
  
  return (
    <div className="">
      <h1>Dad Jokes</h1>

      {jokes.map(joke => (
        <Joke onFavorite={handleFavorite} favorite={favorite === joke.id} key={joke.id} id={joke.id} text={joke.text} />
      ))}

      <JokeForm onNewJoke={handleNewJoke} />

    </div>
  )
}

export default App
