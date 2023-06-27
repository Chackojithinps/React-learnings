export const Count=({title,...obj})=>{
    // const {title,count}=props
    return(
        
        <div>
           <h1>{title}</h1>
           <h1>{obj.count}</h1>
           <p>{obj.place}</p>
        </div>
    )
}