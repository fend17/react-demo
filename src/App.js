import React from 'react'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  constructor(props){
    // This component can do everything the React Component can do
    super(props);
    // Tillstånd, application state
    // Every state change triggers render
    this.state = {
      name: 'Jesper'
    };
  }

  // Render is inherited
  render(){
    return <div> {this.state.name} </div>
  }
}


