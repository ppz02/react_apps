import React, { Component } from 'react'

export default class StateClicker extends Component {
    state = {
        randN : 1
    }

    changeRandN = ()=>{
        this.setState({randN : Math.floor(Math.random() * 10)});
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.randN}</h1>
                {
                    this.state.randN === 7 
                    ? <h1>You Win</h1>
                    :
                    <button onClick={this.changeRandN}>
                        Random Number
                    </button> 
                }
            </div>
        )
    }
}
