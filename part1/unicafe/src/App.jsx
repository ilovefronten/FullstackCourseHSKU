import { useState } from 'react'

function getAverageRate(good, bad, neutral) {
  if (good === 0 && bad === 0 && neutral === 0) {
    return 0
  }
  return (good * 1 + bad * (-1)) / (good + bad + neutral)
}

function getPostiveRate(good, bad, neutral) {
  if (good === 0 && bad === 0 && neutral === 0) {
    return 0
  }
  const rate = (good / (good + bad + neutral) * 100).toString() + '%'
  return rate

}


const StatisticsLine = (props) => {
  const { text, value } = props

  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}


const Statistics = (props) => {

  const { good, bad, neutral } = props

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <h3>No feedback given.</h3>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{getAverageRate(good, bad, neutral)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{getPostiveRate(good, bad, neutral)}</td>
          </tr>
        </tbody>
      </table>
      {/* <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={good + neutral + bad} />
      <StatisticsLine text='average' value={getAverageRate(good, bad, neutral)} />
      <StatisticsLine text='positive' value={getPostiveRate(good, bad, neutral)} /> */}
    </>
  )
}

const Button = (props) => {
  const { handleClick, text } = props

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App