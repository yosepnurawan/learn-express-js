'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function (req, res) {
    connection.query('SELECT * FROM person', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function (req, res) {
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM  person WHERE id = ?', 
    [user_id],
    function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function (req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('INSERT INTO person (first_name, last_name) VALUES (?, ?)',
    [first_name, last_name],
    function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};