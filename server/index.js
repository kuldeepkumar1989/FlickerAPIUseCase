var express = require('express');
const app = express();
const port = 9877;
const fs = require('fs');
const path = require('path');
const cors = require('cors');

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.use(cors());

const distDir = path.resolve(__dirname, '../');
app.use(express.static(distDir));


app.listen(port, function () {
    console.log('Express server listening on port ' + port)
  });