import AlertActions from '../actions/alertActions';

const initState = {
	showAlertMessage: false,
	alertMessageContent: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case AlertActions.OPEN_ALERT_MESSAGE:
			return {
				...state,
				showAlertMessage: true,
				alertMessageContent: action.content,
			};
		case AlertActions.CLOSE_ALERT_MESSAGE:
			return {
				...state,
				showAlertMessage: false,
				alertMessageContent: null,
			};
		default:
			return state;
	}
};

export default reducer;
