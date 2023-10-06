const notFound = (req, res, next) => {
  const err = new Error("Not found");
  res.status(404);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack:
      process.env.NODE_ENV === "production"
        ? "Something went wrong!"
        : err.stack,
  });
};

export { notFound, errorHandler };
