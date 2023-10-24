import Part from "./Part"

const Content = (props) => {
    console.log( 'Content Props:', props )
    return(
      <>
        {/* <Part part={props.parts[0]} /> */}
        {props.parts.map( (x, i) => (
          <div>
            <p>Part {i+1}</p>
            <Part part={x} />
          </div>
        ))}
      </>
      
    )
  
}

export default Content