const { Router } = require('express');
const route = Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

route.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});

route.get('/new', (req, res) => {
    res.send('new page');
});

module.exports = route;
