import { useState } from 'react'

const App = () => {
  const anecdotess = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]


  const [selected, setSelected] = useState(0)
  const switchAnecdotes = () => {
    setSelected(Math.floor(Math.random() * 7))
    setRating(allRatings[selected])
    console.log("Function switchAnecdotes: ", allRatings)

  }

  const [allRatings, setAllRatings] = useState(new Uint8Array(2))
  const [rating, setRating] = useState(allRatings[selected])
  const vote = () => {
    const copy = [...allRatings]
    copy[selected] += 1
    console.log("Function vote - updating allRatings from: ", allRatings, ", to: ", copy)
    setAllRatings(copy)
    setRating(allRatings[selected])
    console.log("Function vote - allRatings updated to: ", allRatings)
    console.log(getMostVotes())

  }

  const [bestScore, setBestScore] = useState(0)
  const [bestAnecdoteId, setBestAnecdoteId] = useState(0)

  const getMostVotes = () => {
    for (var i = 0; i < allRatings.length; i++) {
      if (bestScore < allRatings[i]) {
        setBestScore(allRatings[i])
        setBestAnecdoteId(i)
      }
    };
    return ("Get most votes - Id:", bestAnecdoteId, " Score: ", bestScore)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Button text="vote" onClickFunction={vote} />
      <Button text="next anecdote" onClickFunction={switchAnecdotes} />
      <Rating rating={rating} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[bestAnecdoteId]}
      <Rating rating={bestScore} />
    </div>
  )
}

const Rating = ({ rating }) => {
  return (
    <div>
      has {rating} votes
    </div>

  )
}


const Button = ({ text, onClickFunction }) => {

  return (
    <button onClick={onClickFunction}>{text}</button>
  )
}

export default App