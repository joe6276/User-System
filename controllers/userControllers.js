const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const _ = require('lodash');
require('dotenv').config();
const User = require("../models/User");
const db = require("../config/db")

exports.getUsers = async (req, res, next) => {
    try {
        const [user, _] = await User.findAll();
        res.status(200).json({ user })

    } catch (error) {

    }
}



exports.registerUser = async (req, res, next) => {
    try {
        let { firstname, secondname, email, password } = req.body;

        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(password, salt)
        let user = new User(firstname, secondname, email, hashpass)
        user = await user.save()


        const token = await jwt.sign({ user }, process.env.DB_SECRET, { expiresIn: 360000 })

        res.status(201).json({ token });

    } catch (error) {

        res.status(500).json({ Message: "User already Exist use a different Email please" });

    }
}



exports.searchUser = async (req, res) => {
    try {
        let userid = req.params.id;
        let [user, _] = await User.findById(userid)
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ Message: "Recheck your id if it exists" });

    }

}

exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        let result = await User.userLogin(email);
        user = result[0][0];

        if (!user) return res.status(400).json({ message: 'User does not exist' });

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

        const response = _.pick(user, [
            "id",
            'firstname',
            'secondname',
            'email'
        ]
        )

        const token = await jwt.sign(response, process.env.DB_SECRET)
        res.send({ user: response, token })


    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteUser = async (req, res, next) => {

    try {
        let userid = req.params.id;
        let [user, _] = await User.deleteUser(userid)
        res.status(201).json({ message: "User Deleted" })

    } catch (error) {
        res.status(500).json({ Message: "Recheck your id if it exists" });

    }

}

exports.updateUser = async(req,res)=>{
    try {

        let updateid = req.params.id;
        
        let { firstname, secondname, email, password } = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(password, salt)
        await User.updateUser(updateid,firstname,secondname,email,hashpass)
        res.status(201).json({ message: "User updated " })

    } catch (error) {

        res.status(201).json({ message: error.message })
        
    }
}

