import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({
	name,
	setName,
	mail,
	setMail,
	password,
	setPassword,
}) => {
	return (
		<>
			<InputWithLabel
				value={name}
				setValue={setName}
				label='Username'
				type='text'
				placeholder='Enter username'
			/>
			<InputWithLabel
				value={mail}
				setValue={setMail}
				label='E-mail'
				type='text'
				placeholder='Enter e-mail address'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				label='Password'
				type='password'
				placeholder='Enter password'
			/>
		</>
	);
};

export default RegisterPageInputs;
