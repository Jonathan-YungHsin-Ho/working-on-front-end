import { gql } from 'apollo-boost';

const GET_INFO = gql`
	query {
		info
	}
`;

const GET_USER = gql`
	query {
		me {
			id
			username
			avatarURL
			bio
			name
			email
			techStack
			currentlyStudying
			githubURL
			linkedinURL
			portfolioURL
			twitterURL
			projects {
				id
				name
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
				lastUpdated
			}
			followers {
				id
			}
			following {
				id
			}
		}
	}
`;

const GET_ALL_USERS = gql`
	query {
		allUsers {
			username
			avatarURL
			id
			projects {
				name
				id
				private
				status
				wantFeedback
				wantAssistance
				completed
				lastUpdated
				# likes
				# comments
			}
		}
	}
`;

const GET_PROJ_BY_ID = gql`
	query ProjectByID($id: String!) {
		projectByID(id: $id) {
			id
			postedBy {
				id
				name
				avatarURL
			}
			name
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
			lastUpdated
		}
	}
`;

const GET_USER_BY_ID = gql`
	query UserByID($id: String!) {
		userByID(id: $id) {
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
			currentlyStudying
			projects {
				name
				id
				private
				status
				wantFeedback
				wantAssistance
				completed
				lastUpdated
			}
		}
	}
`;

const GET_IMG = gql`
	query {
		me {
			id
			avatarURL
		}
	}
`;

export {
	GET_INFO,
	GET_USER,
	GET_ALL_USERS,
	GET_PROJ_BY_ID,
	GET_USER_BY_ID,
	GET_IMG,
};
