// importation de express pour utiliser la fonction router()
const express = require('express');
const router = express.Router();
// importation du controllers/user.js
const userCtrl = require('../controllers/user');

// les routes signup et login
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login)

module.exports = router;