const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    res.send('hello world');
});

route.get('/new', (req, res) => {
    res.send('new page');
});

module.exports = route;
