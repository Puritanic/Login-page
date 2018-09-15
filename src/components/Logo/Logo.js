import React from 'react';
// import PropTypes from 'prop-types';

import { pageUrl } from '../../actions/constants';
import styles from './Logo.module.css';

const Logo = props => {
	return (
		<a className={styles.Logo} href={pageUrl}>
			<img src={props.imgUrl} alt="Logo" />
		</a>
	);
};

export default Logo;
