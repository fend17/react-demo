import React from 'react'
import firebase from './firebase'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  state = {
    counter: 0,
    name: 'Jesper'
  }

  componentDidMount(){
    this.listener = firebase
      .database()
      .ref('bananer')
      .on('value', (snapshot) => {
        console.log(snapshot.val());
      })
      
    this.interval = setInterval(() => {
      console.log('hello');
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    // Always remove the .on listener
    this.listener.off();
  }

  onClick = () => {
    /* 
     * Proper way to update state
     * setState is always async
     * setState accepts both an object and a function
     */
    firebase
      .database()
      .ref('bananer')
      .push('En grön')
    
    firebase
      .database()
      .ref('bananer/grön')
      .set(true)
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






