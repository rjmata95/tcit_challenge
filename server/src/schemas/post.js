const Yup = require("yup");

const postSchema = Yup.object()
  .noUnknown()
  .shape({
    name: Yup.string().max(50).required("name is required").trim(),
    description: Yup.string()
      .max(1000)
      .required("description is required")
      .trim(),
  });

module.exports = {
  postSchema,
};
