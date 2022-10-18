const router = require('express').Router();
const {Post, User} = require('../models');

router.get('/', async (req,res) => {
    try{
        const postdata = await Post.findAll({
            include:[User]
        });
        const User = postdata.map(() => posts.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
        const posts = postdata 
        res.json(posts)
    } catch(err) {
        res.status(500).json(err)
    }

});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });



module.exports = router;