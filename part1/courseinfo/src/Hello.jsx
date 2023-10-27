const Hello = (props) => {
    const bornYear = () => {
        const now = new Date().getFullYear()
        return now - props.age
    }
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>
            You were probably born in {bornYear()}
        </p>
      </div>
    )
  }

export default Hello