var express = require('express');
var router = express.Router();
var jokes = require("../model/jokesMongo");
var connection = require("../db/db");


// GET
router.get('/jokes', function (req, res, next) {
    connection.connect("mongodb://localhost:27017/test", function () {
        jokes.allJokes(function (err, data) {
            if (err) {
                console.log("Sorry, couldn't get allJokes")
            } else {
                res.render('jokes', {jokesData: data});
            }
        })
    });
});

//POST
router.post('/joke', function (req, res, next) {
    connection.connect("mongodb://localhost:27017/test", function () {
        jokes.addJoke(function (err, data) {
            if (err) {
                console.log("Sorry" + err)
            } else {
                res.render('jokes', {jokesData: data})
            }
        });
    });
});

//PUT
router.put('/joke', function (req, res, next) {
    connection.connect("mongodb://localhost:27017/test", function () {
        jokes.editJoke(function (err, data) {
            if (err) {
                console.log("Sorry" + err)
            } else {
                res.render('jokes', {jokesData: data})
            }
        });
    });
});

//Delete
router.delete('/joke', function (req, res, next) {
    connection.connect("mongodb://localhost:27017/test", function () {
        jokes.(function (err, data) {
            if (err) {
                console.log("Sorry" + err)
            } else {
                res.render('jokes', {jokesData: data})
            }
        });
    });
});



module.exports = router;
