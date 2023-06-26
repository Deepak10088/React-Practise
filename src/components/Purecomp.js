import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
  render() {
    console.log('Purecomp render');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default Purecomp
