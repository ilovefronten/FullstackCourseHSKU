const Header = ({course, ...other}) => {
  
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({content, exercises, ...other}) => {

  return (
    <>
      <p>{content} {exercises}</p>
    </>
  )
}

const Footer = ({number, ...other}) => {

  return (
    <>
      <p>Number of exercises {number}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={part1} exercises={exercises1} />
      <Content content={part2} exercises={exercises2} />
      <Content content={part3} exercises={exercises3} />
      <Footer number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App