function notFound(req, res, next) {
	console.log("We couldn't find what you requested");
	return res.status(404).json({
		error: 'Not Found',
		message: 'Pagina non trovata'
	});
};

module.exports = notFound;
