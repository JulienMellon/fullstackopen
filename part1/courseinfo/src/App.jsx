import Header from "./Header"
import Content from "./Content"

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using Props to Pass Data';
  const exercises2 = 7;
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return(
    <>
    <Header course={course}/>
    <Content part={part1} exercises={exercises1}/>
    <Content part={part2} exercises={exercises2}/>
    <Content part={part3} exercises={exercises3}/>
    <br />
    <p>
      The total number of exercises is {exercises1 + exercises2 + exercises3}
    </p>
    </>
  )
}

export default App