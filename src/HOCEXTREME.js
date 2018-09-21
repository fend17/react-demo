import React, { Component } from "react";

class App extends Component {
  render() {
    const ButtonWithToggle = withToggle(Button);
    return (
      <div className="App">
        <Button />
        <ButtonWithToggle />
      </div>
    );
  }
}
 
function Button(props){
  return <button onClick={props.onClick} > { props.toggle ? "On" : "Off" } </button>
}

//Function returns a new class component, the component has all the props from the
//argument component 'ComposedComponent'
function withToggle(ComposedComponent){
  return class extends Component{
    state = {
      toggle: false
    }
    onClick = () => {
      this.setState({ toggle: !this.state.toggle});
    }
    //Returns the passed component and send along the state and the click function
    //Component now has state and an onclick.
    render(){
      return(
        <ComposedComponent {...this.props} toggle={this.state.toggle} onClick={this.onClick} />
      )
    }
  }
}