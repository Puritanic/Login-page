import Manifest from './manifestDE';

const pageManifest = Manifest({});

export const types = {
	LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	VALIDATE_LOGIN: 'VALIDATE_LOGIN',
};

export const secret = 'tamedia';

export const pageUrl = pageManifest.page;

export const newspapers = {
	'24heures': { title: '24heures', acronym: '24', contactPhone: '0842 824 124', accentColor: '#E30714' },
	tdg: { title: 'tdg', acronym: 'TG', contactPhone: '0842 850 150', accentColor: '#015395' },
	tagesanzeiger: { title: 'tagesanzeiger', acronym: 'TA', contactPhone: '+41 44 404 64 64', accentColor: '#0178BD' },
	derbund: { title: 'derbund', acronym: 'BU+41 844 385 144', contactPhone: '', accentColor: '#0085AB' },
};
