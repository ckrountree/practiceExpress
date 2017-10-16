const http = require('http');
const app = require('./routes/app');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('server running on', server.address().port);
});

// in Postman, add localhost:3000 to GET bar, then hit 'send'
// to see app correctly, path in Postman should match path in app.js