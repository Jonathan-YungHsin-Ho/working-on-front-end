import { gql } from 'apollo-boost';

const SIGNUP = gql`
	mutation Signup($email: String!, $username: String!, $password: String!) {
		signup(email: $email, username: $username, password: $password) {
			token
			user {
				id
				username
				projects {
					id
				}
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
		$techStack: String
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
			techStack: $techStack
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
			description
			techStack
			status
			designURL
			frontEndRepoURL
			backEndRepoURL
			deploymentURL
			wantFeedback
			wantAssistance
			completed
			archived
		}
	}
`;

const UPDATE_PROJECT = gql`
	mutation UpdateProject(
		$id: String!
		$name: String
		$description: String
		$techStack: String
		$status: String
		$designURL: String
		$frontEndRepoURL: String
		$backEndRepoURL: String
		$deploymentURL: String
		$private: Boolean
		$wantFeedback: Boolean
		$wantAssistance: Boolean
		$completed: Boolean
		$archived: Boolean
	) {
		updateProject(
			id: $id
			name: $name
			description: $description
			techStack: $techStack
			status: $status
			designURL: $designURL
			frontEndRepoURL: $frontEndRepoURL
			backEndRepoURL: $backEndRepoURL
			deploymentURL: $deploymentURL
			private: $private
			wantFeedback: $wantFeedback
			wantAssistance: $wantAssistance
			completed: $completed
			archived: $archived
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

const UPDATE_USER = gql`
	mutation UpdateUser(
		$username: String
		$password: String
		$name: String
		$email: String
		$bio: String
		$techStack: String
		$avatarURL: String
		$githubURL: String
		$linkedinURL: String
		$portfolioURL: String
		$twitterURL: String
	) {
		updateUser(
			username: $username
			password: $password
			name: $name
			email: $email
			bio: $bio
			techStack: $techStack
			avatarURL: $avatarURL
			githubURL: $githubURL
			linkedinURL: $linkedinURL
			portfolioURL: $portfolioURL
			twitterURL: $twitterURL
		) {
			id
			username
			name
			email
			bio
			techStack
			avatarURL
			githubURL
			linkedinURL
			portfolioURL
			twitterURL
		}
	}
`;

const UPDATE_IMG = gql`
	mutation UpdateImage($avatarURL: String) {
		updateUser(avatarURL: $avatarURL) {
			avatarURL
		}
	}
`;

export {
	SIGNUP,
	LOGIN,
	CREATE_PROJECT,
	UPDATE_PROJECT,
	UPDATE_USER,
	UPDATE_IMG,
};
