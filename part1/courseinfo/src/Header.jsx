const Header = (props) => {
    console.log(props)
    return(
        < >
            <h1>
                Course: {props.course}
            </h1>
        </>

    )
}

export default Header