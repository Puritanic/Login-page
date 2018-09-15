import { createStore, applyMiddleware } from 'redux';
import loginReducer from './reducers/login.js';

import { types, secret, pageUrl } from './actions/constants';

// Custom middleware for (not really) authenticating user
const validateUser = () => next => action => {
	if (action.type === types.VALIDATE_LOGIN) {
		if (action.userData && action.userData.password === secret) {
			console.log('GOTCHA');
			window.location = pageUrl;
			const validAction = next({ type: types.LOGIN_SUCCESSFUL });
			return validAction;
		} else {
			const failureAction = next({ type: types.LOGIN_FAILURE, error: 'Authentication failed' });
			return failureAction;
		}
	}
	return next(action);
};

const store = createStore(loginReducer, {}, applyMiddleware(validateUser));

export default store;
