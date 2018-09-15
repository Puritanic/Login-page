import React from 'react';

import { pageManifest } from '../../index';

import styles from './LoginPage.module.css';
import InfoBlock from './InfoBlock';
import Button from '../Button/Button';

const Info = () => {
	const { messages, activateAccUrl, fillFormUrl } = pageManifest;

	return (
		<section className={styles.LoginPage__info}>
			<InfoBlock customClass={styles.LoginPage__register} text={messages().info.activateAcc}>
				<a href={activateAccUrl}>
					<Button customClass={styles.LoginPage__register__btn} text={messages().info.activateAccBtn} />
				</a>
			</InfoBlock>
			<InfoBlock icon="MdLocalPhone" text={messages().info.contact()} iconSize="2em" displayIcon />
			<InfoBlock
				icon="MdVpnLock"
				text={messages().info.sslProtected}
				iconColor="#484951"
				iconSize="2em"
				displayIcon
			/>
			<InfoBlock
				displayIcon
				icon="MdMailOutline"
				text={messages().info.fillFormP1}
				iconColor="#484951"
				iconSize="2em"
			>
				<a href={fillFormUrl}>{messages().info.fillFormP2}</a>
			</InfoBlock>
		</section>
	);
};

export default Info;
