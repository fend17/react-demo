import React from 'react'

// Extending a class
class App extends React.Component {

  // Common initialization
  // Constructor exists outside of React
  state = {
    name: 'Jesper',
    counter: 0
  }

  onClick = () => {
    this.setState({})
  }

  // Render is inherited
  render(){
    return (
            <div>
              <button onClick={this.onClick}>Click me</button>
              <p>{this.state.name}</p>
            </div>
    )
  }
}

export default App;






