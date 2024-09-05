import './App.css'
import Joke from './Joke'
import Form from './Form'
import { useReducer, useState, useEffect } from 'react'
import JokesReducer from './JokesReducer'
import toast,{Toaster} from 'react-hot-toast'

function App() {
  
  const [jokes, dispatch] = useReducer(JokesReducer, [
    {
      id: 1,
      joke: "My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.",
      likes: 0
    }
  ])

  const SuccessNotify = () => toast('Success Coy')
  
  useEffect(()=>{
    document.title = `${jokes.length} jokes`
    console.log(jokes)
    SuccessNotify()
  },[jokes])

  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const [showForm, setShowForm] = useState(false)

  const likeHandler = (id) => {
    dispatch({ type: 'like_joke', id })
  }

  const dislikeHandler = (id) => {
    dispatch({ type: 'dislike_joke', id })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let newJoke = {
      id: self.crypto.randomUUID(),
      joke: text,
      likes: 0
    }

    if (text.length < 5) {
      setError("Jokes must be at least 5 charaters long")
      return
    }
    setShowForm(false)
    setError("")
    dispatch({ type: 'add_joke', newJoke })
  }

  const deleteHandler = (id) => {
    dispatch({ type: 'delete_joke', id })
  }

  const addJokeHandler = () => {
    setShowForm(true)
  }

  return (
    <>
      <h1>Dad Jokes</h1>

      {showForm ?
        <>
          <Form onSubmit={submitHandler} value={text} onChange={(e) => { setText(e.target.value) }} />
          {error && <p>{error}</p>}
        </> :

        <>
          <button onClick={addJokeHandler}>Add New Joke</button>
          {jokes.map(joke =>
            <Joke
              key={joke.id}
              onLike={likeHandler}
              onDislike={dislikeHandler}
              onDelete={deleteHandler}
              {...joke}
            />
          )}
          <Toaster  />
        </>
      }



    </>
  )
}

export default App