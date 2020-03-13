import React,{Component} from "react"

import TodoInput from './todoInput'
import TodoList from './ListTodo'





class Todo extends Component{
    state={
  
        list:[]
    }


    handleChange = e=>{
        this.setState({
            userInput : e.target.value
        })
    }

    addTodo = userInput=>{
      
        if(userInput){
            this.setState({
list : [...this.state.list, {todo:userInput, isComplete:false}],
userInput:""
            })
        }else{
            return alert ("enter todo ")
        }
        
    }

    handleComplete= (index)=>{
        this.setState({
            list: [...this.state.list.map((el,i)=>(index===i )?{...el, isComplete : !el.isComplete}: el)]
        })
    }

    handleDelete = (index)=>{
        this.setState({
            list: [...this.state.list.filter((el,i)=>index!==i)]
        })
    }




render(){
    return(
        <div className="container">
        <TodoInput addTodo={this.addTodo} />
            <TodoList list={this.state.list} handleComplete={this.handleComplete} handleDelete={this.handleDelete} />
        </div>
    )
}
}


export default Todo