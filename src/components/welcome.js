import React, { Component } from 'react'

// class Welcome extends Component {
//     render() {
//         return <h1>Class Component</h1>
//     }
// }

class Welcome extends Component {
    render() {
        const {name, playername}  = this.props
        return (
        <h1>welcome {name} a.k.a {playername}</h1>
        )
    }
}

export default Welcome 


// class Welcome extends Component {
//     render() {
//         return (
//         <h1>welcome {this.props.name} a.k.a {this.props.playername}</h1>
//         )
//     }
// }
// export default Welcome 