const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid }

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: '8h'
      },
      (err, token) => {
        if (err) {
          console.error(err)
          reject(new Error('No se pudo generar el token'))
        } else {
          resolve(token)
        }
      }
    )
  })
}

module.exports = {
  generarJWT
}
