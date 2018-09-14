import React from 'react';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const LoginPage = () => (
	<section className={styles.LoginPage}>
		<Logo imgUrl="https://abo.24heures.ch/tamstorefront/tamMedia/logo-website_24.svg" />
		<section className={styles.LoginPage__left}>
			<p>Abonné(e) au journal mais pas encore enregistré(e) ?</p>
			<Button text="Activer l’accès" />
			<div>
				<small>Des questions? 0842 824 124 Contactez-nous.</small>
			</div>
		</section>
		<LoginForm />
	</section>
);

export default LoginPage;
