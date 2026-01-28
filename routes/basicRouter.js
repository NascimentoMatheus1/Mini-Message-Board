const { Router } = require('express');
const route = Router();

let messages = [
    {
        id: 0,
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
        detailsLink: '/messages/0',
    },
    {
        id: 1,
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
        detailsLink: '/messages/1',
    },
];

route.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages });
});
route.get('/messages/:id', (req, res) => {
    const { id } = req.params;

    if (!messages[id]) {
        res.render('404', { title: 'Error 404' });
        return;
    }

    res.render('messageDetail', { title: 'Details', message: messages[id] });
});

route.get('/new', (req, res) => {
    res.render('form', { title: 'new message' });
});

route.post('/new', (req, res) => {
    const { userName, userMessage } = req.body;

    if (userName && userMessage) {
        let newId = messages[messages.length - 1].id + 1;
        messages.push({
            id: newId,
            text: userMessage,
            user: userName,
            added: new Date(),
            detailsLink: `/messages/${newId}`,
        });
    }

    res.redirect('/');
});

route.use((req, res) => {
    res.render('404', { title: 'Error 404' });
});

module.exports = route;
