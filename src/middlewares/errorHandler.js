const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({ err });
};

module.exports = {
  errorHandler,
};
