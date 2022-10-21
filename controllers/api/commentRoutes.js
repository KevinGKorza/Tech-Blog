const router = require('express').Router();
const {comment, User} = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
    try{
       const postdata = await Post.findAll({
            include:[User]
        });
        const comment = commentdata.map(() => comment.get({ plain: true }));

        res.render('homepage', {
            comment,
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
