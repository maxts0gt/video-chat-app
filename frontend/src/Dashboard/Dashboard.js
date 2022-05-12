import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import AppBar from './AppBar/AppBar';
import SideBar from './SideBar/SideBar';
import Messenger from './Messenger/Messenger';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import { logout } from '../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authActions';
import { connectWithSocketServer } from '../realTimeCommunication/socketCommunication';

const BoxWrapper = styled('div')({
	backgroundColor: 'teal',
});

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex',
});

function Dashboard({ setUserDetails }) {
	useEffect(() => {
		const userDetails = localStorage.getItem('user');
		if (!userDetails) {
			logout();
		} else {
			setUserDetails(JSON.parse(userDetails));
			connectWithSocketServer(JSON.parse(userDetails));
		}
	});

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

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch),
	};
};

export default connect(null, mapActionsToProps)(Dashboard);
