var connect = require("../db/db");

//READ
function allJokes(callback) {
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

//READ
function findJoke(id, callback) {
    var db = connect.get();
    db.collection("jokes").findOne({_id: id}, function (err, document) {
        if (err) {
            callback(err);
        } else {
            callback(null, document);
        }
    });
}

//CREATE
function addJoke(jokeToAdd, callback) {
    var db = connect.get();
    db.collection("jokes").insertOne({
        "joke": jokeToAdd.joke, "type": jokeToAdd.type, "reference": jokeToAdd.reference, "lastEdited": new Date()
    }, function (err, document) {
        if (err) {
            callback(err);
        } else {
            callback(null, document);
        }
    });
}


//UPDATE
function editJoke(jokeToEdit, callback) {
    var db = connect.get();
    db.collection("jokes").updateOne({"_id": jokeToEdit._id}, {$set: {"joke": jokeToEdit.joke}},
        function (err, document) {
            if (err) {
                callback(err);
            } else {
                callback(null, document);
            }
        });
};

exports.allJokes = allJokes;
exports.findJoke = findJoke;
exports.addJoke = addJoke;
exports.editJoke = editJoke;
