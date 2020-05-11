const User = require('../models/user')

const RBA = async (req, res, next) => {
    console.log(req)
    // try {
    //     const user = await User.findOne({_id: decoded._id})

    //     if (!user) {
    //         throw new Error()
    //     }

    //     req.user = user
    //     console.log(user.role)
    //     next()
    // } catch (e) {
    //     res.status(401).send({ error: 'Please authenticate.' })
    // }
    next()
}

module.exports = RBA