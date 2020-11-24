const express = require('express');
const Snippet = require('../models/snippet');
const router = new express.Router();

router.get('/snippets', async(req, res) => {
    try {
        const snippets = await Snippet.find({});
        res.status(201).render('index', { title: 'Home', snippets, type: 'snippet'});
    } catch (e) {
        //res.status(400).render("page404", { title: "Página no encontrada" });
        res.send(e);
    }
});

router.post('/snippets', async(req, res) => {
    const snippet = new Snippet(req.body);
    try {
        await snippet.save();
        res.redirect('/api/snippets');
    } catch (e) {
        res.send(e);
    }
});

router.get('/body/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const snippet = await Snippet.findById(_id);
        res.status(201).render('index', { title: "Home", body: snippet.body, type: "body"});
    } catch (e) {
        //res.status(400).render("page404", { title: "Página no encontrada" });
        res.send(e);
    }
});

module.exports = router;