const { User } = require('../models');
const FindUser = async (req, res) => {
    try {
        const userDetail = await User.findAll();
        res.send(userDetail);
        ;
        
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    FindUser
}