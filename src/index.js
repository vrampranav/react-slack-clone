import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,SignIn} from './components'; //import Obj from './components'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<SignIn/>,document.getElementById('root'));
