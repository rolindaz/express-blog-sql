function notFound(req, res, next) {
	console.log("We couldn't find what you requested");
	res.status(404).json({
		error: 'Not Found',
		message: 'Pagina non trovata'
	});
};

module.exports = notFound;
