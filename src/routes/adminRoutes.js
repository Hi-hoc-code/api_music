const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const authMiddleware = require('../middlewares/auth');

router.post('/login', AdminController.login);
router.get('/users', authMiddleware, AdminController.getAllUsers);

module.exports = router;
