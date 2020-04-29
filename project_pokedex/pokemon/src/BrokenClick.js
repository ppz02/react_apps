import React, { Component } from 'react'

export default class BrokenClick extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked : false
        };
        //this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = (e) =>{
        this.setState({clicked : true});
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!' : 'Click me'}</h1>
                <button onClick={this.clickHandler}>Click Me !!</button>
            </div>
        )
    }
}
