const db = require('../db/queries');
const { body, validationResult, matchedData } = require('express-validator');

const getAllMessages = async (req, res) => {
    try {
        const messages = await db.getAllMessages();
        res.render('index', { title: 'Mini Messageboard', messages });
    } catch (error) {
        console.log(error.message);
        serverError(res);
    }
};

const getMessageById = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            res.status(400).render('error', {
                title: 'Error 400',
                errorCode: '400',
                errorMessage: ' Bad Request ',
                errorDetails: 'Request params could not be read properly.',
            });
            return;
        }

        const result = await db.getMessageById(Number(id));
        if (!result) {
            res.status(404).render('error', {
                title: 'Error 404',
                errorCode: '404',
                errorMessage: 'Message Not Found ',
                errorDetails:
                    "The Message you're looking for was moved, deleted, or never existed in our board.",
            });
            return;
        }
        const timing = calculatePastTime(result.added);
        res.render('messageDetail', { title: 'Details', item: result, timing });
    } catch (error) {
        console.log(error.message);
        serverError(res);
    }
};

const getFormPage = async (req, res) => {
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

const messageCreatePost = [
    validadeNewMessage,
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).render('form', {
                    title: 'Bad Request',
                    errors: errors.array(),
                });
            }

            const { userName, userMessage } = matchedData(req);
            await db.insertMessage(userName, userMessage);
            res.redirect('/');
        } catch (error) {
            console.log(error.message);
            serverError(res);
        }
    },
];

const getErrorPage = async (req, res) => {
    res.status(404).render('error', {
        title: 'Error 404',
        errorCode: '404',
        errorMessage: 'Page Not Found ',
        errorDetails:
            "The page you're looking for was moved, deleted, or never existed in our board.",
    });
    return;
};

function serverError(res) {
    res.status(500).render('error', {
        title: 'Error 500',
        errorCode: '500',
        errorMessage: ' Internal Server Error !',
        errorDetails:
            'The server encountered an internal error or misconfiguration and was unable to complete your request.',
    });
    return;
}

function calculatePastTime(dataString) {
    const postDate = new Date(dataString);
    const now = new Date();
    const seconds = Math.floor((now - postDate) / 1000);

    if (seconds < 60) return `right now`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    return `${days} days ago`;
}

module.exports = {
    getAllMessages,
    getMessageById,
    getFormPage,
    getErrorPage,
    messageCreatePost,
};
