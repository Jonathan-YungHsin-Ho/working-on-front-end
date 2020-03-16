import { gql } from 'apollo-boost';

const GET_INFO = gql`
	query {
		info
	}
`;

const GET_USER = gql`
	query {
		me {
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

export { GET_INFO, GET_USER, GET_ALL_USERS };
