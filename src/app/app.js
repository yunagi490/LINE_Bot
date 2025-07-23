const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const webhookRoute = require('./routes/webhook');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/webhook', webhookRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


