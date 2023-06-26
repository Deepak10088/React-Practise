import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Parentname : 'Parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childname){
       alert(`Hello ${this.state.Parentname} from ${childname}`)
    }
    


  render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetparent} />
      </div>
    )
  }
}

export default ParentComponent
