require('dotenv').config()
const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      db = mongoose.connection,
      dbURI = ``
      dbLOCAL =`mongodb://localhost:27017/blog-test`

      app = express(),
      port = process.env.PORT || 3000

mongoose
    .connect(dbLOCAL, {useNewUrlParser:true})
db
    .on('error', console.error.bind(console, 'database connection error:'))
    .once('open', function() {
        console.log('database connected')
    });

const loginRouter = require('./routes/login')

app
    .use(express.urlencoded({extended: false}))
    .use(express.json())
    .use(cors())

    .use('/', loginRouter)


    .listen(port, () => {
        console.log(`Listening on port ${port}`);   
    })

module.exports = app