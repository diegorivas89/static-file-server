const express = require('express')
const app = express()
var cors = require('cors')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

(process.env.CORS === 'true') && app.use(cors())

app.use(express.static(process.env.STATIC_ROOT))

app.listen(port, host, () => {
  console.log('Listening on port: ' + port);
})
