import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import Hello from "./Hello"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const name = 'Peter'
  const age = 10
  
  return(
    <>
    <Header course={course}/>
    <Content course={course}/>
    <br />
    <Total course={course}/>
    <Hello name='Maya' age={26 + 10} />
    <Hello name={name} age={age} />
    </>
  )
}

export default App