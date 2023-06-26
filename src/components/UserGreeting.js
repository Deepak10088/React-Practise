import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor() {
      super()
    
      this.state = {
         count : 0
      }
      this.increament = this.increament.bind(this)
    }
    increament(){
      this.setState ({
        count : this.state.count + 1 
      })
      console.log(this);
    }

  render() {
    return (
      <div>
        <div>count-{this.state.count}</div>
        <button onClick={() => this.increament()}>click</button>
      </div>
    )
      
    // return this.state.isLoggedin && <div>Wellcome deepak</div>




    // return this.state.isLoggedin ? (
    //     <div>Wellcome Deepak</div>
    // ) : (<div>Wellcome Guest</div>)
  

    // let message
    // if(this.state.isLoggedin){
    //     message = <div>Wellcome Deepak</div>
    // }else  {
    //     message = <div>Wellcome Guest</div>
    // }
    // return <div>{message}</div>

    // if (this.state.isLoggedin) {
    //     return <div>Wellcome Deepak</div>
    // } else {
    //     return <div>Wellcome Guest</div>
    // }
    // return (
    //   <div>
        
    //   </div>
    // )
  }
}

export default UserGreeting
