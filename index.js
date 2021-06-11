const express = require('express');
var compression = require('compression')

const app = express();
app.use(compression())

var routing = require('./Router/routing');

const port = process.env.PORT || 4200;

app.use('/',routing);

app.listen(port,() => {
    console.log(`Port list${port}`)
})
