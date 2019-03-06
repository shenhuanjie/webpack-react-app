import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from './components/Deskmark';
import 'bootstrap/scss/bootstrap.scss'
import 'babel-polyfill';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Deskmark />, app);