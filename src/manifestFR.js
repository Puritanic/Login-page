export default function Manifest({ title, acronym, contactPhone, accentColor }) {
	return {
		title,
		page: `https://www.${title}.ch/`,
		locale: 'fr',
		accentColor,
		logoUrl: `https://abo.${title}.ch/tamstorefront/tamMedia/logo-website_${acronym}.svg`,
		forgotPassUrl: `https://abo.${title}.ch/tamstorefront/login/pw/request?callerUri=`,
		activateAccUrl: `https://abo.${title}.ch/tamstorefront/activate?callerUri=`,
		fillFormUrl: `https://abo.${title}.ch/tamstorefront/contact`,
		messages: {
			form: {
				heading: 'Je me connecte',
				inputEmail: 'Adresse e-mail',
				inputPass: 'Mot de passe',
				rememberMe: 'Rester connecté',
				loginBtn: 'Se connecter',
				forgotPass: 'Mot de passe oublié ?',
			},
			info: {
				activateAcc: 'Abonné(e) au journal mais pas encore enregistré(e) ?',
				activateAccBtn: 'Activer l’accès',
				contactPhone,
				contact() {
					return `Des questions? ${this.contactPhone} Contactez-nous.`;
				},
				sslProtected:
					'Processus de commande sécurisé Vos données sont sécurisées avec un certificat crypté SSL.',
				fillFormP1: 'Contactez-nous.',
				fillFormP2: 'Formulaire de contact en ligne.',
			},
		},
	};
}
