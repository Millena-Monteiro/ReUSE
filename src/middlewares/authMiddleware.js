// Para uma futura atualização

// import jwt from 'jsonwebtoken';

// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(403).json({ message: 'Acesso negado: token não fornecido' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(403).json({ message: 'Token inválido' });
//   }

//   jwt.verify(token, 'secreta', (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Token inválido ou expirado' });
//     }

//     req.userId = decoded.userId;
//     next();
//   });
// };
