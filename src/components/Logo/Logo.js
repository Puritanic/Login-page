import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = props => {
	return (
		<a className={styles.Logo} href="https://www.24heures.ch/">
			<img src={props.imgUrl} alt="Logo" />
		</a>
	);
};

export default Logo;
