export default function Manifest() {
	return {
		page: 'https://www.derbund.ch/',
		locale: 'de',
		accentColor: '#0085AB',
		logoUrl: 'https://abo.derbund.ch/tamstorefront/tamMedia/logo-website_BU.svg',
		forgotPassUrl: 'https://abo.derbund.ch/tamstorefront/login/pw/request?callerUri=',
		activateAccUrl: 'https://abo.derbund.ch/tamstorefront/activate?callerUri=',
		fillFormUrl: 'https://abo.derbund.ch/tamstorefront/contact',
		messages: {
			form: {
				heading: 'Login',
				inputEmail: 'E-Mail-Adresse',
				inputPass: 'Passwort',
				rememberMe: 'Angemeldet bleiben',
				loginBtn: 'Login',
				forgotPass: 'Passwort vergessen?',
			},
			info: {
				activateAcc: 'Sie sind Zeitungsabonnent und haben noch kein Login?',
				activateAccBtn: 'Jetzt freischalten',
				contactPhone: '+41 844 385 144',
				contact() {
					return `Haben Sie Fragen? ${
						this.contactPhone
					} Rufen Sie uns an, wir helfen Ihnen gerne persönlich weiter.`;
				},
				sslProtected:
					'Sicherer Bestellvorgang Ihre Angaben werden mit einem SSL-verschlüsselten Zertifikat übertragen.',
				fillFormP1: 'Kontaktieren Sie uns',
				fillFormP2: 'Online Kontaktformular',
			},
		},
	};
}
