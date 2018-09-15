import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css';
import './styles/base/base.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { newspapers } from './constants';
import Manifest from './manifest';
import store from './store';

const body = document.getElementsByTagName('body')[0];
export const pageManifest = Manifest(newspapers['tdg']);

body.style.setProperty('--theme-color', pageManifest.accentColor);

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
