const Sequelize = require("sequelize");
const db = require("./index");

const Post = db.define(
  "post",
  {
    // post_id: {
    //   type: Sequelize.INTEGER(11),
    //   autoIncrement: true,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Post;
