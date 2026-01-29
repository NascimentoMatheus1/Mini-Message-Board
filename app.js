const path = require('node:path');
const basicRouter = require('./routes/basicRouter');
const express = require('express');
const app = express();

// view engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// routes
app.use('/', basicRouter);

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server listening in port ${port}`);
});
