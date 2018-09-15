import { types } from '../constants';

export const userLogin = userData => ({
	type: types.VALIDATE_LOGIN,
	userData,
});
