import React from 'react';

import styles from './Logo.module.css';

const Logo = props => {
	return <img className={styles.Logo} src={props.imgUrl} alt="Logo" />;
};

export default Logo;
