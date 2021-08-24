const success = (res, message, status) => {
  res.status(status || 200).send({
    error: "",
    response: message,
  });
};

const error = (res, message, status, details = "No details provided") => {
  console.error(`[Internal Error] : ${details}`);
  res.status(status || 500).send({
    error: message || "Ran into a problem",
    response: "",
  });
};

module.exports = {
  success,
  error,
};
