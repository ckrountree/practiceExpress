const Router = require('express').Router;
const router = Router();

router
    .get('/', (req, res)  => { // use ".get('/crews'," if no app.use for the api/crews
        res.send([{ name: 'Argh Pirates'}, {name: 'Rum Pirates'}]);
    })

    .get('/:id', (req, res) => {
        res.send( { name: 'Argh Pirates'});
    })

    .post('/', (req, res) => {
        res.send(req.body);
    })

    .delete('/:id', (req, res) => {
        res.send( {name: 'Rum Pirates'});
    });

module.exports = router;