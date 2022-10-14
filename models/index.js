const user = require('./user');
const post = require('./post');
const comment = require('./comment');

user.hasMany(post, 
    {
        foreignKey: 'userID'

});

user.hasMany(comment, 
    {
        foreignKey: 'userID'

});

post.belongsTo(user, 
    {
        foreignKey: 'userID'

});

module.exports = { user, post, comment };