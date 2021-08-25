const response = require("../response");
const postSchema = require("../schemas/post");
const Post = require("../models/post");
const { generateStrictQueryFilter } = require("../utils/generateQueryFilter");
const { notFoundResponse } = require("../utils/responses");

const validatePostSchema = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const validatedBody = await postSchema.validate(body);
    req.body = validatedBody;
    next();
  } catch (error) {
    response.error(res, error.errors, 400, "Error in validation");
  }
};
const validatePostId = async ({ params: { id } }, res, next) => {
  try {
    if (parseInt(id)) next();
    else throw "Enter valid id";
  } catch (error) {
    response.error(res, error);
  }
};

const registryExists = async ({ params: { id }, query = {} }, res, next) => {
  try {
    if (id) {
      Object.assign(query, { id });
    }
    const filter = generateStrictQueryFilter(query);
    const result = await Post.findAll(filter);
    if (result.length === 0) throw notFoundResponse;
    next();
  } catch (error) {
    response.error(res, notFoundResponse, 404);
  }
};

module.exports = {
  validatePostSchema,
  validatePostId,
  registryExists,
};
