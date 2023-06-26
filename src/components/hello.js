import React, { createElement } from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello.....</h1>
    //     </div>
    // ) 
    // return React.createElement('div', null , <h1>hello</h1>)
    // return React.createElement('div', null, 'h1', 'hello world')
    return React.createElement('div', null, React.createElement('h1', null, 'hello world'))

    return React.createElement('div',{id: "name", className: "team-a" } , <h1>hello</h1>)
}

export default Hello 