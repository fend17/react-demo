import React from 'react';

export function Button(props){
  return <button onClick={props.onClick} className={`btn ${props.className}`}> </button>
}

//Our HOC, takes component as argument, closure for capturing props from that component
export function makePrimary(ComposedComponent){
  return function(props) {
    //Spread all the props and send along extra prop
    return <ComposedComponent {...props} className="primary" />
  }
}






