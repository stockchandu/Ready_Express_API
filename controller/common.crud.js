

const get=(model)=> async(req,res) =>{
    const item= await model.find().lean().exec()
    return res.status(200).send({item})

}

const post=(model)=> async (req, res)=>{
    const item= await model.create(req.body);
    return res.status(200).send({item})
}

const del=(model)=> async (req, res)=>{

    const item= await model.findByIdAndDelete(req.params.id);
    return res.status(200).send({item})
}

module.exports={
    get,
    post,
    del
}