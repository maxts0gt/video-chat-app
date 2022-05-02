import { Button } from '@mui/material';
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
		</Button>
	);
};

export default FriendsListItem;
