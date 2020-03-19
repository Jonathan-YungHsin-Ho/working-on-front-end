import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingHeader() {
	return (
		<StyledHeader>
			<div className='header-wrapper'>
				<p>
					<span className='icon'>
						<FontAwesomeIcon icon={['fas', 'laptop']} size='lg' color='black' />
					</span>
					Share your projects.
				</p>
				<p>
					<span className='icon'>
						<FontAwesomeIcon icon={['fas', 'search']} size='lg' color='black' />
					</span>
					See what other devs are building.
				</p>
				<p>
					<span className='icon'>
						<FontAwesomeIcon icon={['fas', 'cogs']} size='lg' color='black' />
					</span>
					Get to <span className='logo'>Werk.</span>
				</p>
			</div>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-bottom: 1px solid silver;

	.header-wrapper {
		width: 100%;
		max-width: 98rem;
		margin: 0 auto;
		padding: 0 2rem;

		p {
			font-size: 2.5rem;

			.icon {
				display: inline-block;
				width: 6rem;
			}

			.logo {
				font-family: 'Pacifico', cursive;
			}
		}
	}
`;
