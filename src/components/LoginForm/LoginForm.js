import React from 'react';

import styles from './LoginForm.module.css';
import Button from '../Button/Button';

const LoginForm = () => (
	<section className={styles.LoginForm}>
		<div className={styles.LoginForm__form}>
			<input type="email" placeholder="Your email" />
			<input type="password" placeholder="Your password" />
		</div>
		<Button text={'Login'} />
	</section>
);

export default LoginForm;
