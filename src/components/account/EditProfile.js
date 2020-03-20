import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { StyledInput, StyledButton } from '../../styled-components';
import { GET_USER } from '../../queries';
import { UPDATE_USER } from '../../mutations';

export default function EditProfile() {
	const { data } = useQuery(GET_USER);

	const initialUser = {
		name: '',
		email: '',
		bio: '',
		techStack: '',
		githubURL: '',
		linkedinURL: '',
		portfolioURL: '',
		twitterURL: '',
	};

	const [user, setUser] = useState({ ...initialUser });

	useEffect(() => {
		if (data) {
			const { me } = data;

			setUser({
				name: me.name || '',
				email: me.email || '',
				bio: me.bio || '',
				techStack: me.techStack || '',
				githubURL: me.githubURL || '',
				linkedinURL: me.linkedinURL || '',
				portfolioURL: me.portfolioURL || '',
				twitterURL: me.twitterURL || '',
			});
		}
	}, [data]);

	const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		updateUser({ variables: { ...user } });
	};

	return (
		<EditWrapper>
			<div className='form'>
				<h2>Edit Profile</h2>
				{loading && <p>Loading...</p>}
				{!loading && (
					<form onSubmit={handleSubmit}>
						<StyledInput
							type='text'
							name='name'
							value={user.name}
							placeholder='Name'
							onChange={handleChange}
						/>
						<StyledInput
							type='text'
							name='email'
							value={user.email}
							placeholder='Email'
							onChange={handleChange}
						/>
						<textarea
							name='bio'
							rows='5'
							value={user.bio}
							placeholder='Bio'
							onChange={handleChange}
						/>
						<StyledInput
							name='techStack'
							type='text'
							value={user.techStack}
							placeholder='Favorite Tech Stack'
							onChange={handleChange}
						/>
						<StyledInput
							name='githubURL'
							type='text'
							value={user.githubURL}
							placeholder='GitHub URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='linkedinURL'
							type='text'
							value={user.linkedinURL}
							placeholder='LinkedIn URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='portfolioURL'
							type='text'
							value={user.portfolioURL}
							placeholder='Portfolio URL'
							onChange={handleChange}
						/>
						<StyledInput
							name='twitterURL'
							type='text'
							value={user.twitterURL}
							placeholder='Twitter URL'
							onChange={handleChange}
						/>
						<StyledButton type='submit'>Submit</StyledButton>
					</form>
				)}
				{error && <p>Error!</p>}
			</div>
		</EditWrapper>
	);
}

const EditWrapper = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;

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
	}
`;
