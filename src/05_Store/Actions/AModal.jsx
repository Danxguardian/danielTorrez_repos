import { SHOW_MODAL, HIDE_MODAL } from "./actionTypes";

const showModal = (
	title,
	message,
	accept,
	cancel,
	btnAcceptFunc,
	btnCancelFunc,
	type
) => {
	return {
		type: SHOW_MODAL,
		payload: {
			title,
			message,
			accept,
			cancel,
			btnAcceptFunc,
			btnCancelFunc,
			type,
		},
	};
};

const hideModal = () => {
	return { type: HIDE_MODAL };
};

export { showModal, hideModal };
