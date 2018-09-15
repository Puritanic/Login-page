export default function Manifest() {
	return {
		page: 'https://www.tagesanzeiger.ch/',
		locale: 'de',
		accentColor: '#0178BD',

		logoUrl: 'https://abo.tagesanzeiger.ch/tamstorefront/tamMedia/logo-website_TA.svg',
		forgotPassUrl: 'https://abo.tagesanzeiger.ch/tamstorefront/login/pw/request?callerUri=',
		activateAccUrl: 'https://abo.tagesanzeiger.ch/tamstorefront/activate?callerUri=',
		fillFormUrl: 'https://abo.tagesanzeiger.ch/tamstorefront/contact',
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
				contactPhone: '+41 44 404 64 64',
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
