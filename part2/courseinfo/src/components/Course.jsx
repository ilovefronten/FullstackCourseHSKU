const Header = ({ course, ...other }) => {

    return (
        <>
            <h2>{course}</h2>
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
    /* reduce() takes a callback func as its first param, and the second param "0" means set sum=0 at first */
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <>
            <h4>Number of exercises {total}</h4>
        </>
    )
}

const Course = (props) => {
    const course = props.course
    console.log()
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Footer parts={course.parts} />
        </>
    )
}

export default Course