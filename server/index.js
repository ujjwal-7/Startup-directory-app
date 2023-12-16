const express = require('express');
const cors = require('cors');
require('dotenv').config();

const startupRouter = require('./routers/startup');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/startup', startupRouter);

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
});

