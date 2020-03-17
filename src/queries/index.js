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
			projects {
				id
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
			id
			projects {
				name
				id
				private
				status
				wantFeedback
				wantAssistance
				completed
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
		}
	}
`;

export { GET_INFO, GET_USER, GET_ALL_USERS, GET_PROJ_BY_ID };
