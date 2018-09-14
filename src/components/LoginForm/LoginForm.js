import React from 'react';

import styles from './LoginForm.module.css';
import Button from '../Button/Button';

const LoginForm = () => (
	<section className={styles.LoginForm}>
		<div className={styles.LoginForm__form}>
			<h2 className={styles.LoginForm__heading}>Je me connecte</h2>
			<div className={styles.LoginForm__form__group}>
				<input className={styles.LoginForm__form__input} type="email" placeholder="Adresse e-mail" />
				<label htmlFor="name" className={styles.LoginForm__form__label}>
					Adresse e-mail
				</label>
			</div>
			<div className={styles.LoginForm__form__group}>
				<input className={styles.LoginForm__form__input} type="password" placeholder="Mot de passe" />
				<label htmlFor="name" className={styles.LoginForm__form__label}>
					Mot de passe
				</label>
			</div>
			<div className={styles.LoginForm__form__radio__group}>
				<input className={styles.LoginForm__form__radio__input} id="remember" type="checkbox" name="remember" />
				<label className={styles.LoginForm__form__radio__label} htmlFor="remember">
					<span className={styles.LoginForm__form__radio__button} />
					Rester connecté
				</label>
			</div>
			<Button type="submit" customClass={styles.LoginForm__btn} text={'Login'} />
		</div>
	</section>
);

export default LoginForm;
