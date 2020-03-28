import React, { useState } from 'react';
import { StyledForm, StyledInput, StyledButton } from '../../styled-components';

export default function FeedbackForm() {
	const initialFeedback = { name: '', email: '', message: '' };

	const [feedback, setFeedback] = useState(initialFeedback);

	const [response, setResponse] = useState('');
	const [error, setError] = useState('');

	const handleChange = e =>
		setFeedback({ ...feedback, [e.target.name]: e.target.value });

	const sendFeedback = (
		templateId,
		fromName,
		fromEmail,
		message,
		toEmail,
		user,
	) => {
		window.emailjs
			.send(
				'default_service',
				templateId,
				{ fromName, fromEmail, message, toEmail },
				user,
			)
			.then(res => {
				// console.log(res);
				setResponse('Your message was successfully sent!');
				setFeedback(initialFeedback);
			})
			.catch(err => {
				console.log('Failed to send message. Error: ', err);
				setError('Sorry, message failed to send');
			});
	};

	const handleSubmit = e => {
		e.preventDefault();

		sendFeedback(
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			feedback.name,
			feedback.email,
			feedback.message,
			process.env.REACT_APP_EMAILJS_RECEIVER,
			process.env.REACT_APP_EMAILJS_USERID,
		);
	};

	return (
		<StyledForm>
			<div>
				<p>
					Thanks for checking out this app! Please let me know below if you've
					encountered any bugs!
				</p>
				<form onSubmit={handleSubmit}>
					<StyledInput
						type='text'
						name='name'
						value={feedback.name}
						placeholder='Name'
						onChange={handleChange}
					/>
					<StyledInput
						type='text'
						name='email'
						value={feedback.email}
						placeholder='Email'
						onChange={handleChange}
					/>
					<textarea
						name='message'
						rows='5'
						value={feedback.message}
						placeholder='Feedback'
						onChange={handleChange}
					/>
					{feedback.name !== '' &&
					feedback.email !== '' &&
					feedback.message !== '' ? (
						<StyledButton>Share Feedback</StyledButton>
					) : (
						<StyledButton disabled={true}>Share Feedback</StyledButton>
					)}
				</form>
				<div className='message-response'>
					<span style={{ color: 'green' }}>{response}</span>
					<span style={{ color: 'red' }}>{error}</span>
				</div>
			</div>
		</StyledForm>
	);
}
