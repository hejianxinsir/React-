import React from 'react';
import {Component} from 'react';
import './App.css';

import Button from './Button.js';
import Control from './Control.js';
import Uncontrol from './Uncontrol.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      num: 100
    }

    this.ref = React.createRef()
  }

  add1(){
    console.log('add1')
    this.setState({
      num: this.state.num+1
    })
  }

  minus1(){
    console.log('minus1')
    this.setState({
      num: this.state.num-1
    })
  }

  hello(){
    console.log('hello')
  }
  
  render(){
    return (
      <div className="App">
        <p>{this.state.num}</p>
        <Button general={this.add1.bind(this)} value="加一"/>
        <button onClick={this.minus1.bind(this)}>减一</button>
        <Button general={this.hello.bind(this)} value="打招呼"/>
        <Button general={this.minus1.bind(this)} value="再减一"/>
        <Control />
        <Uncontrol />
      </div>
    );
  }
}

export default App;
