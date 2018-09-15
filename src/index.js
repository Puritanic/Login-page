import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css';
import './styles/base/base.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
