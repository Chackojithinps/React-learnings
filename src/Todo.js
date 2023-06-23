export const Task=(props)=>{
    return <div style={{color:props.completed?"green":"red "}}>
    <h1>{props.taskName}</h1>
    <button onClick={()=>props.deleteItem(props.id)}>X</button>
    <button onClick={()=>props.completeItem(props.id)}>Complete</button>
    </div>
}
// export default Todo