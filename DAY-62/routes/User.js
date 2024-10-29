const express = require("express");
const{check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router()

const User = require("../models/user");
const auth = require("../middleware/auth");

router. post(
    "/signup",
    [
        check("username", "please Enter a Valid username").not().isEmpty(),
        check("email", "please Enter a Valid Email").isEmpty(),
        check("password", "please Enter a Valid Password").isLength({
            min:6,
        }),
    ],
    async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
            });
        }
        const {username,email,password} = req.body;

        try{
            let user = await User.findOne({
                email,
            });
            if(user){
                return res.status(200).json({
                    msg: "User already Exists",
                });
            }

            user = new User({
                username,
                email,
                password,
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user:{
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                "randomString",
                {
                    expresIn : 10000,
                },
                (err, token) =>{
                    if(err) throw err;
                    res.status(200).json({
                        token,
                    });
                }
            );
        } catch(err){
            console.error(err.message);
            res.status(500).send("Error in saying!");
        }
    }
);

router. post(
    "/login",
    [
        check("email", "please Enter a Valid Email").isEmpty(),
        check("password", "please Enter a Valid Password").isLength({
            min:6,
        }),
    ],
    async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
            });
        }
        const {email,password} = req.body;

        try{
            let user = await User.findOne({
                email,
            });
            if(!user){
                return res.status(200).json({
                    msg: "User already Not Exists",
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({
                    msg: "Incorrect Password!",
                });
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                "randomString",
                {
                    expresIn : 3600,
                },
                (err, token) =>{
                    if(err) throw err;
                    res.status(200).json({
                        token,
                    });
                }
            );
        } catch(err){
            console.error(err.message);
            res.status(500).send("Error in saying!");
        }
    }
);