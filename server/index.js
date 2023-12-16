const express = require('express');
const cors = require('cors');
require('dotenv').config();

const startupRouter = require('./routers/startup');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/startup', startupRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`)
});

