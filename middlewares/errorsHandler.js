function errorsHandler(err, req, res, next) {
	console.log('Something is wrong on the server side');
	return res.status(500).json({
		error: true,
		message: err.message
	});
};

module.exports = errorsHandler;
