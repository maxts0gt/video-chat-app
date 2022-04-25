import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';
import { validateRegisterForm } from '../../shared/utils/validators';

function RegisterPage() {
	const [mail, setMail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateRegisterForm({ name, mail, password }));
	}, [mail, password, name, setIsFormValid]);

	const handleRegister = () => {
		console.log(mail);
		console.log(password);
		console.log(name);
		console.log('Register');
	};

	return (
		<AuthBox>
			<RegisterPageHeader />
			<RegisterPageInputs
				name={name}
				setName={setName}
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
			/>
			<RegisterPageFooter
				handleRegister={handleRegister}
				isFormValid={isFormValid}
			/>
		</AuthBox>
	);
}

export default RegisterPage;
