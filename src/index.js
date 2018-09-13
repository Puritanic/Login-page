import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import './styles/base/base.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
