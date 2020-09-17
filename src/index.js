import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components'; //import Obj from './components'
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './providers/UserProvider'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>,
    document.getElementById('root')
);
