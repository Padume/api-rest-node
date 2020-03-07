const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');

const _ = require('underscore');

router.get('/', (req, res) => {
    res.json(movies);
})

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = { ...req.body, id };
        movies.push(newMovie);
        res.send(movies);
    }
    else {
        res.send('Error falta un dato');
    }
    
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {

        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
    }
    else {
        res.send('Error falta un dato');
    }
    res.send(movies);

})

router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    }); 
    res.send(movies);

})

module.exports = router;