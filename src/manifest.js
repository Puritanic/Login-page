export default function Manifest({ title, acronym, contactPhone, accentColor, locale }) {
	return {
		title,
		page: `https://www.${title}.ch/`,
		accentColor,
		logoUrl: `https://abo.${title}.ch/tamstorefront/tamMedia/logo-website_${acronym}.svg`,
		forgotPassUrl: `https://abo.${title}.ch/tamstorefront/login/pw/request?callerUri=`,
		activateAccUrl: `https://abo.${title}.ch/tamstorefront/activate?callerUri=`,
		fillFormUrl: `https://abo.${title}.ch/tamstorefront/contact`,
		contactPhone,
		messages() {
			if (locale === 'de') {
				return {
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
						contact() {
							return `Haben Sie Fragen? ${contactPhone} Rufen Sie uns an, wir helfen Ihnen gerne persönlich weiter.`;
						},
						sslProtected:
							'Sicherer Bestellvorgang Ihre Angaben werden mit einem SSL-verschlüsselten Zertifikat übertragen.',
						fillFormP1: 'Kontaktieren Sie uns',
						fillFormP2: 'Online Kontaktformular',
					},
				};
			} else if (locale === 'fr') {
				return {
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
						contact() {
							return `Des questions? ${contactPhone} Contactez-nous.`;
						},
						sslProtected:
							'Processus de commande sécurisé Vos données sont sécurisées avec un certificat crypté SSL.',
						fillFormP1: 'Contactez-nous.',
						fillFormP2: 'Formulaire de contact en ligne.',
					},
				};
			}
		},
	};
}
