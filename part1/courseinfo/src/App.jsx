import Header from "./Header"
import Part from "./Part"

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
    <Part part={part1} exercises={exercises1}/>
    <p>
      Part 2: {part2}
    </p>
    <p>
      Part 2 has {exercises2} exercises
    </p>
    <p>
      Part 3: {part3}
    </p>
    <p>
      Part 3 has {exercises3} exercises
    </p>
    <p>
      The total number of exercises is {exercises1 + exercises2 + exercises3}
    </p>
    </>
  )
}

export default App