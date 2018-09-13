import React from 'react';

import styles from './Footer.module.css';

const Footer = props => (
	<footer className={styles.Footer}>
		<div className={styles.Footer__section}>Section 1</div>
		<div className={styles.Footer__section}>Section 2</div>
		<div className={styles.Footer__section}>Section 3</div>
	</footer>
);

export default Footer;
