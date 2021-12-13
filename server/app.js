const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

const api = require('./api');

app.get('/questions/', api.getAllQuestions);
app.get('/questions/:id', api.getQuestionById);
app.get('/categories/', api.getAllCategories);
app.get('/categories/:id', api.getCategoryById);
app.get('/questions/category/:id', api.getQuestionsCategoryId);