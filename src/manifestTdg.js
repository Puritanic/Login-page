export default function Manifest(title, acronym) {
	return {
		page: 'https://www.tdg.ch/',
		locale: 'fr',
		accentColor: '#015395',
		logoUrl: 'https://abo.tdg.ch/tamstorefront/tamMedia/logo-website_TG.svg',
		forgotPassUrl: 'https://abo.tdg.ch/tamstorefront/login/pw/request?callerUri=',
		activateAccUrl: 'https://abo.tdg.ch/tamstorefront/activate?callerUri=',
		fillFormUrl: 'https://abo.tdg.ch/tamstorefront/contact',
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
				contactPhone: '0842 850 150',
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
