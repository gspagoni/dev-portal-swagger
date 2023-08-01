const os = require("os")
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 3100

const app = express()
app.use(express.static("swagger-ui"));

//const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";


var options = {
    explorer: true,
    swaggerOptions: {
      urls: [
        {
          url: `https://devportal-so79.onrender.com/idm.json`,
          name: 'IDM'
        },
        {
          url: `https://devportal-so79.onrender.com/mingle.json`,
          name: 'Mingle'
        }
      ]//,
      //customCssUrl: CSS_URL
    }
  }
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

  app.post('/api-docs/oauth2-redirect.html',(req,res)=>{
    // this is a fake url used by swagger authorization
  })

  app.get('/', (req,res)=>{
    res.send('<h1>Welcome dev portal test swagger documentation</h1><br><a href="/api-docs">Click me</a>')
  })


app.listen(PORT,()=> console.log(`server started at http://localhost:${PORT}`))