const express = require('express');
const router=express.Router();
const Post=require("../models/post.model")

const crudController=require("./crud.controller")

//showing all post data
router.get("/",crudController.get(Post))

//creating new data for post
router.post("/",crudController.post(Post))

//remove document by id
router.delete("/",crudController.del(Post))


module.exports= router;