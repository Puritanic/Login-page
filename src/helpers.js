export function validateField(fieldName, value) {
	let fieldValidationErrors = {};

	switch (fieldName) {
		case 'email':
			emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			fieldValidationErrors.email = emailValid ? '' : ' is invalid';
			break;
		case 'password':
			passwordValid = value.length >= 6;
			fieldValidationErrors.password = passwordValid ? '' : ' is too short';
			break;
		default:
			break;
	}

	return fieldValidationErrors;
}

export function isEmpty(obj) {
	return (
		obj === undefined ||
		obj === null ||
		(typeof obj === 'object' && Object.keys(obj).length === 0) ||
		(typeof obj === 'string' && obj.trim().length === 0)
	);
}
