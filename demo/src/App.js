import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

@connect(
  state=>state
)
class App extends Component {
  constructor(props){
      super(props)
      this.state={
        myCity:''
      }
   }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{marginBottom:10}}>当前城市：{this.props.myCity}</span>
          <span>
              <Link 
              to="selectcity"
              style={{color:"#fff"}}
              >
              城市切换
              </Link>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
