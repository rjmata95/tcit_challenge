const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");
const {
  validatePostSchema,
  registryExists,
} = require("../middlewares/postValidation");

router.get("/", controller.getPosts);
router.get("/:id", registryExists, controller.getPost);
router.post("/", controller.createPost);
router.delete("/:id", registryExists, controller.deletePost);

module.exports = router;
