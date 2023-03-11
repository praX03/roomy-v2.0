const express = require("express");
const usercontrols=require('../controllers/usercontrols');
const router = express.Router();
router.post('/register', usercontrols.register);
router.get('/login',usercontrols.login);
router.get('/dashboard/:id',usercontrols.dashboard);
module.exports = router;
