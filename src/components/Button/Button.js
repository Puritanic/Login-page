import React from 'react';

import styles from './Button.module.css';

const Button = props => (
	<button className={styles.Button} type="submit">
		{props.text}
	</button>
);

export default Button;
