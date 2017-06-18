// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Car = require('./Car');

// Creates a new entry
router.post('/', function (req, res) {
    Car.create({
            make : req.body.make,
            model : req.body.model,
            zero_to_sixty : req.body.zero_to_sixty,
            year : req.body.year
        },
        function (err, car) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(car);
        });
});
// Returns all the entries in the database
router.get('/', function (req, res) {
    Car.find({}, function (err, cars) {
        if (err) return res.status(500).send("There was a problem finding the cars.");
        res.status(200).send(cars);
    });
});

// Gets a single entry from the database
router.get('/:id', function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (err) return res.status(500).send("There was a problem finding the car.");
        if (!car) return res.status(404).send("No car found.");
        res.status(200).send(car);
    });
});

// Deletes an entry from the database
router.delete('/:id', function (req, res) {
    Car.findByIdAndRemove(req.params.id, function (err, car) {
        if (err) return res.status(500).send("There was a problem deleting the car.");
        res.status(200).send("Car "+ car.make + " "+ car.model +" was deleted.");
    });
});

// Updates a single entry in the database
router.put('/:id', function (req, res) {

    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, car) {
        if (err) return res.status(500).send("There was a problem updating the car.");
        res.status(200).send(car);
    });
});

module.exports = router;
