import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    handleincrement = () => {
        this.setState((prevstate)=>(
            {counter: prevstate.counter + 1}
        ))
    }
    handledecrement = () => {
        this.setState((prevstate)=>(
            {counter: prevstate.counter - 1}
        ))
    }
    handlereset = () => {
        this.setState({ counter: 0 })
    }
    render(){
        return(
            <div>
                <h1>counter</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleincrement}>Increment</button>
                <button onClick={this.handledecrement}>Decrement</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        )
    }
}

export default Counter;