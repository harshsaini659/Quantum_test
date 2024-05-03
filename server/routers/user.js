const express = require('express');
const User = require('../models/user');
const Auth = require('../middleware/auth');
const router = new express.Router();

//for registration
router.post('/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 7*24*60*60*1000),
            httpOnly: true
        })
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/signin', async (req, res) => {
    try {
      const user = await User.findByCredentials(req.body.email,req.body.password)
      const token = await user.generateAuthToken()
      res.cookie('jwt', token, {
        expires: new Date(Date.now() + 7*24*60*60*1000),
        httpOnly: true
      })
      res.status(200).send({ user, token})
    } catch (error) {
      res.status(400).send(error)
     }
})

router.get('/logout', function logout(req, res) {
    try {
        res.clearCookie("jwt");
        res.status(200).json({
            message: "Logged out successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while logging out",
            error: error.toString()
        });
    }
})

module.exports = router