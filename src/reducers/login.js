import { types } from '../actions/constants';

const initialState = {
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESSFUL:
			return { error: null };
		case types.LOGIN_FAILURE:
			return { error: action.error };
		default:
			return state;
	}
};
