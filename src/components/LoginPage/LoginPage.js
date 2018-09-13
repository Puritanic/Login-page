import React from 'react';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';
import Button from '../Button/Button';

const LoginPage = () => (
	<section className={styles.LoginPage}>
		<section className={styles.LoginPage__left}>
			<p>Abonné(e) au journal mais pas encore enregistré(e) ?</p>
			<Button text="Activer l’accès" />
		</section>
		<LoginForm />
	</section>
);

export default LoginPage;
