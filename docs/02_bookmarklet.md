#  Bookmarklet Complejos

Cuando nuestro Bookmarklet se hace mas complejo no es cómodo ingresar el código en un link de la forma que vimos en el capitulo anterior.

Tenemos la posibilidad de agregar mas lógica desde un archivo externo, para ello requerimos un servidor que contenga nuestro archivo, en este caso localmente podemos usar la extension [Web Server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb), otra opción es subir nuestro archivo JS alguno de los diferentes servidores gratuitos como, [Netlify](https://www.netlify.com/) o [Now](https://zeit.co/).

## Cargando un JS externo
Para poder utilizar un archivo externo vamos a aprovechar la posibilidad de JS de poder crear/agregar elementos dentro del DOM.

En el caso de este [ejemplo](https://bkml-randomcolor.netlify.com/)

```
<a href="javascript:(function(){const script = document.createElement('script'); script.src = 'https://bkml-randomcolor.netlify.com/ejemplo2.js'; document.body.appendChild(script);})();">

```

En este caso estamos cargando un [archivo](https://bkml-randomcolor.netlify.com/ejemplo2.js) que se encuentra dentro de Netlify el cual cambia el BGcolor del Body y el color de la fuente.

Hay que tener en cuenta que estamos **insertando** un archivo dentro del DOM y no todas las web lo permiten por cuestiones de seguridad, esto es importante tener en cuenta ya que en algunas webs no funcionaran nuestros Bookmarklet.

Para nuestro segundo Bookmarklet vamos a realizar una tarea más compleja.

Cuando accionemos nuestro Bookmarklet vamos cambiar todas los textos dentro de una etiqueta `<p></p>` por nuestro nombre.
En mi caso, todas los textos que se encuentren en una etiqueta  `<p></p>`  tendrán el contenido de **Matias Blayer**

### 🆘  [Solución](../bookmarklet/ejemplo2.js)

### 🏠  [Inicio](../readme.md)