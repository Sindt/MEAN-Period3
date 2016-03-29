var mongoose = require('mongoose');
var User = require('./userSchema')

//CREATE
User.create({
    username: 'Kurt Wonnegut',
    email: "kurtwon@cphbus.dk"
}, function (err, user) {
    if (!err) {
        console.log('User' + user._id + " saved");
    }
});

//READ
User.find({}, function (err, users) {
    if (err) throw err;
    console.log(users);
});

//READ
User.findOne(
    {'username': 'Kurt Wonnegut'},
    'name email',
    function (err, user) {
        if (!err) {
            console.log(user);
        }
    });

//UPDATE
User.findOneAndUpdate(
    {username: 'Kurt Wonnegut'},
    {email: 'wonnegut.gmail.com'},
    function (err, user) {
        if (err) throw err;
        console.log(user);
    });

//DELETE
User.findOneAndRemove(
    {username: 'Kurt Wonnegut'},
    function (err, user) {
        if (err) throw err;
        console.log(user);
    });


module.exports = User;