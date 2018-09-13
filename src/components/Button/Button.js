import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, text, customClass }) => (
	<button className={`${styles.Button} ${customClass}`} type={type}>
		{text}
	</button>
);

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
	customClass: PropTypes.string,
};

Button.defaultProps = {
	type: 'submit',
	customClass: '',
};

export default Button;
