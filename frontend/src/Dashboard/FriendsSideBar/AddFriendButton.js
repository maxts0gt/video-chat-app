import React from 'react';
import CustomFriendButton from '../../shared/components/CustomPrimaryButton';

const additionalStyles = {
	marginTop: '10px',
	marginLeft: '5px',
	width: '80%',
	height: '30px',
	background: '#3ba55d',
};

const AddFriendButton = () => {
	const handleOpenAddFriend = () => {};

	return (
		<>
			<CustomFriendButton
				additionalStyles={additionalStyles}
				label='Add Friend'
				onClick={handleOpenAddFriend}
			/>
		</>
	);
};

export default AddFriendButton;
