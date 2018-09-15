import React from 'react';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Info from './Info';

const LoginPage = () => (
	<section className={styles.LoginPage}>
		<Logo imgUrl="https://abo.24heures.ch/tamstorefront/tamMedia/logo-website_24.svg" />
		<section className={styles.LoginPage__left}>
			<div>
				<p>Abonné(e) au journal mais pas encore enregistré(e) ?</p>
				<Button text="Activer l’accès" />
			</div>
		</section>
		<LoginForm />
		<Info />
	</section>
);

export default LoginPage;
