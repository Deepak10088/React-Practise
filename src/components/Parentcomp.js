import React, { Component, PureComponent } from 'react'
import Regcomp from './Regcomp'
import Purecomp from './Purecomp'

class Parentcomp extends PureComponent {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'controller'
      }
    }
    componentDidMount () {
        setInterval (() => {
            this.setState({
                name:'controller'
            })
        },2000)
    }
    
  render() {
    console.log('***********************Parent component render************************')
    return (
      <div>
        Parent component
        <Regcomp name={this.state.name} />
        <Purecomp name={this.state.name} />
      </div>
    )
  }
}

export default Parentcomp
