import React from 'react';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { StyledForm } from '../styled-components/StyledComponents';

// const GET_USER = gql`
// 	query {
// 		me {
// 			username
// 			name
// 			email
// 			bio
// 			techStack
// 			githubURL
// 			linkedinURL
// 			portfolioURL
// 			twitterURL
// 		}
// 	}
// `;

export default function UpdateProfile() {
	return <StyledUpdateForm>UPDATE PROFILE</StyledUpdateForm>;
}

const StyledUpdateForm = styled(StyledForm)`
	height: auto;
`;
