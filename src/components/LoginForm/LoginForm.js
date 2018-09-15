import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { userLogin } from '../../actions/login';

import styles from './LoginForm.module.css';
import Button from '../Button/Button';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		formErrors: { email: '', password: '' },
	};

	isFormValid = () => {
		const { email, password } = this.state;

		return password.length > 6 && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
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

		console.log(this.props.error);

		return (
			<section className={styles.LoginForm}>
				<form className={styles.LoginForm__form} onSubmit={this.onSubmit}>
					<h2 className={styles.LoginForm__heading}>Je me connecte</h2>
					<div className={styles.LoginForm__form__group}>
						<input
							value={email}
							name="email"
							onChange={this.onChange}
							className={styles.LoginForm__form__input}
							type="email"
							placeholder="Adresse e-mail"
						/>
						<label htmlFor="name" className={styles.LoginForm__form__label}>
							Adresse e-mail
						</label>
					</div>
					<div className={styles.LoginForm__form__group}>
						<input
							value={password}
							name="password"
							onChange={this.onChange}
							className={styles.LoginForm__form__input}
							type="password"
							placeholder="Mot de passe"
						/>
						<label htmlFor="name" className={styles.LoginForm__form__label}>
							Mot de passe
						</label>
					</div>
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
					<Button
						disabled={!this.isFormValid()}
						type="submit"
						customClass={styles.LoginForm__btn}
						text={'Login'}
					/>
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
