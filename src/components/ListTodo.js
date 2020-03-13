import React from 'react'
import { Button } from "react-bootstrap"
 function ListTodo(props) {
    return (
        <div>
<ul>
{props.list.map((item,i)=>(
<li key={i}>
<p style={{textDecoration : item.isComplete ? "line-through":""}}>{item.todo}</p>
<Button variant="success" onClick={()=>props.handleComplete(i)}>{item.isComplete ? "undo": "complete"}</Button>

<Button variant="danger" onClick={()=>props.handleDelete(i)}>delete</Button>
</li>

)


)}

</ul>
      </div>
    )
}
export default ListTodo
