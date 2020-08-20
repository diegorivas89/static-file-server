const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(process.env.STATIC_ROOT))

app.listen(port, () => {
  console.log('Listening on port: ' + port);
})