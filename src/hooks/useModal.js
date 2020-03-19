import { useReducer } from 'react';

export const useModal = () => {
	const initialState = false;

	const reducer = (_, action) => {
		switch (action.type) {
			case 'open':
				return true;
			case 'close':
				return false;
			default:
				throw new Error();
		}
	};

	const [showModal, handleModal] = useReducer(reducer, initialState);

	return { showModal, handleModal };
};
