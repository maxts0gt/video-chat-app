import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
	//
	return 'Enter valid username, e-mail address and password should contain 6 to 12 characters';
};

const getFormValidMessage = () => {
	//
	return 'Press to register!';
};

const RegiterPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	const handlePushToLoginPage = () => {
		navigate('/login');
	};

	return (
		<>
			<Tooltip
				title={
					!isFormValid
						? getFormNotValidMessage()
						: getFormValidMessage()
				}
			>
				<div>
					<CustomPrimaryButton
						label='Register'
						additionalStyles={{
							marginTop: '30px',
							cursor: 'pointer',
						}}
						disabled={!isFormValid}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text="Don't have an account?"
				redirectText='Already have an account'
				additionaStyles={{ marginTop: '5px' }}
				redirectHandler={handlePushToLoginPage}
			/>
		</>
	);
};

export default RegiterPageFooter;
