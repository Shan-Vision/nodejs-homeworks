const messages = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbinden',
  404: 'Not found',
  409: 'Conflict',
};
const RequestError = (status, message = messages[status]) => {
	const error = new Error(message);
	console.log(error);
  error.status = status;
  return error;
};

module.exports = RequestError;
