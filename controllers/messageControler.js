const { body, validationResult, matchedData } = require('express-validator');

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

exports.getAllMessages = (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages });
};

exports.getMessageById = (req, res) => {
    const { id } = req.params;

    if (!messages[id]) {
        res.render('404', { title: 'Error 404' });
        return;
    }

    res.render('messageDetail', { title: 'Details', message: messages[id] });
};

exports.getFormPage = (req, res) => {
    res.render('form', { title: 'new message' });
};

const validadeNewMessage = [
    body('userName')
        .trim()
        .isAlpha()
        .withMessage('Name must only contain letters.')
        .isLength({ min: 2, max: 20 })
        .withMessage('Name must be between 2 and 20 characters'),
    body('userMessage')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Message is too short (min 1 chars)')
        .isLength({ max: 300 })
        .withMessage('Message is too long (max 300 chars)'),
];

exports.messageCreatePost = [
    validadeNewMessage,
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('form', {
                title: 'Bad Request',
                errors: errors.array(),
            });
        }

        const { userMessage, userName } = matchedData(req);
        let newId = messages[messages.length - 1].id + 1;
        messages.push({
            id: newId,
            text: userMessage,
            user: userName,
            added: new Date(),
            detailsLink: `/messages/${newId}`,
        });
        res.redirect('/');
    },
];

exports.getErrorPage = (req, res) => {
    res.render('404', { title: 'Error 404' });
};
