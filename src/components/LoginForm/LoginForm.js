import React from 'react';

import styles from './LoginForm.module.css';
import Button from '../Button/Button';

const LoginForm = () => (
	<section className={styles.LoginForm}>
		<div className={styles.LoginForm__form}>
			<h2 className={styles.LoginForm__heading}>Je me connecte</h2>
			<div className={styles.LoginForm__form__group}>
				<input className={styles.LoginForm__form__input} type="email" placeholder="Your email" />
				<input className={styles.LoginForm__form__input} type="password" placeholder="Your password" />

				<div className={styles.LoginForm__form__radio__group}>
					<input
						className={styles.LoginForm__form__radio__input}
						id="remember"
						type="checkbox"
						name="remember"
					/>
					<label className={styles.LoginForm__form__radio__label} htmlFor="remember">
						<span className={styles.LoginForm__form__radio__button} />
						Rester connecté
					</label>
				</div>
				<Button type="submit" customClass={styles.LoginForm__btn} text={'Login'} />
			</div>
		</div>
	</section>
);

export default LoginForm;
