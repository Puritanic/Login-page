import React from 'react';

import styles from './LoginPage.module.css';
import InfoBlock from './InfoBlock';
import Button from '../Button/Button';

const Info = () => {
	return (
		<section className={styles.LoginPage__info}>
			<InfoBlock
				customClass={styles.LoginPage__register}
				text="Abonné(e) au journal mais pas encore enregistré(e) ?"
			>
				<Button customClass={styles.LoginPage__register__btn} text="Activer l’accès" />
			</InfoBlock>
			<InfoBlock
				icon="MdLocalPhone"
				text="Des questions? 0842 824 124 Contactez-nous."
				iconSize="2em"
				displayIcon
			/>
			<InfoBlock
				icon="MdVpnLock"
				text="Processus de commande sécurisé Vos données sont sécurisées avec un certificat crypté SSL."
				iconColor="#484951"
				iconSize="2em"
				displayIcon
			/>
			<InfoBlock displayIcon icon="MdMailOutline" text="Contactez-nous." iconColor="#484951" iconSize="2em">
				<a href="#">Formulaire de contact en ligne</a>
			</InfoBlock>
		</section>
	);
};

export default Info;
