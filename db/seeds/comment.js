const { Comment } = require('../../models');
const categoryComment = [
    {
       text: "",
       userID: 1,
       postID: 1,
    },
    {
        text: "",
        userID: 2,
        postID: 2,
    },
    {
        text: "",
        userID: 3,
        postID: 3,
    },
    {
        text: "",
        userID: 4,
        postID: 4,
    },
];

const seedComment = () => Comment.bulkCreate(categoryComment);

module.exports = seedComment;