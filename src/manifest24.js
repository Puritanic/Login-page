export default function Manifest() {
	return {
		page: 'https://www.24heures.ch/',
		locale: 'fr',
		accentColor: '#ED1C23',
		logoUrl: 'https://abo.24heures.ch/tamstorefront/tamMedia/logo-website_24.svg',
		forgotPassUrl: 'https://abo.24heures.ch/tamstorefront/login/pw/request?callerUri=',
		activateAccUrl: 'https://abo.24heures.ch/tamstorefront/activate?callerUri=',
		fillFormUrl: 'https://abo.24heures.ch/tamstorefront/contact',
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
				contactPhone: '0842 824 124',
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
