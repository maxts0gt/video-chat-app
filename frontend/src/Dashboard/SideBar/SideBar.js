import React from 'react';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
	width: '72px',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '#202225',
});

const SideBar = () => {
	return <MainContainer>SideBar</MainContainer>;
};

export default SideBar;
