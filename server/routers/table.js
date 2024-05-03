const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');
const fs = require('fs');
const path = require('path');

router.get('/table', Auth, async (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../table.json'), 'utf8');
        const jsonData = JSON.parse(data);
        res.status(200).send(jsonData);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;