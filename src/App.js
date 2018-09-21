import React from 'react'
import firebase from './firebase'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  state = {
    counter: 0,
  }

  componentDidMount(){
    this.bindListeners();
  }

  bindListeners = () => {
    this.listener = firebase
      .database()
      .ref('bananer')
      .orderByChild('title')
      .on('value', (snapshot) => {
        let tempArray = [];
        snapshot.forEach((child) => {
          tempArray.push(child.val());
        })
        console.log(tempArray);
      });
  }

  componentWillUnmount(){
    this.listener.off();
  }

  onClick = () => {
    firebase
      .database()
      .ref('bananer')
      .push({
        title: 'areeeetttta',
        timestamp: (new Date).getTime()
      })
  }
  
  // Render is inherited
  render(){
    return (<div>
              <button onClick={this.onClick}>Click me</button>
              <p>{this.state.name}</p>
            </div>)
  }
}

export default App;






