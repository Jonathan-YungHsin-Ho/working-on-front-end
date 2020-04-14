export const parseDate = (dateString) => {
	const dateObj = new Date(dateString);

	const date = dateObj.getDate();
	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();

	return `${month}-${date}-${year}`;
};
