import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm } from '../styled-components/StyledComponents';
import { Logo } from '../components/navbar';

export default function Login() {
	return (
		<StyledForm>
			<div>
				<Logo className='logo' />
				<form>
					<input type='text' placeholder='Username or email' />
					<input type='password' placeholder='Password' />
					<button>Log In</button>
				</form>
			</div>
			<div>
				Don't have an account? <Link to='/register'>Sign up</Link>
			</div>
		</StyledForm>
	);
}
