<p align="center">
<img src="http://www.epn.edu.ec/gui/header/logo.svg" width="300" height="200">
</p>

# Introducción a la WEB - HTML
***
### MATERIA:        `Tecnologías Web con JavaScript`
### TEMA:           `Introducción a la Web - HTML`
### FECHA:          `2016-10-18`
### ESTUDIANTE:     `Mauricio Sebastian Cabrera Laguapillo`
### PROFESOR:       `Tania Calle - Adrian Eguez`
### INFORME:        `1`
***


## <a name="indice"></a> Indice de contenidos

- <a href="#intro">Introducción</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco">Marco Teorico</a>
  * <a href="#metodos">HTTP Methods</a>
  * <a href="#codigos">Codigos de estado HTTP</a>
  * <a href="#w3c">W3C</a>
  * <a href="#w3s">W3Schools</a>
  * <a href="#her-insp">Herramienta Inspeccionar</a>
  * <a href="#postman">Postman</a>
  * <a href="#npm">NPM</a>
  * <a href="#xml">XML</a>
  * <a href="#tags">Tags HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

<a name="intro"></a>

## Introducción

La World Wide Web **(WWW)** nace en los años 90 y su función es ordenar y distribuir la información que existe en la internet, basado en el uso de hipertextos, es decir, paginas en las cuales se pueden insertar hipervinculos. Estos conducen al usuario a un mismo punto dentro de una pagina web, o de una pagina web a otra. 

Exiten sistemas de escritura para las paginas llamados *"lenguaje de marcado"*, el mas utilizado es el **HTML** (Hyper Text Markup Lenguaje). Este tipo de lenguajes permite ordenar la informacion dentro de las paginas web de uno u otro modo.

<a href="#indice">Volver al Indice</a>
***
<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer herramientas de desarrolladores web como: postman, inspector web.
- Conocer que es W3C y W3C Schools y para que sirve.
- Conocer el funcionamiento de los HTTP Methods y los codigos de HTTP.
- Instalar el servidor mediante el comando **NPM** *(Node Package Manager)* 
- Aprender el uso de lenguaje HTML y los tags de HTML.

<a href="#indice">Volver al Indice</a>
***
<a name="marco"></a>
##Marco Teórico

- <a name="metodos"></a>**HTTP Methods** permiten realizar diferentes tipos de peticiones *REQUEST/RESPONSE* a un servidor dependiendo de las necesidades de la aplicación. Los diferentes tipos de metodos son: 
    * ***OPTIONS:*** Solicitud de información acerca de las opciones de comunicación disponibles.
    * ***GET:*** Recuperación de la información en forma de una entidad identificada por el URI.
    * ***HEAD:*** Similar al metodo *GET* solo que el servidor no envia un mensaje de BODY en la respuesta.
    * ***POST:*** Solicita que el servidor que la entidad incluida en la *request* como un nuevo subordinado del recurso.
    * ***PUT:***se Solicita un almacenamiento de la entidad identificada por el URI, en caso de que la entidad ya exista se aconcidera como una modificacion de la entidad existente en el servidor.
    * ***DELETE:*** Se solicita que el servidor de origen elimine el recurso identificado por el URI de la solicitud
    * ***TRACE:*** Permite al cliente ver lo que se recibe en el otro extremo del *request*.
    * ***CONNECT:*** Reservado para el uso de un proxyque puede puede cvambiar dinamicamente a un tunel.
- <a name="codigos"></a>**Codigos de estado HTTP** son mensajes de respuesta que se envian al navegador para determinar el estado de la conexion http. los principales codigos de estado con:
    * ***1XX:*** Informan al navegador de acciones que se van a realizar.
    * ***2XX:*** Indican que la petición del navegador se ha recibido, procesado y respondido correctamente.
    * ***3XX:*** Indican que el navegador debe realizar alguna acción adicional para que la petición se complete (como por ejemplo redirigirse a otra página).
    * ***4XX:*** Indican que se ha producido un error cuyo responsable es el navegador.
    * ***5XX:*** Indican que se ha producido un error cuyo responsable es el servidor.
- <a name="w3c"></a>**W3C** *World Wide Web Consortium* consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.
- <a name="w3s"></a>**W3Schools** es un sitio web popular para el aprendizaje de las tecnologías web en línea. El contenido incluye tutoriales y referencias relacionadas con HTML, CSS, JavaScript, PHP, SQL, etc.
- <a name="her-insp"></a>**Herramienta Inspeccionar** es una herramienta proporcionada por los navegadores que permite identificar con precisión el código HTML de todos los elementos que se ven en una página web.
- <a name="postman"></a>**Postman** herramienta que permite revisar la comunicacion entre las APIs.
- <a name="npm"></a>**NPM (Node Package Manager)** es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.
- <a name="xml"></a>**XML (eXtensible Markup Language)** es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el *World Wide Web Consortium (W3C)* para almacenar datos en forma legible.

        Figura 1. Ejemplo de codigo XML
- <a name="tags"></a>**Tags HTML** son una marca con clase que delimita una región en los lenguajes basados en XML.


<a href="#indice">Volver al Indice</a>
***
<a name="desarrollo"></a>
##Desarrollo de la Práctica
Antes de dar inicio a la practica se realizo una declaracion de tipo de documento, la cual asocia el documento que se creo en esta practica al tipo de documento HTML (Figura 1). esto determina el modo de visualización que tendra el documento en el navegador.

*Figura 2. Ejemplo de definicion para un documento HTML*

Una vez realizado esto se procedio a ver los primerso tags basicos que se utilizan para la construccion de una pagina geb con HTML5.

#### Cabeceras ```<hX>```
Este tag sirve para definir encabezados van desde el ```<h1>``` hasta el ```<h6>```, donde ```<h1>``` define el encabezado mas importante y ```<h6>``` define el encabezado menos importante.

*Figura 3. Uso de cabeceras*

#### Listas 

Para escribir una lista en codigo HTML se deben usar los siguientes tags ```<ul>``` para listas no ordenadas, ```<ol>``` para listas ordenadas y ```<li>``` dentro de los tags anteriores para lsitar cada uno de los elementos.

*Figura 4. Uso de listas ordenadas y desordenadas*

#### Parrafos 

Para escribir un parrafo completo se debe utilizar el tag ```<p>``` el cual permitira dentro de este redactar todo el contenido necesario.

*Figura 5. Ejemplo de creacion de parrafos*

#### Imagenes 

Para referenciar una imagen se utiliza el tag  ```<img src="" alt="">``` en donde ```scr``` hace referencia ala direccion de ubicacion de la imagen y ```alt``` es un texto auxiliar el cual sirve para describir el contenido de la imagen para personas con problemas de visión.

*Figura 6. Ejemplo de insercion de imagenes*

#### Links 

Para insertar un link de redireccionamiento a otra pagina web se debe utilizar el tag  ```<a href="" target="">```. En donde ```href``` hace referencia a la pagina a la cual se quiere acceder y ```target``` determina el destino de apertura, es decir, una nueva pestaña, una nueva ventana, en la misma ventana, etc.

*Figura 7. Ejemplo de creacion de links*

#### Clases 

Dentro de los tags se pueden definir clases que determinan el compratamiento que tendra el elemento contenido por el tag. Como por ejemplo el estilo que este tendra. para poder hacer uso de dichas clases se debe dentro del tag definir la clase a utilizar y el valor de dicha clase, ejemplo:
```
<h2 style="background-color:pink">Listas desordenadas</h2>
    
```

*Figura 8. Ejemplo de uso de la clase ```style```*

<a href="#indice">Volver al Indice</a>
***
<a name="conrec"></a>
##Conclusiones y Recomendaciones


<a href="#indice">Volver al Indice</a>
***