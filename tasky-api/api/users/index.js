import express from 'express';
import User from './userModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    if(req.query.action === 'register') {
        await User(req.body).save();
        res.status(201).json({
            code: 201,
            msg: 'Successfully created new user',
        });
    } else {
        const user = await User.findOne(req.body);
        if(!user) {
            return res.status(401).json({code: 401, msg: 'Authentication failed'});
        } else {
            return res.status(200).json({code: 200, msg: "Authentication successful", token: 'TEMPORARY_TOKEN'});
        }
    }
});

router.put('/:id', async (req, res) => {
    if(req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if(result.matchedCount) {
        res.status(200).json({code: 200, msg: 'User updated successfully'});
    } else {
        res.status(404).json({code: 404, msg: 'Unable to update user'});
    }
});

export default router;