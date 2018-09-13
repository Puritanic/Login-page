import React from 'react';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = () => (
	<section className={styles.App}>
		<LoginForm />
	</section>
);

export default LoginPage;
