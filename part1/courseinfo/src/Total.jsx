const Total = (props) => {
    console.log("Total component" , props)
    const totalExercises = props.exercises.reduce((acc, c) => acc + c, 0)
    return (
        <>
        <p>
            The Total number of exercises is {totalExercises}
        </p>
        </>
    )
}

export default Total