import React from 'react';
import { Typography } from '@mui/material';

function RegisterPageHeader() {
	return (
		<div>
			<Typography variant='h5' sx={{ color: 'white' }}>
				Welcome!
			</Typography>
			<Typography sx={{ color: '#b9bbbe' }}>
				Join our community and stay in touch always!
			</Typography>
		</div>
	);
}

export default RegisterPageHeader;
