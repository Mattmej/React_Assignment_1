import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {

  state = { 
    // usernameList: [
    //   "Matt", "Gary"
    // ]

    username: "Matt"
  }

  changeState = (event) => { 
    this.setState({
      username: event.target.value
    })
  }





  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );


    return ( 
      <div>
        <UserInput changed={this.changeState} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    )


  }
}

export default App;
