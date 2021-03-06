import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

const AddFriendDialog = ({
	isDialogOpen,
	closeDialogHandler,
	sendFriendInvitation = () => {},
}) => {
	const [mail, setMail] = useState('');
	const [isFormValid, setIsFormValid] = useState('');

	const handleSendInvitation = () => {
		// send friend request to server
	};

	const handleCloseDialog = () => {
		closeDialogHandler();
		setMail('');
	};

	useEffect(() => {
		setIsFormValid(validateMail(mail));
	}, [mail, setIsFormValid]);

	return (
		<div>
			<Dialog open={isDialogOpen} onClose={handleCloseDialog}>
				<DialogTitle>
					<Typography>Invite a friend</Typography>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<Typography>
							Enter e-mail address of friend which you would like
							to invite!
						</Typography>
					</DialogContentText>
					<InputWithLabel
						label='Mail'
						type='text'
						value={mail}
						setValue={setMail}
						placeholder='Enter mail address'
					></InputWithLabel>
				</DialogContent>
				<DialogActions>
					<CustomPrimaryButton
						onClick={handleSendInvitation}
						disabled={!isFormValid}
						label='Send'
						additionalStyles={{
							marginLeft: '15px',
							marginRight: '15px',
							marginBottom: '10px',
						}}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddFriendDialog;
