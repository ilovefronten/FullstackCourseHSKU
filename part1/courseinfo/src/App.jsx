const Header = ({course, ...other}) => {
  
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({content, ...other}) => {

  return (
    <>
      <p>{content.name} {content.exercises}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content content={part1} />
      <Content content={part2} />
      <Content content={part3} />
      <Footer number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App