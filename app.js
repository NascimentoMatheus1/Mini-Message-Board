const path = require('node:path');
const basicRouter = require('./routes/basicRouter');
const express = require('express');
const app = express();

// view engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', basicRouter);

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server listening in port ${port}`);
});
