const express = require('express');

const router = express.Router();
const response = require('../../../network/response');
const user = require('./index');
const Controller = require('./index');


//Routes
router.get('/', list);
router.get('/:id', list);
router.post('/', upsert);
router.put('/', upsert);



function list(req, res){
    Controller.list()
        .then((lista) =>{
            response.success(req, res, lista, 200);
        })
        .cath((err) =>{
            response.error(req, res, err.message, 500)
        });
};

function get(req, res){
    Controller.getList(user)
    .then((user) => {
        response.success(req, res, user,201);
    }).cath((err) => {
        response.error(req, res, err.message, 500)
    });
};

function upsert(req, res){
    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res, user,201);
    }).cath((err) => {
        response.error(req, res, err.message, 500)
    });
};

module.exports = router;