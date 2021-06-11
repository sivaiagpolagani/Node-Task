const express = require('express');
const modals = require('../modals/modals');
const router = express.Router();

router.get('/categorys',async function(req,res) {
    await modals.categoryList((error,data) => {
        if(error) {
            res.status(500).send({'success': false,'data':'','message':error.message})
        } else {
            res.send({ 'success': true, 'data': data, 'message': 'Listed all the categorys' })
        }
    });
})

router.post('/category',async function(req,res) {
    console.log("req.body",req.body);
    let catgData = {
        name: req.body.catgname,
        subcatg: req.body.subcategory
    }
    console.log("catgData",catgData);
    await modals.catgadd(catgData,(error,data) => {
        if (error)
        res.status(500).send({message:error.message || "Some error occurred while creating the Customer."});
        else 
        res.send({ 'success': true, 'data': data, 'message': 'category data added' });
    });
})

router.get('/category/:id',async function(req,res) {
    await modals.catg(req.params.id,(err,data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Not found category with id ${req.params.id}.`});
            } else {
                res.status(500).send({message: "Error retrieving category with id " + req.params.id });
            }
        } else {
            res.send({ 'success': true, 'data': data, 'message': 'category found with id' });
        }
    });
})


module.exports = router;