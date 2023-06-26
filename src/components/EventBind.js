import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    //   this.clickhandler = this.clickhandler.bind(this)
    }
    // clickhandler(){
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    //     console.log(this);
    // }
    clickhandler = () => {
        this.setState({
            message : 'goodbye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>click</button>  'First approach' */}
                {/* <button onClick={() => this.clickhandler()}>click</button>  'second approach' */}
                <button onClick={this.clickhandler}>click</button>


            </div>
        )
    }
    
}

export default EventBind
