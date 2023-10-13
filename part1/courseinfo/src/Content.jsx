const Content = (props) => {
    console.log( 'Part Props:', props )
    return(
    <>
    <p>
      Part 1: {props.part} 
    </p>
    <p>
      Part 1 has {props.exercises} exercises
    </p>
    </>
    )
}

export default Content