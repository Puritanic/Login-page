import React from 'react';
import { IconContext } from 'react-icons';
import * as icons from 'react-icons/md';

import styles from './LoginPage.module.css';

const InfoBlock = ({ icon, text, customClass, displayIcon, iconColor, iconSize, children }) => {
	let Icon;
	if (icons[icon]) {
		Icon = icons[icon];
	} else {
		Icon = icons['MdBugReport'];
	}
	return (
		<div className={`${styles.LoginPage__info__block} ${customClass}`}>
			{displayIcon ? (
				<IconContext.Provider value={{ color: iconColor, verticalAlign: 'middle', size: iconSize }}>
					{<Icon />}
				</IconContext.Provider>
			) : null}

			<small>{text}</small>
			{children}
		</div>
	);
};

export default InfoBlock;
