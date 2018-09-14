import React from 'react';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { IconContext } from 'react-icons';
import { MdLocalPhone, MdMailOutline, MdVpnLock } from 'react-icons/md';

const LoginPage = () => (
	<section className={styles.LoginPage}>
		<Logo imgUrl="https://abo.24heures.ch/tamstorefront/tamMedia/logo-website_24.svg" />
		<section className={styles.LoginPage__left}>
			<div className={styles.LoginPage__register}>
				<p>Abonné(e) au journal mais pas encore enregistré(e) ?</p>
				<Button text="Activer l’accès" />
			</div>
		</section>
		<LoginForm />
		<div className={styles.LoginPage__info}>
			<div className={styles.LoginPage__info__block}>
				<IconContext.Provider
					value={{ color: '#fbfcfb', verticalAlign: 'middle', size: '2em', className: 'global-class-name' }}
				>
					<MdLocalPhone />
				</IconContext.Provider>
				<small>Des questions? 0842 824 124 Contactez-nous.</small>
			</div>
			<div className={styles.LoginPage__info__block}>
				<IconContext.Provider
					value={{ color: 'black', verticalAlign: 'middle', size: '2em', className: 'global-class-name' }}
				>
					<MdVpnLock />
				</IconContext.Provider>
				<small>Processus de commande sécurisé Vos données sont sécurisées avec un certificat crypté SSL.</small>
			</div>
			<div className={styles.LoginPage__info__block}>
				<IconContext.Provider
					value={{ color: 'black', verticalAlign: 'middle', size: '2em', className: 'global-class-name' }}
				>
					<MdMailOutline />
				</IconContext.Provider>
				<small>Contactez-nous.</small>
				<a href="#">Formulaire de contact en ligne</a>
			</div>
		</div>
	</section>
);

export default LoginPage;
