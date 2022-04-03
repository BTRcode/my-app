import React from 'react';

class Counter extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        counter : 0
    };
}
increment() {
    this.setState(prevState=>(
        {
        counter : prevState.counter +1 
        }))
}
increment(){
    this.increment()
    this.increment()
    this.increment()
}

    render() {
        return (
            <div>
            <div>initial counter = {this.state.counter}</div>
            <button onClick = {()=> this.incrementThree()} > increment </button>
            </div>  
        )
    }
}

export default Counter;