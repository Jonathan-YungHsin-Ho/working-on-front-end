import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import axios from 'axios';
import { Avatar } from '../home';
import styled from 'styled-components';
import { GET_IMG } from '../../queries';
import { UPDATE_IMG } from '../../mutations';

export default function UpdateAvatar() {
	const [picture, setPicture] = useState(null);

	const { data } = useQuery(GET_IMG);

	const [updateImage] = useMutation(UPDATE_IMG, {
		update(
			cache,
			{
				data: {
					updateUser: { avatarURL },
				},
			},
		) {
			const { me } = cache.readQuery({ query: GET_IMG });

			cache.writeQuery({ query: GET_IMG, data: { me: { ...me, avatarURL } } });
		},
	});

	useEffect(() => {
		if (picture) {
			const formData = new FormData();
			formData.append('file', picture);
			formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

			axios
				.post(
					`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
					formData,
				)
				.then(res => {
					console.log(res);
					updateImage({ variables: { avatarURL: res.data.secure_url } });
				})
				.catch(err => {
					console.log(err);
				});
		}
	}, [picture]);

	const handleChange = e => setPicture(e.target.files[0]);

	return (
		<StyledUpdate>
			<input
				className='image-input'
				type='file'
				id='imageInput'
				onChange={handleChange}
			/>
			<label htmlFor='imageInput'>
				<Avatar
					width='6'
					height='6'
					avatarURL={data?.me.avatarURL}
					className='avatar'
				/>
			</label>
		</StyledUpdate>
	);
}

const StyledUpdate = styled.div`
	margin-bottom: 1rem;

	.image-input {
		opacity: 0;
		position: absolute;
		pointer-events: none;
	}

	.avatar {
		cursor: pointer;
	}
`;
