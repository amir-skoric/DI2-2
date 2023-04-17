const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const APIUser = require("../database/schemas/APIUser");

module.exports = {

    postUser: async function (req, res, next) {
        let hash = await bcrypt.hash(req.body.password, 10);

        try {
            let user = new APIUser({    // create object in schema-format
                email: req.body.email,
                password: hash
            });
            await APIUser.create(user);
            next();
        } catch (err) {
            res.status(400).json(err.message)
        }
    }
};