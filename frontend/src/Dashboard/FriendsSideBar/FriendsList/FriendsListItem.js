import { Button, Typography } from '@mui/material';
import React from 'react';
import Avatar from '../../../shared/components/Avatar';

const FriendsListItem = ({ id, username, isOnline }) => {
	return (
		<Button
			style={{
				width: '100%',
				height: '42px',
				marginTop: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				color: 'black',
				position: 'relative',
			}}
		>
			<Avatar username={username} />
			<Typography
				style={{
					marginLeft: '7px',
					fontWeight: 700,
					color: '#8e9297',
				}}
				variant='subtitle2'
				align='left'
				textTransform='capitalize'
			>
				{username}
			</Typography>
		</Button>
	);
};

export default FriendsListItem;
