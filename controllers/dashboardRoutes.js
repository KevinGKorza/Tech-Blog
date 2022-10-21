const router = require('express').Router();
const {Post, User, Comment} = require('../models');
//const withAuth = require('../../utils/auth');


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

     router.get('/dashboard', (req, res) => {
         if (req.session.logged_in) {
           res.redirect('/');
           return;
         }
      
         res.render('dashboard');
       });

 });

module.exports = router;