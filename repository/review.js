const { Client } = require("../model/client");
const { Project } = require("../model/project");
const { Review } = require("../model/review");
const { User } = require("../model/user");
const Sequelize = require("sequelize");
const addReviews = (projectId, userId, description, ratings) => {
  return new Promise((resolve, reject) => {
    Review.create({ projectId, userId, description, ratings })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getReviews = (projectid) => {
  return new Promise((resolve, reject) => {
    // Review.findAll(
    //   {
    //     where: {
    //       projectId: projectid,
    //     },
    //     include: [
    //       {
    //         model: User,
    //         attributes: ["username"],
    //         where: {
    //           id: Sequelize.col('Review.userId') // Assuming 'userId' is the foreign key in the Review table
    //         },
    //       },
    //     ],
    //   }
    // )
    Review.findAll(
      {attributes:['description','ratings'],
            where: {
              projectId: projectid,
            },
      include: {
        model: User,
        as:'user',
        attributes: ["username"],
      },
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { addReviews, getReviews };
