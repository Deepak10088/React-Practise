import React, { Component } from 'react'


class Message extends Component {
    constructor() {
        super() 
        this.state = {
            arr : ['deepak', 'pratik', 'kanak', 'rohan'],
            count : 0
        }
        this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage() {
        this.setState({
            count : this.state.count + 1,
            
        })
    }

    render() {
        return (<div>
            <h1>{this.state.arr[this.state.count]}</h1>
            <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
            )
    }

}

export default Message



// constructor() {
//     super() 
//     this.state = {
//         message: "welcome visitor"
//     }
// }
// changeMessage() {
//     this.setState({
//         message: "Thanks for subscribing channel"
//     })
// }

// render() {
//     return (<div>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.changeMessage()}>subscribe</button>
//         </div>
//         )
// }