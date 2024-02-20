function errorHandler(err, req, res, next) {
  console.error(err);
  const statusCode = res.statusCode || 500;
  res.json({ message: err.message, stack: err.stack });
}

module.exports = errorHandler;
