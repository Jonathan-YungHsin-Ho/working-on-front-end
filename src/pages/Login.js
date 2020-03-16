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

const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
			}
		}
	}
`;

export default function Login() {
	const history = useHistory();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [login, { loading, error, data, client }] = useMutation(LOGIN);

	useEffect(() => {
		if (data) {
			const {
				login: {
					token,
					user: { id },
				},
			} = data;

			console.log('ID', id);

			localStorage.setItem('token', token);
			localStorage.setItem('userID', id);
			client.writeData({ data: { isLoggedIn: true, userID: id } });
			history.push('/home');
		}
	}, [data]);

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		login({ variables: { ...user } });
		setUser({ email: '', password: '' });
	};

	return (
		<StyledForm>
			<div>
				<Logo className='logo' />
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
							type='password'
							name='password'
							value={user.password}
							placeholder='Password'
							onChange={handleChange}
						/>
						<StyledButton type='submit'>Log In</StyledButton>
					</form>
				)}
				{error && <p>Error!</p>}
			</div>
			<div>
				Don't have an account? <Link to='/signup'>Sign up</Link>
			</div>
		</StyledForm>
	);
}
