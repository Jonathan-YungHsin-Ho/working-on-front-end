import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { ScreenOverlay } from '.';
import { StyledButton } from '../../styled-components';
import { DELETE_PROJECT } from '../../mutations';
import { GET_USER } from '../../queries';

export default function ModalDeleteProject({ handleCloseModal, name, id }) {
	const [deleteProject] = useMutation(DELETE_PROJECT, {
		update(cache, { data: { deleteProject } }) {
			const { me } = cache.readQuery({ query: GET_USER });

			cache.writeQuery({
				query: GET_USER,
				data: {
					me: {
						...me,
						projects: me.projects.filter(
							project => project.id !== deleteProject.id,
						),
					},
				},
			});

			handleCloseModal();
		},
	});

	const handleLogout = () => {
		try {
			deleteProject({ variables: { id } });
		} catch (err) {
			console.log(err);
		}
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
