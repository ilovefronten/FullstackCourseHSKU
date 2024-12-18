import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = (props) => {
  const { handleClick, text } = props

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const BestAnecdote = (props) => {
  const { anecdotes, points } = props
  // Get index of the max value
  const maxValue = Math.max(...points)
  const maxIndex = points.indexOf(maxValue)
  return (
    <>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {points[maxIndex]} vote(s)</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const handleNewAnec = () => setSelected(getRandomInt(anecdotes.length))

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const handleAddPoint = (selected) => {
    const new_points = [...points]
    new_points[selected] += 1
    setPoints(new_points)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} vote(s)</p>
      <Button handleClick={() => handleAddPoint(selected)} text='vote' />
      <Button handleClick={handleNewAnec} text='next anecdote' />
      <BestAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App