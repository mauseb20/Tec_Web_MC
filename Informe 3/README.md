<p align="center">
<img src="http://www.epn.edu.ec/gui/header/logo.svg" width="300" height="200">
</p>

# Introducción a Bootstrap
***
### MATERIA:        `Tecnologías Web con JavaScript`
### TEMA:           `Uso de Bootstrap`
### FECHA:          `2016-10-26`
### ESTUDIANTE:     `Mauricio Sebastian Cabrera Laguapillo`
### PROFESOR:       `Tania Calle - Adrian Eguez`
### INFORME:        `3`
***


## <a name="indice"></a> Indice de contenidos

- <a href="#intro">Introducción</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco">Marco Teorico</a>
  * <a href="#boots">Bootstrap</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

<a name="intro"></a>

## Introducción

Un framework es un conjunto estandarizado de conceptos, practicas y criterios para tratar un tipo comun de problema, estos pueden ser utilizados como referencia para la resolucion de problemas similares.

En el mundo del diseño web, un framework se define como un conjunto formado por una estructura de archivos y carpetas de código estandarizado **(HTML, CSS, JS documentos, etc.)** que se puede utilizar para apoyar la Desarrollo de sitios web, como base para comenzar a construir un sitio.

Los frameworks frontend consisten generalmente en un paquete compuesto por una estructura de archivos y carpetas de código estandarizado (HTML, CSS, documentos JS, etc.). En esta practica tendremos una introducción a uno de los framework frontend mas utilizados dentro del diseño web. 

<p align="center">
<img src="http://res.cloudinary.com/dnkqgvjbd/image/upload/v1451679096/bootstrap_xfpqre.png">
</p>

<a href="#indice">Volver al Indice</a>
***
<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer herramientas de desarrolladores web como: inspector web, bootstrap, etc.
- Conocer que es bootstrap y para que sirve.
- Conocer el funcionamiento de este framework frontend.
- reforzar el conocimiento en el uso de lenguaje HTML y los tags de HTML.

<a href="#indice">Volver al Indice</a>
***
<a name="marco"></a>
##Marco Teórico

<a name="boots"></a>**Bootstrap** es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript adicionales. 

Bootstrap fue desarrollado por Mark Otto y Jacbod Thornton de Twitter, como un marco de trabajo (framework) para fomentar la consistencia entre las herramientas internas. El primer desarrollo en condiciones reales ocurrió durante la primera "Semana de Hackeo" (Hackweek) de Twitter." Mark Otto mostró a algunos colegas como acelerar el desarrollo de sus proyectos con la ayuda de la herramienta de trabajo. Como resultado, decenas de temas se han introducido en el marco de trabajo.

Bootstrap tiene un soporte relativamente incompleto para HTML5 y CSS 3, pero es compatible con la mayoría de los navegadores web. La información básica de compatibilidad de sitios web o aplicaciones está disponible para todos los dispositivos y navegadores.

El uso de este marco de trabajo se lo puede hacer de dos formas la primera es descargando los archivos ```.css``` y ```.js```, y luego referenciar dentro del documento ```.html``` la ubicacion de estos dos archivos mediante la etiqueta:
```
<link rel="stylesheet" href="/directorio/archivo.css">
```

La segunda forma consiste en  el uso de Bootstrap CDN, esto permite tener acceso a este framework mediante la web sin ningun tipo de instalacion o descarga. Simplemente se agregan las sentencias HTML suministradas por la pagina oficial de Bootstrap.

<p align="center">
<img src="">
</p>

                            Figura 1. Uso de Bootstrap CDN.

<a href="#indice">Volver al Indice</a>
***
<a name="desarrollo"></a>
##Desarrollo de la Práctica

En la practica anterior ya se vio un poco del uso de este marco de trabajo, por lo que en esta practica retomares a partir de ese punto, es decir, a paratir de la division de la pagina en ```forms```

<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Resultados%20uso%20de%20bootstrap.png">
</p>

            Figura 2. División de la página HTML en forms (filas y columnas)

#### Titulos o cabeceras ```<hX>```
El uso de ```html``` sigue siendo el mismo lo unico que cambia es la presentacion del contenido al usar las cabeceras se puede notar un cambio en la tipografia.
<p align="center">
<img src="">
</p>

                            Figura 3. Tipografia de Bootstrap  

#### Inserción de codigo 

Para insertar codigo como texto plano se utiliza la etiqueta o tag ```<code>&lt;codigogt;</code>``` esto insertara el texto en codigo html.
<p align="center">
<img src="">
</p>

                            Figura 4. Inserción de codigo.

#### Uso de Keyboard Inputs 

Los keyboard inpust ```<kbd>``` permiten ingresar texto que define comandos que el usuario puede ingresar por el teclado.
<p align="center">
<img src="">
</p>

                            Figura 5. Uso de Keyboard Inputs

#### Forms 

Para insertar un formulario o form en una pagina html se debe usar el tag de division ```<div>``` y en el atributo ```class``` definir la clase ```form-groups``` todo lo contenido dentro de esta etiqueta automaticamente tomara el formato de un formulario, para insertar campos de descripcion y de ingreso de datos se usan los tags ```<label>``` e ```<input>``` respectivamente. Para insertar un boton se utiliza el tag ```<button>```.
<p align="center">
<img src="">
</p>

                    Figura 6. Creacion de un form basico en HTML

#### Tablas 

Para insertar una tabla dentro de la pagina se utiliza el tag ```<table>```, dentro de esta etiqueta se utiliza la etiqueta table row ```<tr>``` para determinar cada una de las filas de la tabla, dentro del table row se pueden utilizar las etiquetas table head ```<th>```, para determinar la cabecera, y table data ```<td>``` para determinar los elementos que componen la tabla.
<p align="center">
<img src="">
</p>

                            Figura 7. Creacion de tablas

<a href="#indice">Volver al Indice</a>
***
<a name="conrec"></a>
##Conclusiones y Recomendaciones
- Bootstrap permite dar un cabado mas estilizado a las paginas y aplicaciones web que se desarrollan, ya que tiene una gran variedad de estilos definidos.
- Para evitar sobre cargar el contenido de la pagina y hacer que el usuario tenga una experiencia mas fluida al momento de ingresar a la pagina o aplcativo web, se recomienda utilizar todos los complementos cargados en repositorios, por esta razon se debe utilizar el Bootstrap CDN en lugar de descargar el archivo.


<a href="#indice">Volver al Indice</a>
***

##Gracias por la atención

#####Autor: *[Mauricio Cabrera L.](https://github.com/mauseb20)*