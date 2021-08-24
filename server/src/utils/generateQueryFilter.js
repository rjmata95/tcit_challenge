const { query } = require("express");
const { Op } = require("sequelize");
const generateQueryFilter = (queryObject) => {
  let filter = {};
  if (queryObject) {
    Object.keys(queryObject).forEach((key) => {
      filter = {
        where: {
          ...filter["where"],
          [key]: {
            [Op.like]: `%${queryObject[key]}%`,
          },
        },
      };
    });
  }
  return filter;
};

generateStrictQueryFilter = (queryObject) => {
  let filter = {};
  if (queryObject) {
    Object.keys(queryObject).forEach((key) => {
      filter = {
        where: {
          ...filter["where"],
          [key]: queryObject[key],
        },
      };
    });
  }
  return filter;
};

module.exports = { generateQueryFilter, generateStrictQueryFilter };
