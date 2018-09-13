import React, { Fragment } from 'react';

import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Fragment>
			<Header />
			<LoginPage />
			<Footer />
		</Fragment>
	);
};

export default App;
