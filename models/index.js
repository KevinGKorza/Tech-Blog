const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, 
    {
        foreignKey: 'userId',
        onDelete: 'cascade',
        hooks: true,

});

User.hasMany(Comment, 
    {
        foreignKey: 'userId',
        onDelete: 'cascade',
        hooks: true,

});

Post.belongsTo(User, 
    {
        foreignKey: 'userId',
        onDelete: 'cascade',
        hooks: true,

});



module.exports = { User, Post, Comment };