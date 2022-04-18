import {Component} from "react";
import "./App.css"

class App extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    incr =()=>{
        this.setState({count: this.state.count + 1})
        console.log("1")
    }
    decr =()=>{
        this.setState({count: this.state.count - 1})
    }

    reset =()=>{
        this.setState({count: 0})
    }
    render(){
  return (
    <div className="App container bg-primary">
        <p>{this.state.count}</p>
          <button className="success" onClick={this.incr}>Incr</button>
          <button className="danger" onClick={this.reset}>Reset</button>
          <button className="secondary" onClick={this.decr}>Decr</button>
    </div>
  );

    }

}

export default App;
