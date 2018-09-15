import React from 'react';

import { pageManifest } from '../../index';

import styles from './LoginPage.module.css';
import InfoBlock from './InfoBlock';
import Button from '../Button/Button';

const Info = () => {
	return (
		<section className={styles.LoginPage__info}>
			<InfoBlock customClass={styles.LoginPage__register} text={pageManifest.messages.info.activateAcc}>
				<a href={pageManifest.activateAccUrl}>
					<Button
						customClass={styles.LoginPage__register__btn}
						text={pageManifest.messages.info.activateAccBtn}
					/>
				</a>
			</InfoBlock>
			<InfoBlock icon="MdLocalPhone" text={pageManifest.messages.info.contact()} iconSize="2em" displayIcon />
			<InfoBlock
				icon="MdVpnLock"
				text={pageManifest.messages.info.sslProtected}
				iconColor="#484951"
				iconSize="2em"
				displayIcon
			/>
			<InfoBlock
				displayIcon
				icon="MdMailOutline"
				text={pageManifest.messages.info.fillFormP1}
				iconColor="#484951"
				iconSize="2em"
			>
				<a href={pageManifest.fillFormUrl}>{pageManifest.messages.info.fillFormP2}</a>
			</InfoBlock>
		</section>
	);
};

export default Info;
