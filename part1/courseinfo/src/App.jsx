const Header = ({ course, ...other }) => {

  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({ parts, ...other }) => {

  return (
    <>
      {parts.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Footer = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum+part.exercises, 0);
  
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      
      <Footer parts={parts} />
    </div>
  )
}

export default App