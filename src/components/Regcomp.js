import React, { Component } from 'react'

class Regcomp extends Component {
  render() {
    console.log('Regcomp render');
    return (
      <div>
        Regular component {this.props.name}
      </div>
    )
  }
}

export default Regcomp
