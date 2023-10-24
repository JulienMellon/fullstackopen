const Part = (props) => {
    console.log('Hello from the Part', props)
    console.log(props.part.name)
    return (
        <>
        <p>This part is named "{props.part.name}" and has {props.part.exercises} exercises</p>
        </>
    )
}

export default Part