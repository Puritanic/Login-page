export const types = {
	LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	VALIDATE_LOGIN: 'VALIDATE_LOGIN',
};

export const secret = 'tamedia';

// This is custom unique config for each newspaper,
// when one of those is passed to Manifest function, it will be consumed and will return appropriate information
export const newspapers = {
	'24heures': {
		locale: 'fr',
		title: '24heures',
		acronym: '24',
		contactPhone: '0842 824 124 |',
		accentColor: '#E30714',
	},
	tdg: { locale: 'fr', title: 'tdg', acronym: 'TG', contactPhone: '0842 850 150 |', accentColor: '#015395' },
	tagesanzeiger: {
		locale: 'de',
		title: 'tagesanzeiger',
		acronym: 'TA',
		contactPhone: '+41 44 404 64 64 |',
		accentColor: '#0178BD',
	},
	derbund: {
		locale: 'de',
		title: 'derbund',
		acronym: 'BU',
		contactPhone: '+41 844 385 144 |',
		accentColor: '#0085AB',
	},
};
