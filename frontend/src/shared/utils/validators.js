export const validateLoginForm = ({ mail, password }) => {
	const isMailValid = validateMail(mail);
	const isPasswordValid = validatePassword(password);

	return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ username, mail, password }) => {
	const isMailValid = validateMail(mail);
	const isPasswordValid = validatePassword(password);
	const isNameValid = validateName(username);

	return isNameValid && isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
	return password.length > 5 && password.length < 13;
};

const validateName = (username) => {
	return username.length > 3 && username.length < 13;
};

export const validateMail = (mail) => {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(mail);
};
