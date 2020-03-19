import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { StyledInput, StyledButton } from '../../styled-components';
import { UPDATE_PROJECT } from '../../mutations';
import { GET_PROJ_BY_ID } from '../../queries';

export default function EditProject({ id }) {
	const history = useHistory();

	const { data: queryData } = useQuery(GET_PROJ_BY_ID, { variables: { id } });

	const initialProject = {
		name: '',
		description: '',
		status: '',
		techStack: '',
		designURL: '',
		deploymentURL: '',
		frontEndRepoURL: '',
		backEndRepoURL: '',
		private: false,
		wantFeedback: false,
		wantAssistance: false,
		completed: false,
		archived: false,
	};

	const [project, setProject] = useState({ ...initialProject });

	useEffect(() => {
		if (queryData) {
			const { projectByID } = queryData;

			setProject({
				name: projectByID.name,
				description: projectByID.description || '',
				status: projectByID.status || '',
				techStack: projectByID.techStack || '',
				designURL: projectByID.designURL || '',
				deploymentURL: projectByID.deploymentURL || '',
				frontEndRepoURL: projectByID.frontEndRepoURL || '',
				backEndRepoURL: projectByID.backEndRepoURL || '',
				private: projectByID.private || false,
				wantFeedback: projectByID.wantFeedback || false,
				wantAssistance: projectByID.wantAssistance || false,
				completed: projectByID.completed || false,
				archived: projectByID.archived || false,
			});
		}
	}, [queryData]);

	const [updateProject, { loading, error, data }] = useMutation(
		UPDATE_PROJECT,
		{ variables: { id } },
	);

	useEffect(() => {
		if (data) history.push('/home');
	}, [data]);

	const handleChange = e => {
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setProject({ ...project, [e.target.name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateProject({ variables: { ...project } });
		setProject({ ...initialProject });
	};

	return (
		<StyledEditProjectWrapper>
			<div className='form'>
				<h2>Edit Project</h2>
				{loading && <p>Loading...</p>}
				{!loading && (
					<form onSubmit={handleSubmit}>
						<StyledInput
							type='text'
							name='name'
							value={project.name}
							placeholder='Project name (required)'
							onChange={handleChange}
						/>
						<textarea
							name='description'
							rows='5'
							value={project.description}
							placeholder='Description'
							onChange={handleChange}
						/>
						<StyledInput
							name='status'
							type='text'
							value={project.status}
							placeholder='Current status'
							onChange={handleChange}
						/>
						<StyledInput
							name='techStack'
							type='text'
							value={project.techStack}
							placeholder='Tech stack'
							onChange={handleChange}
						/>
						<StyledInput
							name='designURL'
							type='text'
							value={project.designURL}
							placeholder='Design files URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='frontEndRepoURL'
							type='text'
							value={project.frontEndRepoURL}
							placeholder='Front-end code repo URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='backEndRepoURL'
							type='text'
							value={project.backEndRepoURL}
							placeholder='Back-end code repo URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='deploymentURL'
							type='text'
							value={project.deploymentURL}
							placeholder='Deployment URL'
							onChange={handleChange}
						/>
						<div className='checkbox'>
							<input
								type='checkbox'
								id='private'
								name='private'
								checked={project.private}
								onChange={handleChange}
							/>
							<label htmlFor='private'>Private</label>
						</div>
						<div className='checkbox'>
							<input
								type='checkbox'
								id='wantFeedback'
								name='wantFeedback'
								checked={project.wantFeedback}
								onChange={handleChange}
							/>
							<label htmlFor='wantFeedback'>Feedback wanted</label>
						</div>
						<div className='checkbox'>
							<input
								type='checkbox'
								id='wantAssistance'
								name='wantAssistance'
								checked={project.wantAssistance}
								onChange={handleChange}
							/>
							<label htmlFor='wantAssistance'>Help needed</label>
						</div>
						<div className='checkbox'>
							<input
								type='checkbox'
								id='completed'
								name='completed'
								checked={project.completed}
								onChange={handleChange}
							/>
							<label htmlFor='completed'>Completed</label>
						</div>
						<div className='checkbox'>
							<input
								type='checkbox'
								id='archived'
								name='archived'
								checked={project.archived}
								onChange={handleChange}
							/>
							<label htmlFor='archived'>Archive</label>
						</div>
						<StyledButton type='submit'>Submit</StyledButton>
					</form>
				)}
				{error && <p>Error!</p>}
			</div>
		</StyledEditProjectWrapper>
	);
}

const StyledEditProjectWrapper = styled.div`
	padding: 2rem;

	margin: 0 auto;

	.form {
		width: 30rem;
		margin: 0 auto;

		h2 {
			margin-bottom: 2rem;
		}

		textarea {
			width: 100%;
			resize: none;
			padding: 0.75rem;

			font-family: inherit;
		}

		.checkbox {
			display: flex;
			align-items: center;

			label {
				margin-left: 0.5rem;
			}
		}
	}
`;
