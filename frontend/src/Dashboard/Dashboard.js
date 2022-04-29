import React from 'react';
import { styled } from '@mui/system';
import AppBar from './AppBar/AppBar';
import SideBar from './SideBar/SideBar';
import Messenger from './Messenger/Messenger';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';

const BoxWrapper = styled('div')({
	backgroundColor: 'teal',
});

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex',
});

function Dashboard() {
	return (
		<BoxWrapper>
			<Wrapper>
				<SideBar />
				<FriendsSideBar />
				<Messenger />
				<AppBar />
			</Wrapper>
		</BoxWrapper>
	);
}

export default Dashboard;
