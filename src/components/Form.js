import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comment :'',
         topic : ''
      }
    }
    handleUsernamechange = (event) => {
        this.setState ({
            username : event.target.value
        })
    }
    handleCommentchange = (event) => {
        this.setState({
            comment : event.target.value
        })
    }
    handleTopicchange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }
    handlesubmit = (event) => {        
            alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
            event.preventDefault()
    }
    
  render() {
    // const { username, comment, topic } = this.state
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
            <label>username</label>
        <input type='text' value={this.state.username} onChange={this.handleUsernamechange} />
        </div>
        <div>
            <label>comment</label>
            <textarea value={this.state.comment} onChange={this.handleCommentchange} />
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicchange}>
                <option />
                <option value={'react'}>React</option>
                <option value={'Angular'}>Angular</option>
                <option value={'vue'}>vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
