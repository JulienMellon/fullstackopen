const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello Hello!</p>
      <p>
        Hi! {props.name}, You are {props.age} years old!
      </p>
    </div>
  )
}

const App = () => {
  const now = new Date().toDateString();
  const a = 10;
  const b = 20;
  const name = 'debbie default'
  const age = 10
  console.log('Hello from the App component!')
  return (
    <>
      <p>Hello world</p>
      <p>Today is {now}</p>
      <p>{a} plus {b} is {a + b}</p>
    <Hello name='Maya' age={16+10} />
    <Hello name={name} age={age} />
    </>
  )
}

export default App