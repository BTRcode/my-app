import react from 'react'

// function Greet() {
//     return <h1> Hello BTR! </h1>
// }
const Greet = props => {

 console.log(props)
 return(
    <div>
      <h1> 
        Hello {props.name} a.k.a {props.heroName}
      </h1>  
      {props.childern}
    </div>
 )
}

export default Greet