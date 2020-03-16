import { gql } from 'apollo-boost';

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

const CREATE_PROJECT = gql`
	mutation CreateProject(
		$name: String!
		$description: String
		$status: String
		$designURL: String
		$frontEndRepoURL: String
		$backEndRepoURL: String
		$deploymentURL: String
		$private: Boolean!
		$wantFeedback: Boolean
		$wantAssistance: Boolean
		$completed: Boolean
	) {
		createProject(
			name: $name
			description: $description
			status: $status
			designURL: $designURL
			frontEndRepoURL: $frontEndRepoURL
			backEndRepoURL: $backEndRepoURL
			deploymentURL: $deploymentURL
			private: $private
			wantFeedback: $wantFeedback
			wantAssistance: $wantAssistance
			completed: $completed
		) {
			name
			id
			postedBy {
				id
			}
			private
			status
			wantFeedback
			wantAssistance
			completed
		}
	}
`;

export { SIGNUP, LOGIN, CREATE_PROJECT };
