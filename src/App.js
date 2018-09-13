import React, { Fragment } from 'react';

import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = () => {
	return (
		<Fragment>
			<main className={styles.App}>
				<LoginPage />
			</main>
		</Fragment>
	);
};

export default App;
