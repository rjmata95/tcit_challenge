const post = require("./post");

module.exports = (server) => {
  try {
    server.use("/post", post);
  } catch (error) {
    console.error(`Error in routing ${error}`);
  }
};
