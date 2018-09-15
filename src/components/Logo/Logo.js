import React from 'react';
import PropTypes from 'prop-types';

import styles from './Logo.module.css';

const Logo = ({ title, imgUrl, pageUrl }) => {
	return (
		<a className={styles.Logo} href={pageUrl}>
			<h1>{title}</h1>
			<img src={imgUrl} alt="Company Logo" />
		</a>
	);
};

Logo.propTypes = {
	title: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
};

export default Logo;
