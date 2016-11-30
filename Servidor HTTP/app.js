var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!');
});

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con JavaScript!!');
});

//app.post('/TecnologiasWeb', function (req, res) {
  //res.send('con post!!');
//});

app.post('/TecnologiasWeb', function (req, res) {
  //res.send('con post!!');
    
    var parametros = req.params;
    
    var usuario = {
        nombre:'Mauricio',
        cedula:'1725100141'
    }
    //res.headers.token=1234;
    //res.headers.usuario=usuario.nombre;
    res.append('token','1234');
    
    usuario.apellido='Cabrera';
    usuario.mascotas=[];
    usuario.casado=false;
    
    res.json (usuario);
    
    console.log("Lo que tengo en el request es");
    console.log(req.headers);
    console.log("Lo que tengo en el response es");
    console.log(res.headers);
    
    
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});