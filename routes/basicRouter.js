const { Router } = require('express');
const route = Router();
const messageController = require('../controllers/messageControler');

route.get('/', messageController.getAllMessages);
route.get('/messages/:id', messageController.getMessageById);
route.get('/new', messageController.getFormPage);

route.post('/new', messageController.createNewMessage);

route.use(messageController.getErrorPage);

module.exports = route;
