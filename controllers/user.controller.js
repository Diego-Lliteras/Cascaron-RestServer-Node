const { response } = require('express');

const usuariosGet = (req, res = response) =>{
    const paramsQuery = req.query;
    //Podemos desestructurar y poner valor por default en caso de que no se envíen
    //const {nombre = 'no name', apiKey} = req.query;
    res.json({
        msg:"get API - controlador",
        paramsQuery
    })
}

const usuariosPost = (req, res) =>{
    const {nombre,edad} = req.body;

    res.json({
        msg:"post API - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res) =>{
    const {id} = req.params;
    res.json({
        msg:"put API - controlador",
        id
    })
}

const usuariosPatch = (req, res) =>{
    res.json({
        msg:"patch API - controlador"
    })
}

const usuariosDelete = (req, res) =>{
    res.json({
        msg:"delete API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}