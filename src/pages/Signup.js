import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link, useHistory } from 'react-router-dom';
import {
	StyledForm,
	StyledInput,
	StyledButton,
} from '../styled-components/StyledComponents';
import { Logo } from '../components/navbar';

const SIGNUP = gql`
	mutation Signup($email: String!, $username: String!, $password: String!) {
		signup(email: $email, username: $username, password: $password) {
			token
			user {
				id
			}
		}
	}
`;

export default function Signup() {
	const history = useHistory();

	const [user, setUser] = useState({
		email: '',
		username: '',
		password: '',
	});

	const [signup, { loading, error, data, client }] = useMutation(SIGNUP);

	useEffect(() => {
		if (data) {
			const {
				signup: {
					token,
					user: { id },
				},
			} = data;

			localStorage.setItem('token', token);
			localStorage.setItem('userID', id);
			client.writeData({ data: { isLoggedIn: true, userID: id } });
			history.push('/profile');
		}
	}, [data]);

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		signup({ variables: { ...user } });
		setUser({ email: '', username: '', password: '' });
	};

	return (
		<StyledForm>
			<div>
				<Logo className='logo' />
				<p>Sign up to see what projects your dev friends are working on.</p>
				{loading && <p>Loading...</p>}
				{!loading && (
					<form onSubmit={handleSubmit}>
						<StyledInput
							type='text'
							name='email'
							value={user.email}
							placeholder='Email'
							onChange={handleChange}
						/>
						<StyledInput
							type='text'
							name='username'
							value={user.username}
							placeholder='Username'
							onChange={handleChange}
						/>
						<StyledInput
							type='password'
							name='password'
							value={user.password}
							placeholder='Password'
							onChange={handleChange}
						/>
						<StyledButton>Sign up</StyledButton>
					</form>
				)}
				{error && <p>Error!</p>}
			</div>
			<div>
				Have an account? <Link to='/login'>Log in</Link>
			</div>
		</StyledForm>
	);
}
