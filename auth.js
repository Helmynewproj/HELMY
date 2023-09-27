const jwt = require('jsonwebtoken');
const secretKey = 'secret_key_for_jwt';

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ message: 'Token tidak tersedia' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token tidak valid' });
    }

    req.user = decoded;
    next();
  });
}

module.exports = { verifyToken };
