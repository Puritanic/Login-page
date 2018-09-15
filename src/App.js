import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import styles from './App.module.css';

const App = () => {
	return (
		<Router>
			<main className={styles.App}>
				<Route component={LoginPage} />
			</main>
		</Router>
	);
};

export default App;
