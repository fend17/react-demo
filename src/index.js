import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// function App(props){
//   let state = {
//     name: 'Steffe'
//   }
//   return `<div>
//             ${Title({name: state.name})}
//             ${props.name}
//           </div>`;
// }

// function Title(props){
//   let state = {
//     name: props.name
//   }
//   return `<p>${props.name}</p>`
// }

// function render(html, element){
//   element.innerHTML = html;
// }


// render(App({title: "Hej", name: "Steffe"}), document.body)



