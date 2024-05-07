import React from "react";
import Counter from "./containers/counterContainer";

class App extends React.Component {
    render(){
        return(
            <div>
                <header>
                    <Counter />
                </header>
            </div>
        )
    }
}

export default App