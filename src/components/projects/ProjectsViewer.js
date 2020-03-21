import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { AddProject, EditProject, DeleteProject } from '.';
import { ProjectRow } from '../card';
import { StyledButton } from '../../styled-components';
import { GET_USER } from '../../queries';

export default function ProjectsViewer() {
	const { loading, error, data } = useQuery(GET_USER);

	const [editMode, setEditMode] = useState(false);
	const [projectID, setProjectID] = useState('');

	const handleClickViaCapturing = (id, e) => {
		e.stopPropagation();
		setProjectID(id);
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
						<div key={project.id} className='project-row'>
							<div
								className='project-edit'
								onClickCapture={e => handleClickViaCapturing(project.id, e)}>
								<ProjectRow project={project} />
							</div>
							<DeleteProject id={project.id} name={project.name} />
						</div>
					))}
				</div>
			</div>
			{!editMode && <AddProject />}
			{editMode && <EditProject id={projectID} />}
		</StyledProjects>
	);
}

const StyledProjects = styled.div`
	margin: 2rem auto;

	width: 100%;
	max-width: 98rem;

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

			.project-row {
				display: flex;
				width: 100%;
				justify-content: space-between;
				border-bottom: 1px solid silver;

				.project-edit {
					cursor: pointer;

					flex-grow: 1;

					border-right: 1px solid silver;

					div {
						border-bottom: 0;
					}
				}
			}
		}
	}
`;

const AddButton = styled(StyledButton)`
	margin: 0;
	width: 12rem;
`;
