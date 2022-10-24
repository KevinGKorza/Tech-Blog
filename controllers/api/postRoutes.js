const router = require('express').Router();
const {Post} = require('../../models');



router.get('/', async (req,res) => {
     try{
        const postdata = await Post.findAll({
             
         });
         const posts = postdata.map((post) => post.get({ plain: true }));
console.log(posts);
         res.status(200).json( 
             posts,
         );

     } catch(err) {
         res.status(500).json(err)
     }

     

 });

module.exports = router;