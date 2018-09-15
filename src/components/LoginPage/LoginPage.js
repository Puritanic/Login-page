import React from 'react';

import { pageManifest } from '../../index';

import styles from './LoginPage.module.css';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Info from './Info';

const LoginPage = () => (
	<section className={styles.LoginPage}>
		<Logo pageUrl={pageManifest.page} title={pageManifest.title} imgUrl={pageManifest.logoUrl} />
		<section className={styles.LoginPage__left}>
			<div>
				<p>{pageManifest.messages().info.activateAcc}</p>
				<a href={pageManifest.activateAccUrl}>
					<Button text={pageManifest.messages().info.activateAccBtn} />
				</a>
			</div>
		</section>
		<LoginForm />
		<Info />
	</section>
);

export default LoginPage;
