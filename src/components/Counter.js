import React, { Component } from 'react'

// class Counter extends Component {
//     constructor (props) {
//         super(props)
//             this.state ={
//                 count : 0
                
//             }
//     }
//     Increament() {
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log(this.state.count);
//     }
//     render() {
//         return(
//         <div>
//             <div>count - {this.state.count}</div>
//             <button onClick={() => this.Increament()}>Increament</button>                     
//         </div>
//     )
//     }
// }

class Counter extends Component {
    constructor (props) {
        super(props)
            this.state ={
                count : 'Hello Everyone'
                
            }
    }
    Increament() {
        this.setState({
            count: "name: Pratik, age : 22, address : kaverivihar"
        })
        console.log(this.state.count);
    }

    Increament1() {
        this.setState({
            count: "name: deepak, age : 21, address : anandvihar"
        })
        console.log(this.state.count);
    }
    render() {
        return(
        <div>
            <div>count - {this.state.count}</div>
            <button onClick={() => this.Increament()}>Pratik Info</button>
            <button onClick={() => this.Increament1()}>deepak Info</button>                     
        </div>
    )
    }
}
export default Counter