export const User=(props)=>{
    return(
      <div>
         <h1 key={props.key}>{props.name} {props.age}</h1>
      </div>
    )
}