import React from 'react'
import firebase from './firebase'
import {Button, makePrimary } from './HOC'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  state = {
    counter: 0,
    input: '',
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

  registerUser = () => {
    firebase.auth()
      .registerUser('zero_cool', 'password2000')
      .then((user) => {
        firebase
          .database()
          .ref(`/users/${user.uid}`)
          .set({ cool: true });
      })
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
        title: this.state.input,
        timestamp: (new Date).getTime()
      })
  }

  onChange = (event) => {
    this.setState({[event.target.name] : event.target.value })
  }
  
  // Render is inherited
  render(){
    const PrimaryButton = makePrimary(Button);
    PrimaryButton.displayName = 'Lennart';
    return (
      <div>
        <PrimaryButton hello="you" />
        <input type="text" name="input" onChange={this.onChange}/>
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






