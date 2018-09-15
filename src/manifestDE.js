export default function Manifest({ title, acronym, contactPhone, accentColor }) {
	return {
		title,
		page: `https://www.${title}.ch/`,
		locale: 'de',
		accentColor,
		logoUrl: `https://abo.${title}.ch/tamstorefront/tamMedia/logo-website_${acronym}.svg`,
		forgotPassUrl: `https://abo.${title}.ch/tamstorefront/login/pw/request?callerUri=`,
		activateAccUrl: `https://abo.${title}.ch/tamstorefront/activate?callerUri=`,
		fillFormUrl: `https://abo.${title}.ch/tamstorefront/contact`,
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
				contactPhone,
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
