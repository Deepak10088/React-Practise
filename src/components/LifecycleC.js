import React, { Component } from 'react'

class LifecycleC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'jhandu bamb'
      }
      console.log('LifecycleC constructor');
    }
   
    static getDerivedStateFromProps(props){
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleC componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle ShouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() { 
        console.log('Lifecycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle componentDidUpdate')
    }

    Handle = () => {
        this.setState({
            name : 'State changed successfully'
        })
    }

  render() {
    console.log('LifecycleC render')
    return (<div>
        <div>Lifecycle C {this.state.name}</div>
        <button onClick={this.Handle}>Change state</button>
        </div>
    )
  }
}

export default LifecycleC
