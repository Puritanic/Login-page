import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, text, customClass, disabled }) => (
	<button className={`${styles.Button} ${customClass}`} type={type} disabled={disabled}>
		{text}
	</button>
);

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
	customClass: PropTypes.string,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	type: 'submit',
	customClass: '',
	disabled: false,
};

export default Button;
