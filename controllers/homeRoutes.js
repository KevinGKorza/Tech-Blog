const router = require('express').Router();
const {Post, User} = require('../models');
router.get('/', async (req,res) => {
    try{
        const postdata = await Post.findAll({
            include:[User]
        })
        const posts = postdata 
        res.json(posts)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;