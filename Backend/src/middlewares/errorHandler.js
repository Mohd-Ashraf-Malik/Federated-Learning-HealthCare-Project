const notFound = (_req, res) => {
  res.status(404).json({ message: "Route not found" });
};

const errorHandler = (err, _req, res, _next) => {
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid resource id" });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: Object.values(err.errors).map((error) => error.message),
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate value error",
      field: Object.keys(err.keyPattern || {})[0] || null,
    });
  }

  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error",
  });
};

export { errorHandler, notFound };
