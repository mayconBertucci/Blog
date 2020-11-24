const express = require('express');
const app = express();
const snippetRouter = require('../routers/snippet');
require('../db/mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});

app.get('/', (req, res) => {
    res.redirect('/api/snippets');
});

app.get('/new-snippet', (req, res) => {
    res.render('new-snippet', { title: "Crear Snippet"});
});

app.use('/api', snippetRouter);