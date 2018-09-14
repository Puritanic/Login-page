import React from 'react';

import styles from './LoginPage.module.css';
import InfoBlock from './InfoBlock';

const Info = () => {
	return (
		<section className={styles.LoginPage__info}>
			<InfoBlock
				icon="MdLocalPhone"
				text="Des questions? 0842 824 124 Contactez-nous."
				iconColor="#fbfcfb"
				iconSize="2em"
			/>
			<InfoBlock
				icon="MdVpnLock"
				text="Processus de commande sécurisé Vos données sont sécurisées avec un certificat crypté SSL."
				iconColor="#484951"
				iconSize="2em"
			/>
			<InfoBlock icon="MdMailOutline" text="Contactez-nous." iconColor="#484951" iconSize="2em">
				<a href="#">Formulaire de contact en ligne</a>
			</InfoBlock>
		</section>
	);
};

export default Info;
