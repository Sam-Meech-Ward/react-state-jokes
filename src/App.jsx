import './App.css'
import Joke from './Joke'

function App() {

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
  
  return (
    <div className="">
      <h1>Dad Jokes</h1>

      {jokes.map(joke => (
        <Joke key={joke.id} id={joke.id} text={joke.text} />
      ))}

    </div>
  )
}

export default App
