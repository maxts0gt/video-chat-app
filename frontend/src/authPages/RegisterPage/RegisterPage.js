import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';
import { validateRegisterForm } from '../../shared/utils/validators';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';

function RegisterPage({ register }) {
	const navigate = useNavigate();
	const [mail, setMail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateRegisterForm({ username, mail, password }));
	}, [mail, password, username, setIsFormValid]);

	const handleRegister = () => {
		const userDetails = { username, mail, password };
		register(userDetails, navigate);
	};

	return (
		<AuthBox>
			<RegisterPageHeader />
			<RegisterPageInputs
				username={username}
				setUsername={setUsername}
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

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch),
	};
};

export default connect(null, mapActionsToProps)(RegisterPage);
