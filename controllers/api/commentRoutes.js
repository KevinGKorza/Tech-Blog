const router = require('express').Router();
const {Comment, User} = require('../../models');
//const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newcomment = await Comment.create({
            ...req.body,
        });

        res.status(200).json(newcomment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
