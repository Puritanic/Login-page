import React from 'react';
// import PropTypes from 'prop-types';

import { pageUrl } from '../../constants';
import styles from './Logo.module.css';

const Logo = ({ title, imgUrl }) => {
	return (
		<a className={styles.Logo} href={pageUrl}>
			<h1>{title}</h1>
			<img src={imgUrl} alt="Company Logo" />
		</a>
	);
};

export default Logo;
