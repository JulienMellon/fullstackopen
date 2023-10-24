import Part from "./Part"

const Content = (props) => {
    console.log( 'Content Props:', props )
    return(
    <>
    <h3>
      Part 1: 
    </h3>
      <Part part={props.part1}/> 
    
      <h3>
      Part 2: 
    </h3>
      <Part part={props.part2}/>

      <h3>
      Part 3: 
    </h3>
      <Part part={props.part3}/>

    </>
    )
}

export default Content