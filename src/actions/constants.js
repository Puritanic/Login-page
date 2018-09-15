import Manifest from '../manifest24';

const pageManifest = Manifest();

export const types = {
	LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	VALIDATE_LOGIN: 'VALIDATE_LOGIN',
};

export const secret = 'tamedia';

export const pageUrl = pageManifest.page;
