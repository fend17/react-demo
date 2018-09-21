import React from 'react'
import firebase from './firebase'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  state = {
    counter: 0,
    bananas: []
  }

  componentDidMount(){
    this.listenForChildAdded();
  }

  bindListeners = () => {
    this.listener = firebase
      .database()
      .ref('bananer')
      .orderByChild('timestamp')
      .limitToFirst(3)
      .on('value', (snapshot) => {
        let tempArray = [];
        snapshot.forEach((child) => {
          tempArray.push(child.val());
        });
        this.setState({ bananas: tempArray })
      });
  }

  listenForChildAdded = () => {
    firebase
      .database()
      .ref('bananer')
      .orderByChild('title')
      .on('child_added', (snapshot) => {
        const child = snapshot.val();
        const bananas = [...this.state.bananas, child];
        this.setState({ bananas });
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
    return (
      <div>
        <button onClick={this.onClick}>Click me</button>
        <p>{this.state.name}</p>
        {
          this.state.bananas.map(banana => <p>{banana.title}</p>)
        }
      </div>
    )
  }
}

export default App;






