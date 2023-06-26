import React from 'react'

// function Greet() {
//     return <h1>Hello everyone</h1>
// }

// const Greet = () => {
//     return <h1>hello everyone</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <div>
        <h1>hello <i>{props.name}</i> a.k.a {props.playername}</h1>{props.children}
        </div>
    )
}
export default Greet