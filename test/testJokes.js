var expect = require("chai").expect;
var jokes = require("../model/jokesMongo");
var connection = require("../db/db");

var testJokes = [{
    "joke": "aaaa",
    "type": ["short", "alcohol", "quote"],
    "reference": {"author": "Someone", "link": ""},
    "lastEdited": new Date()
}, {
    "joke": "bbbbb",
    "type": ["short", "alcohol", "quote"],
    "reference": {"author": "Someone", "link": ""},
    "lastEdited": new Date()
}
];
describe("The Jokes Factory", function () {

    before(function (done) {
        connection.connect("mongodb://localhost:27017/test", function () {
            done();
        });
        0
    });
    beforeEach(function (done) {
        var db = connection.get();
        db.collection("jokes").deleteMany({}, function (err, data) {
            if (err) {
                throw new Error(err);
            }
            db.collection("jokes").insertMany(testJokes, function (err, data) {
                if (err) {
                    throw new Error(err);
                }
                done();
            });
        })

    });

    it("Should find two jokes", function (done) {
        jokes.allJokes(function (err, data) {
            expect(data.length).to.be.equal(2);
            done();
        })
    });
    it("Should fine one joke, and ids should be eql", function (done) {
        jokes.findJoke(testJokes[0]._id, function (err, data) {
            expect(data._id).to.eql(testJokes[0]._id);
            done();
        })
    });
    it("Should edit the joke and return the updated version", function (done) {
        jokes.editJoke(testJokes[0], function (err, data) {
            expect();
            done();
        })
    })

});


