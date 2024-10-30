const express = require('express');
const {
    register,
    login,
    forgotPassword,
    resetPassword,
    upPremium
} = require('../controllers/UserControllers');
const auth = require('../middlewares/auth'); 
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/upgrade-premium', upPremium);

module.exports = router;