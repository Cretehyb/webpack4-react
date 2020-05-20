'use strict'

let express = require('express')
let fs = require('fs')
let app = express()
let path = require('path')
let port = 7070

app.use(function(req, res, next) {
  fs.readFile(
    path.resolve(__dirname, '../webpack4-react/dist/index.html'),
    (err, data) => {
      if (err) {
        console.log(err)

        res.send('后台错误')
      } else {
        res.writeHead(200, {
          'Content-type': 'text/html',

          Connection: 'keep-alive'
        })

        res.end(data)
      }
    }
  )
})

app.listen(port, () => {
  console.log('Server listening on:', port)
})
