import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import './styles/base/base.css';
import LoginPage from './components/LoginPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
