const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');

/* GET home page */

router.get("/movie/:id", (req, res)=>{
    const id = req.params.id;

    MovieModel.findById(id)
    .then((movie)=>{res.render("details.hbs", movie)})
    .catch((err)=> console.log(`DB error reading '/movie/:id': ${err}`))
})

router.get("/movies", (req, res)=>{
    MovieModel.find()
    .then((movies)=>{res.render("movies.hbs", {movies})})
    .catch((err)=> console.log(`DB error reading '/movies': ${err}`))
})

router.get('/', (req, res) => res.render('index'));

module.exports = router;
