import React from "react";

class Counter extends React.Component {
    render(){
        const { counter, increment, decrement, reset } = this.props

        return (
            <div className="App">
                <div>{counter}</div>
                <div>
                    <button onClick={increment}>INCREMENT</button>
                </div>
                <div>
                    <button onClick={decrement}>DECREMENT</button>
                </div>
                <div>
                    <button onClick={reset}>RESET</button>
                </div>      
            </div>
        )
    }
}

export default Counter