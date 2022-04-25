export const validateLoginForm = ({ mail, password }) => {
	const isMailValid = validateMail(mail);
	const isPasswordValid = validatePassword(password);

	return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ name, mail, password }) => {
	const isMailValid = validateMail(mail);
	const isPasswordValid = validatePassword(password);
	const isNameValid = validateName(name);

	return isNameValid && isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
	return password.length > 5 && password.length < 13;
};

const validateName = (name) => {
	return name.length > 3 && name.length < 13;
};

const validateMail = (mail) => {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(mail);
};
