import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { AddProject, EditProject } from '.';
import { ProjectRow } from '../card';
import { StyledButton } from '../../styled-components';
import { GET_USER } from '../../queries';

export default function ProjectsViewer() {
	const { loading, error, data } = useQuery(GET_USER);

	const [editMode, setEditMode] = useState(false);

	const handleClickViaCapturing = (id, e) => {
		e.stopPropagation();
		console.log(id);
		setEditMode(true);
	};

	const handleShowAdd = () => setEditMode(false);

	return (
		<StyledProjects>
			<div className='projects-left'>
				<div className='projects-page-header'>
					<h2>Current Projects</h2>
					{editMode && (
						<AddButton onClick={handleShowAdd}>Add Project</AddButton>
					)}
				</div>
				<div className='projects-left-bottom'>
					{loading && <p>Loading...</p>}
					{error && <p>Error!</p>}
					{data?.me.projects.map(project => (
						<div
							className='project-edit'
							onClickCapture={e => handleClickViaCapturing(project.id, e)}
							key={project.id}>
							<ProjectRow project={project} />
						</div>
					))}
				</div>
			</div>
			{!editMode && <AddProject />}
			{editMode && <EditProject />}
		</StyledProjects>
	);
}

const StyledProjects = styled.div`
	margin: 2rem;

	max-width: 100%;

	border-radius: 0.3rem;
	border: 1px solid silver;

	display: flex;

	.projects-left {
		border-right: 1px solid silver;
		width: 50%;

		.projects-page-header {
			padding: 2rem;
			border-bottom: 1px solid silver;

			display: flex;
			justify-content: space-between;
		}

		.projects-left-bottom {
			padding-bottom: 1rem;

			.project-edit {
				cursor: pointer;
			}
		}
	}
`;

const AddButton = styled(StyledButton)`
	margin: 0;
	width: 12rem;
`;
