import React from 'react';

export default class Control extends React.Component{
  constructor(){
    super()
    this.state = {
      name: 'jonson',
      password: '123'
    }
  }

  changeName(e){
    this.setState({
      name: e.target.value
    })
  }
  changePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  render(){
    return (
      <div>
        <p>{this.state.name}</p>
        用户名：<input type="text"
                      name="username"
                      value={this.state.name}
                      onChange={this.changeName.bind(this)}
              /><br/>

        密码：<input 
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.changePassword.bind(this)}
        />
      </div>
    )
  }
}