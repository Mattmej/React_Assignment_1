import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';
import './Components/Styling.css';


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

    const style = { 
      backgroundColor: 'gray',
      padding: '5px',
      border: '1px solid blue'
    }



    return ( 
      <div>
        <UserInput changed={this.changeState} username={this.state.username}/>
        <div style = {style}>
          <UserOutput username={this.state.username}/>
        </div>
        <div className='styling'>
          <UserOutput username={this.state.username}/>
        </div>
      </div>
    )


  }
}

export default App;
