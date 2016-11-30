var express = require('express');
var app = express();

var usuarios = [
    {
        id:1,
        nombre:'Pepe',
        cedula:'1254589667'
    },
    {
        id:2,
        nombre:'carlos',
        cedula:'1712548879'
    },
    {
        id:3,
        nombre:'Juan',
        cedula:'9999999999'
    }
]
var contador =3;

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con JavaScript!!');
});

app.get('/Usuarios', function (req, res) {
  res.json(usuarios);
});

app.get('/Usuario/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario;
    for (var i=0;i<usuarios.length;i++){
        if (idActual==usuarios[i].id){
            res.json(usuarios[i]);
        }  
    }
    res.send('No existe el usuario');
});

app.post('/Usuario', function (req, res) {
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    if(!req.query.cedula){
        res.send('No envio la cedula');
    }
    var nuevoUsuario={
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    };
    usuarios.push(nuevoUsuario);
    contador++;
    res.json(nuevoUsuario);
    console.log(req.query.nombre);
    console.log(req.query.cedula);
    
});

app.post('/TecnologiasWeb:nombre', function (req, res) {
  //res.send('con post!!');
    
    var parametros = req.params;
    
    var usuario = {
        nombre:'Mauricio',
        cedula:'1725100141'
    }
    //res.headers.token=1234;
    //res.headers.usuario=usuario.nombre;
    res.append('token','1234');
    
    res.json (usuario);
    
    console.log("Lo que tengo en el request es");
    console.log(req.headers);
    console.log("Lo que tengo en el response es");
    console.log(res.headers);
    
    
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});