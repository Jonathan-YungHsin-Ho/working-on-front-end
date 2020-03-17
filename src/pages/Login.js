import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton } from '../styled-components';
import { Logo } from '../components/navbar';
import { LOGIN } from '../mutations';

export default function Login() {
	const history = useHistory();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [login, { loading, error, client }] = useMutation(LOGIN);

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		login({ variables: { ...user } })
			.then(res => {
				// console.log(res);
				const {
					login: {
						token,
						user: { id },
					},
				} = res.data;

				localStorage.setItem('token', token);
				localStorage.setItem('userID', id);
				client.writeData({ data: { isLoggedIn: true, userID: id } });
				history.push('/home');
			})
			.catch(err => {
				// console.log(err);
			});
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
				{error && <p>Error: Invalid credentials!</p>}
			</div>
			<div>
				Don't have an account? <Link to='/signup'>Sign up</Link>
			</div>
		</StyledForm>
	);
}
