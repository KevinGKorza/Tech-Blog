const user = require('./user');
const post = require('./post');
const comment = require('./comment');

user.hasMany(post, 
    {
        foreignKey: 'userId'

});

user.hasMany(comment, 
    {
        foreignKey: 'userId'

});

post.belongsTo(user, 
    {
        foreignKey: 'userId'

});



module.exports = { user, post, comment };