import React from 'react';

import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const Header = () => (
	<header className={styles.Header}>
		<Logo
			className={styles.Header__logo}
			imgUrl="https://abo.24heures.ch/tamstorefront/tamMedia/logo-website_24.svg"
		/>
	</header>
);

export default Header;
