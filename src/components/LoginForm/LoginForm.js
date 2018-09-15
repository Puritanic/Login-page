import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pageManifest } from '../../index';
import { userLogin } from '../../actions/login';

import styles from './LoginForm.module.css';
import Button from '../Button/Button';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
	};

	isFormValid = () => {
		const { email, password } = this.state;

		return password.length >= 6 && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	};
	onSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		return this.props.userLogin({ email, password });
	};
	onChange = e => {
		const { name, value } = e.target;
		return this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<section className={styles.LoginForm}>
				<form className={styles.LoginForm__form} onSubmit={this.onSubmit}>
					<h2 className={styles.LoginForm__heading}>{pageManifest.messages.form.heading}</h2>
					<div className={styles.LoginForm__form__group}>
						<input
							value={email}
							name="email"
							onChange={this.onChange}
							className={styles.LoginForm__form__input}
							type="email"
							placeholder={pageManifest.messages.form.inputEmail}
						/>
						<label htmlFor="name" className={styles.LoginForm__form__label}>
							{pageManifest.messages.form.inputEmail}
						</label>
					</div>
					<div className={styles.LoginForm__form__group}>
						<input
							value={password}
							name="password"
							onChange={this.onChange}
							className={styles.LoginForm__form__input}
							type="password"
							placeholder={pageManifest.messages.form.inputPass}
						/>
						<label htmlFor="name" className={styles.LoginForm__form__label}>
							{pageManifest.messages.form.inputPass}
						</label>
					</div>
					<div className={styles.LoginForm__form__radio__group}>
						<input
							className={styles.LoginForm__form__radio__input}
							id="remember"
							type="checkbox"
							name="remember"
						/>
						<label tabIndex="-1" className={styles.LoginForm__form__radio__label} htmlFor="remember">
							<span tabIndex="0" className={styles.LoginForm__form__radio__button} />
							{pageManifest.messages.form.rememberMe}
						</label>
					</div>
					<Button
						disabled={!this.isFormValid()}
						type="submit"
						customClass={styles.LoginForm__btn}
						text={pageManifest.messages.form.loginBtn}
					/>

					<a href={pageManifest.forgotPassUrl}>
						<small>{pageManifest.messages.form.forgotPass}</small>
					</a>
				</form>
				{this.props.error && <p className={styles.LoginForm__form__error}>{this.props.error || null}</p>}
			</section>
		);
	}
}

const mapStateToProps = ({ error }) => ({ error });

const mapDispatchToProps = dispatch => ({
	userLogin: (data, history) => dispatch(userLogin(data, history)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
