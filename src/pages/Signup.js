import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton } from '../styled-components';
import { Logo } from '../components/navbar';
import { SIGNUP } from '../mutations';
import { GET_ALL_USERS } from '../queries';

export default function Signup() {
	const history = useHistory();

	const initialSignup = { email: '', username: '', password: '' };

	const [user, setUser] = useState(initialSignup);

	const [signup, { loading, error, client }] = useMutation(SIGNUP, {
		update(cache, { data: { signup } }) {
			const { allUsers } = cache.readQuery({ query: GET_ALL_USERS });

			const { user } = signup;

			cache.writeQuery({
				query: GET_ALL_USERS,
				data: {
					allUsers: [...allUsers, user],
				},
			});
		},
	});

	const handleChange = e =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const res = await signup({ variables: { ...user } });

			const {
				data: {
					signup: {
						token,
						user: { id },
					},
				},
			} = res;

			localStorage.setItem('token', token);
			// localStorage.setItem('userID', id);
			client.writeData({ data: { isLoggedIn: true, userID: id } });
			history.push('/home');
		} catch (err) {
			// console.log(err.graphQLErrors.map(err => err.message));
		}
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
				{error?.graphQLErrors && (
					<div>
						{error.graphQLErrors.map((err, index) => (
							<p className='error' key={index}>
								{`Sorry, ${err.message.split('= ')[1]} unavailable`}
							</p>
						))}
					</div>
				)}
			</div>
			<div>
				Have an account? <Link to='/login'>Log in</Link>
			</div>
		</StyledForm>
	);
}
