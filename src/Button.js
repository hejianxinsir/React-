import React, {Component} from 'react'

export default class Button extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <button onClick={this.props.general}>{this.props.value}</button>
      </div>
    )
  }
}