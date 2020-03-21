import React, { useState } from 'react';
import styled from 'styled-components';
import { EditProfile } from '../components/account';

export default function Account() {
	const [mode, setMode] = useState('editProfile');

	return (
		<StyledAccount>
			<div className='account-left'>
				<p onClick={() => setMode('editProfile')}>Edit Profile</p>
				{/* <p>Change Password</p> */}
			</div>
			<div className='account-right'>
				{mode === 'editProfile' && <EditProfile />}
			</div>
		</StyledAccount>
	);
}

const StyledAccount = styled.div`
	margin: 2rem auto;

	width: 100%;
	max-width: 98rem;

	border-radius: 0.3rem;
	border: 1px solid silver;

	display: flex;

	.account-left {
		padding: 2rem;
		border-right: 1px solid silver;
		width: 20rem;

		p {
			cursor: pointer;
		}

		p:first-of-type {
			margin-bottom: 2rem;
		}
	}

	.account-right {
		width: 100%;
	}
`;
