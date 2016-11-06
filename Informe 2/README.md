<p align="center">
<img src="http://www.epn.edu.ec/gui/header/logo.svg" width="300" height="200">
</p>

# Introducción a la WEB - HTML
***
### MATERIA:        `Tecnologías Web con JavaScript`
### TEMA:           `Uso HTML y CSS`
### FECHA:          `2016-10-25`
### ESTUDIANTE:     `Mauricio Sebastian Cabrera Laguapillo`
### PROFESOR:       `Tania Calle - Adrian Eguez`
### INFORME:        `2`
***


## <a name="indice"></a> Indice de contenidos

- <a href="#intro">Introducción</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco">Marco Teorico</a>
  * <a href="#css">CSS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

<a name="intro"></a>

## Introducción

Exiten sistemas de escritura para las paginas llamados *"lenguaje de marcado"*, el mas utilizado es el **HTML** (Hyper Text Markup Lenguaje). Este tipo de lenguajes permite ordenar la informacion dentro de las paginas web de uno u otro modo. Para que la presentación de dichas paginas se utilizan lenguajes complementarios como las *hojas de estilo en cascada*, estas permiten agregar estilos a los diferentes elementos que componen la pagina HTML.

<a href="#indice">Volver al Indice</a>
***
<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web.
- Conocer herramientas de desarrolladores web como: brackets, inspector web, etc.
- Conocer que es CSS y para que sirve.
- Levantar el servidor WEB mediante el comando ``` > http-server -c10``` 
- Aprender el uso de lenguaje CSS y las clases dentro de HTML.

<a href="#indice">Volver al Indice</a>
***
<a name="marco"></a>
##Marco Teórico

- <a name="css"></a>**CSS** *Cascading Stylesheets* ó *Hojas de Estilo en Cascada* es un lenguaje de hojas de estilo que permite definir y crear la presentación de un documento escrito y estructurado en lenguaje de marcado. es muy utilizado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en **HTML** o en **XHTML**. 

Junto con HTML y JavaScript, CSS es una tecnologia usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web, y GUIs para muchas aplicaciones móviles. Ademas está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación de éste, características tales como las capas o layouts, los colores y las fuentes.


<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Ejemplo%20clase%20CSS.png">
</p>

        Figura 1. Ejemplo de clase para uso de CSS

<a href="#indice">Volver al Indice</a>
***
<a name="desarrollo"></a>
##Desarrollo de la Práctica
Antes de dar inicio a la practica se procede a levantar el servidor instalado previamente, mediante el comando ``` > http-server -c10```.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Levatar%20el%20servidor.png">
</p>
*Figura 2. Levantamiento del servidor Web*

Una vez levantado el servidor se procedio a ralizar las primeras declaraciones de estilo.

#### Dentro del HTML
Dentro del codigo HTML en la cabecera o ```<head>``` se puede defenir el estilo de ciertos elementos mediante una declaracion de clase. esto se lo debe realizar dentro de otra etiqueta llamada ```<style>``` la cual resolvera el contenido de esta como el estilo que se le dara a los elementos de clase aquí nombrados.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/HTML/Imagenes/Style%20en%20html.png">
</p>
*Figura 3. Uso de CSS dentro del codigo HTML*

<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/HTML/Imagenes/Style%20en%20html2.png">
</p>
*Figura 4. Resultados obtenidos*

#### Uso de CSS en un archivo externo 

Para tener fcilidad de programacion se puede crear un documento ```.css``` que contenga todos los estilos que seran utilizados por la pagina web. Para hacer uso de estos estilos solamente se debe utilizar la siguiente etiqueta HTML: 

```<link rel="stylesheet" href="../HTML/Estilos.css">```

En donde ```rel``` contendra la relación del archivo y ```href``` contiene la direccion fisica del archivo ```.css``` de esta manera se obtendran los mismos resultados que al usar css dentro del html.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/HTML/Imagenes/Style%20en%20css2.png">
</p>
*Figura 5. Uso de css mediante archivo externo*

<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/HTML/Imagenes/Style%20en%20css.png">
</p>
*Figura 6. Resultados*

#### Uso de framework CSS 

Para evitar la creacion de un archivo con los estilos necesario para la pagina web o evitar el codigo dentro de html, se puede utilizar un framework que ya tenga cargados todos los estilos necesario para la pagina. Un claro ejemplo de esto es el Framework *Bootstrap*, que permite adecuar sus estilos a las necesidades de la pagina web.

Para hacer uso de este framework accedemos a la pagina de bootstrap y obtenemos el link de referencia a su framework de manera online. Si se necesita tener el framework de manera fisica descargamos el archivo de la pagina oficial y luego en nuestra pagina HTML hacemos referencia a la ubicacion del archivo.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Uso%20de%20bootstrap.png">
</p>
*Figura 7. Uso de la libreria Bootstrap*

Ademas bootstrap permite un mejor manejo del espacio de la pagina ya que este divide a la misma en diferentes filas, columnas y contenedores mediante la etiqueta ```<div>```. La pagina se divide en infinidad de filas, las cuales pueden ser agrupadas dentro de un contenedor y estas filas se pueden dividir hasta en 12 columnas.

<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Uso%20etiqueta%20div.png">
</p>
*Figura 8. Uso de la etiqueta ```<div>```*

<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase2-CSS/Informe%202/Imagenes/Resultados%20uso%20de%20bootstrap.png">
</p>
*Figura 9. Separacion de espacios mediante bootstrap*

<a href="#indice">Volver al Indice</a>
***
<a name="conrec"></a>
##Conclusiones y Recomendaciones
- Cuando se utiliza CSS el elemento designado a tomar el estilo siempre tomara el estilo de la ultima referencia, es decir, si existen 3 archivos de ```estilo.css``` el elemento de la pagina web tomara el estilo del ultimo archivo. Esto permite realizar combinaciones de estilos de diferentes archivos de estilo.
- Se debe tomar en cuenta que existen diferentes frameworks de css que prestan una gran variedad de estilo, los que se pueden utilizar segun las necesidades de la pagina ha desarrollarse.


<a href="#indice">Volver al Indice</a>
***

##Gracias por la atención

#####Autor: *[Mauricio Cabrera L.](https://github.com/mauseb20)*