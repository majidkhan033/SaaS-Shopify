import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";

const router = express.Router();

//Register a new user
router.post("/signUp", async(req, res) => {
    
    try {

        const { firstname, lastname, email, password } = req.body;

        //Basic validations
        if (!firstname || !lastname || !email || !password ) {
            return res.status(400).json({error: "some fields are missing"});
        } 

        //check duplication of email
        let user = await UserModel.findOne({ email });
        if (user)
            return res.status(400).json({msg: "User Already Exists"});

        user = new UserModel({ firstname, lastname, email, password});

        // const salt = await brcypt.genSalt(10);
        // user.password = await brcypt.hash(password, salt);

        //hashing the password
        user.password = await bcrypt.hash(req.body.password, 10);

        await user.save();
        res.status(201).json({ msg: "User registered successfully" });
        // console.log(user);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error : "Internal Server Error"});
    }
});

//login new user
router.post("/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user)
            return res.status(400).json({msg: "Invalid Credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
            return res.status(400).json({msg: "Invalid Credentials"});

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '1d'});

        res.json({ token })
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

export default router;