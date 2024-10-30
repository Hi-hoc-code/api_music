const jwt = require('jsonwebtoken');

// Middleware để xác thực người dùng
const auth = (req, res, next) => {
    // Lấy token từ header của request
    const token = req.header('Authorization');
    // Nếu không có token, từ chối truy cập
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        // Xác minh token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Gán thông tin người dùng đã xác thực vào req.user
        req.user = verified;
        // Cho phép truy cập vào route tiếp theo
        next();
    } catch (err) {
        // Nếu token không hợp lệ
        res.status(400).json({ message: 'Invalid token.' });
    }
};
module.exports = auth;
