const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username, email: user.email, premium: user.premium } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email không tồn tại!" });
        }

        const otp = crypto.randomInt(100000, 999999);
        const otpExpires = Date.now() + 15 * 60 * 1000;

        user.otp = otp;

        user.otpExpires = otpExpires;
        await user.save();
        console.log("Mã OTP được lưu:", user.otp);

        await transporter.sendMail({
            to: email,
            subject: "Password Reset OTP",
            text: `Mã OTP của bạn là ${otp}. Mã có hiệu lực trong 15 phút.`,
        });

        res.json({ message: "Mã OTP đã được gửi đến email!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Không tìm thấy người dùng với email này." });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: "Mật khẩu đã được đặt lại thành công!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const upPremium = async (req, res) => {
    try {
        const userId = req.user.id;
        await User.findByIdAndUpdate(userId, { premium: true });
        res.json({ message: "Account upgraded to premium!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
    upPremium
};
