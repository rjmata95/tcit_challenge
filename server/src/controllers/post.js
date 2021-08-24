const Post = require("../models/post");
const { generateQueryFilter } = require("../utils/generateQueryFilter");
const response = require("../response");
const { errorResponse } = require("../utils/responses");
const getPosts = async ({ query }, res) => {
  // const { query } = req;
  const filter = generateQueryFilter(query);
  try {
    const result = await Post.findAll(filter);
    response.success(res, result, 200);
  } catch (error) {
    response.error(res, errorResponse, 500, error);
  }
};

const getPost = async ({ params: { id } }, res) => {
  // const {
  //   params: { id },
  // } = req;
  try {
    const result = await Post.findByPk(id);
    response.success(res, result, 200);
  } catch (error) {
    response.error(res, errorResponse, 500, error);
  }
};

const createPost = async ({ body }, res) => {
  // const { body } = req;
  try {
    // const instance = Post.build(body);
    // const result = await instance.save();
    const result = await Post.create(body);
    response.success(res, result, 201);
  } catch (error) {
    response.error(res, errorResponse, 500, error);
  }
};

const deletePost = async ({ params: { id } }, res) => {
  // const {
  //   params: { id },
  // } = req;
  try {
    const result = await Post.destroy({
      where: {
        id,
      },
    });
    if (!result) throw { response: "No registry found", statusCode: 404 };
    response.success(res, result);
  } catch (error) {
    response.error(res, error.response, error.statusCode, error);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
};
