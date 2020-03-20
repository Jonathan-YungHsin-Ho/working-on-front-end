import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useApolloClient } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { ScreenOverlay } from '.';
import { StyledButton } from '../../styled-components';
import { DELETE_PROJECT } from '../../mutations';

export default function ModalDeleteProject({ handleCloseModal, name, id }) {
	// const [deleteProject, { loading, error, data }] = useMutation(DELETE_PROJECT);
	// const history = useHistory();

	// const client = useApolloClient();

	const handleLogout = () => {
		handleCloseModal();
		// client.clearStore();
		// client.writeData({ data: { isLoggedIn: false } });
		// history.push('/');
		// localStorage.clear();
	};

	return (
		<div>
			<StyledModal>
				<p>Are you sure you want to delete {name}?</p>
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
