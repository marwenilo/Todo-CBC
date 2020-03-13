import React, { Component } from 'react'

 class TodoInput extends Component {

state={
    userInput:""
}

handleChange=e=>{
    this.setState({
userInput : e.target.value
    })
}





handleClick=(e)=>{
e.preventDefault()
this.props.addTodo(this.state.userInput)
this.setState({
    userInput:""
})


}



    render() {
        return (
            <div>
            <h1 align="center">To Do App</h1>
            <form className="form-row align-items-center" onSubmit={this.handleClick} >
              <input
                className="input form-control nb-2"
                value={this.state.userInput}
                onChange={this.handleChange}
           
              />
              <button className="btn btn-primary">Subtmi</button>
            </form>
            </div>
        )
    }
}
export default TodoInput