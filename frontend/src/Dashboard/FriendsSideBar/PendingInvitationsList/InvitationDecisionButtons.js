import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

const InvitationDecisionButtons = ({
	disabled,
	handleRejectInvitation,
	handleAcceptInvitation,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
			}}
		>
			<IconButton
				style={{ color: 'green' }}
				disabled={disabled}
				onClick={handleAcceptInvitation}
			>
				<CheckIcon />
			</IconButton>
			<IconButton
				style={{ color: 'red' }}
				disabled={disabled}
				onClick={handleRejectInvitation}
			>
				<ClearIcon />
			</IconButton>
		</Box>
	);
};

export default InvitationDecisionButtons;
