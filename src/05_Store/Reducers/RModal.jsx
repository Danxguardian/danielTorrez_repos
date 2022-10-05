import * as Types from "../Actions/actionTypes";
import MESSAGES from "../../06_Utils/i18n";
const INIT_STATE = {
	isShow: false,
	default: {
		type: 1,
		title: MESSAGES["MODAL_TITLE_DEFAULT"],
		message: MESSAGES["MODAL_MESSAGE_DEFAULT"],
		accept: MESSAGES["MODAL_ACCEPT_DEFAULT"],
		cancel: MESSAGES["MODAL_CANCEL_DEFAULT"],
	},
};

const modalReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.SHOW_MODAL: {
			const {
				type,
				title,
				message,
				accept,
				cancel,
				btnAcceptFunc,
				btnCancelFunc,
			} = action.payload;

			return {
				...state,
				type: type || state.default.type,
				title: title,
				message: message,
				accept: accept || state.default.accept,
				cancel: cancel || state.default.cancel,
				btnAcceptFunc: btnAcceptFunc || (() => {}),
				btnCancelFunc: btnCancelFunc || (() => {}),
				isShow: true,
			};
		}

		case Types.HIDE_MODAL: {
			return {
				...state,
				isShow: false,
			};
		}

		default:
			return state;
	}
};

export default modalReducer;
