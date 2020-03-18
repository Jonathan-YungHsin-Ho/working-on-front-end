import React from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';
import { ScreenOverlay } from '.';
import { StyledButton } from '../../styled-components';

export default function ModalLogout({ handleCloseModal }) {
	const history = useHistory();

	const client = useApolloClient();

	const handleLogout = () => {
		handleCloseModal();
		localStorage.clear();
		client.writeData({ data: { isLoggedIn: false } });
		history.push('/');
		client.clearStore().then(() => client.resetStore());
	};

	return (
		<div>
			<StyledModal>
				<p>Are you sure you want to log out?</p>
				<StyledButton onClick={handleLogout}>Yes</StyledButton>
			</StyledModal>
			<ScreenOverlay onClick={handleCloseModal} />
		</div>
	);
}

const StyledModal = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%);
	z-index: 1000;

	width: 30rem;
	height: 14rem;

	background-color: white;
	border-radius: 0.3rem;
	border: 1px solid silver;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	padding: 3rem;

	button {
		width: 50%;
		margin-bottom: 0;
	}
`;
