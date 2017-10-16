const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const publicDir = './public';
app.use(express.static(publicDir));  //always calling express data
app.use(bodyParser.json ());  //if you don't use this, you won't get a body

const crews = require('./crews');
app.use('/api/crews', crews); // if we use this, then we don't need to fill in on crews.js


// app.get('/crews', (req, res) => {
//     res.send(`GET /crews ${JSON.stringify(req.query)}`);   //path to match
// });

app.get('/crews/:one/foo/:two', (req, res) => {   //path to match
    res.send({
        params: req.params,
        query: req.query
    });
});

// app.post('/bar', (req, res) => {   //path to match
//     res.end('POST /bar');
// });

app.post('/bar', (req, res) => {   //path to match
    res.send(req.body);
});

app.delete('/bar', (req, res) => {
    res.end('DELETE /bar');
});

module.exports = app;