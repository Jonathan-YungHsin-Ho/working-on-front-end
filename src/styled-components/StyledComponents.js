import styled from 'styled-components';

export const PageWrapper = styled.div`
	padding: 0 2rem;
`;

export const StyledForm = styled.div`
	width: 30rem;
	height: 40rem;
	margin: 2rem auto;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;

	background-color: white;
	border-radius: 0.3rem;
	border: 1px solid silver;

	.logo {
		margin-bottom: 2rem;

		font-size: 2.5rem;
	}

	p {
		margin: 1rem 0;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	textarea {
		width: 100%;
		resize: none;
		padding: 0.75rem;

		font-family: inherit;
	}

	.error {
		color: #cc0605;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 0.75rem;

	font-family: inherit;
`;

export const StyledButton = styled.button`
	width: 100%;
	margin: 1rem 0;
	height: 3rem;

	font-family: inherit;
	font-weight: bold;
	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

	/* background-color: #003366;
			color: white;
			border-radius: 0.5rem;
			border: none; */
`;
