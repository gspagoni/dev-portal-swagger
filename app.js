const os = require("os")
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
require('dotenv').config()

const hostName = os.hostname()
console.log(hostName)
const PORT = process.env.PORT || 3100

const app = express()
app.use(express.static("swagger-ui"));

var options = {
    explorer: true,
    swaggerOptions: {
      urls: [
        {
          url: `http://localhost:${PORT}/idm.json`,
          name: 'IDM'
        },
        {
          url: `http://localhost:${PORT}/mingle.json`,
          name: 'Mingle'
        }
      ]
    }
  }
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

  app.post('/api-docs/oauth2-redirect.html',(req,res)=>{
    // this is a fake url used by swagger authorization
  })

  app.get('/', (req,res)=>{
    res.send('<h1>Welcome dev portal test swagger documentation</h1>')
  })


app.listen(PORT,()=> console.log(`server started at http://localhost:${PORT}`))