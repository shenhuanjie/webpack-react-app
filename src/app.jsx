import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from './components/Deskmark';
import Profile from './components/Profile';
import 'bootstrap/scss/bootstrap.scss'
import './common.scss';
import 'babel-polyfill';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Deskmark />, app);