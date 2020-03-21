import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { StyledInput, StyledButton } from '../../styled-components';
import { Loading } from '../misc';
import { CREATE_PROJECT } from '../../mutations';
import { GET_USER, GET_ALL_USERS } from '../../queries';

export default function AddProject() {
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
	};

	const [project, setProject] = useState({ ...initialProject });

	const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
		refetchQueries: [{ query: GET_USER }, { query: GET_ALL_USERS }],
	});

	const handleChange = e => {
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setProject({ ...project, [e.target.name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		createProject({ variables: { ...project } });
		setProject({ ...initialProject });
	};

	return (
		<StyledAddProjectWrapper>
			<div className='form'>
				<h2>Add New Project</h2>
				{loading && <Loading />}
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
						{/* <div className='checkbox'>
							<input
								type='checkbox'
								id='private'
								name='private'
								checked={project.private}
								onChange={handleChange}
							/>
							<label htmlFor='private'>Private</label>
						</div> */}
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
						<StyledButton type='submit'>Submit</StyledButton>
					</form>
				)}
				{error && <p>Error!</p>}
			</div>
		</StyledAddProjectWrapper>
	);
}

const StyledAddProjectWrapper = styled.div`
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
