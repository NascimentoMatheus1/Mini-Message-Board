const { Router } = require('express');
const route = Router();

let messages = [
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
    res.render('index', { title: 'Mini Messageboard', messages });
});

route.get('/new', (req, res) => {
    res.render('form', { title: 'new message' });
});

route.post('/new', (req, res) => {
    const { userName, userMessage } = req.body;

    if (userName && userMessage) {
        messages.push({ text: userMessage, user: userName, added: new Date() });
    }

    res.redirect('/');
});

route.use((req, res) => {
    res.render('404', { title: 'Error 404' });
});

module.exports = route;
