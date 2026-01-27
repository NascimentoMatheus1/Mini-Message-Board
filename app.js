const basicRouter = require('./routes/basicRouter');
const express = require('express');
const app = express();

app.use('/', basicRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});
