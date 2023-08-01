const express = require("express");
const swaggerUi = require("swagger-ui-express");
require('dotenv').config()

const PORT = process.env.PORT || 3100

const app = express()
app.use(express.static("swagger-ui"));

var options = {
    explorer: true,
    swaggerOptions: {
      urls: [
        {
          url: `/idm.json`,
          name: 'IDM'
        },
        {
          url: `/mingle.json`,
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
    res.send('<h1>Welcome dev portal test swagger documentation</h1><br><a href="/api-docs">Click me</a>')
  })


app.listen(PORT,()=> console.log(`server started at http://localhost:${PORT}`))