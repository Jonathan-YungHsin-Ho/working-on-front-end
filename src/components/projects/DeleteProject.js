import React from 'react';
// import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { DELETE_PROJECT } from '../../mutations';
import { useModal } from '../../hooks';
import { ModalDeleteProject } from '../modals';

export default function DeleteProject({ id, name }) {
	const { showModal, handleModal } = useModal();
	// const [deleteProject, { loading, error, data }] = useMutation(DELETE_PROJECT);

	const handleClick = () => handleModal({ type: 'open' });

	return (
		<StyledDelete>
			<FontAwesomeIcon
				icon={['far', 'trash-alt']}
				size='sm'
				color='black'
				onClick={handleClick}
				className='icon'
			/>
			{showModal && (
				<ModalDeleteProject
					handleCloseModal={() => handleModal({ type: 'close' })}
					id={id}
					name={name}
				/>
			)}
		</StyledDelete>
	);
}

const StyledDelete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;

	/* margin-left: 1rem; */

	.icon {
		cursor: pointer;
	}
`;
