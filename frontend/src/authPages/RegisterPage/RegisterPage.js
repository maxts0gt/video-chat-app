import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';

function RegisterPage() {
	const [mail, setMail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	return (
		<AuthBox boxSize={900}>
			<RegisterPageHeader />
			<RegisterPageInputs
				name={name}
				setName={setName}
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
			/>
			<RegisterPageFooter />
		</AuthBox>
	);
}

export default RegisterPage;
