import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    function clickhandler(){
        console.log('clicked the button');
    }
    return (
      <div>
        <button onClick={clickhandler}>click me</button>
      </div>
    )
  }
}

export default ClassClick
