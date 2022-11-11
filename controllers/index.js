const { User } = require('../models');
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send('User registerd sucessfully');
        ;
        
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    createUser
}