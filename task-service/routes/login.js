const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ accessToken: token });
  } else {
    res.status(401).send("Identifiants incorrects");
  }
});

module.exports = router;