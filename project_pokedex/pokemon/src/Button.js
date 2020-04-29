import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={(e)=>{alert("you have clicked me")}}>
                    Click Me !!
                </button>
            </div>
        )
    }
}
