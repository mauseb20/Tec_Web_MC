##Comandos Importantes

###Instalar Sails
sails es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real.

```npm install -g sails```

Uso de manera global

###Crear un proyecto en sails js
```sails new nombreProyecto```

###Levantar el servdor sails
```sails lift```
```node app.js```

El saols pide opciones si no estan definidas, las opciones son:
- 1: SAFE MODE no se va alterar la base de datos.
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos.
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.


###Servidor web de sails
El servidor web de sails se encuentra en la carpea **assets**

###Generar controladores en sails
para generar controladores se utiliza el siguiente comando:
```sails generate controller NombreControlador```

###Generar apis en sails
para generar apis se utiliza el siguiente comando:
```sails generate api NombreAPI```

Un Api en sails no es mas que la funcion de un controlador y un modelo.

###Generar modelo en sails
para generar modelos se utiliza el siguiente comando:
```sails generate model NombreModelo```

#API REST

##Modelo Usuario

##Crear Usuario

###URL
´http://localhost:1337/Usuario´

###Metodo

´POST´

###Data

```javascript
{
    
}
```
