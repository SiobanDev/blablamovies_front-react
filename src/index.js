import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "bootstrap";
import './css/styles.css';
import App from "./App";
import MainContainer from "./components/layouts/MainContainer";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MainContainer />, document.getElementById('main-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
