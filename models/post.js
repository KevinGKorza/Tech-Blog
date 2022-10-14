const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    text: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 
        {
            model: 'User',
            key: 'id'

        }

    },
    postId: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'User',
            key: 'id'
        }

    },

   sequelize,
   timestamps: false,
   freezeTableName: true,
   underscored: true,
   modelName: 'Post',
});

model.exports = Post;
