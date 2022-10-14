const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init({
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
            model: 'user',
            key: 'id'

        }

    },
    postId: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'user',
            key: 'id'
        }

    },

   sequelize,
   timestamps: false,
   freezeTableName: true,
   underscored: true,
   modelName: 'post',
});

model.exports = post;
