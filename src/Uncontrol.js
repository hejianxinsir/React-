import React from 'react';

export default class Uncontrol extends React.Component{
  constructor(){
    super()
    this.ref = React.createRef()
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(this.ref.current.value)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        密码：<input
                  name="password"
                  type="text"
                  ref={this.ref}
              />
      </form>
    )
  }
}