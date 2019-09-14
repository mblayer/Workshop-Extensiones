# Content Script

Son archivos que se van a ejecutar dentro del entorno del DOM cuando este esta disponible, podemos leer el contenido, editarlo y pasarle informacion a nuestro [Background Script](./04_backgroundScript.md) si necesitamos usar la api del navegador. Pero tambien tenemos disponible acceso a algunas opciones de chrome APIs:

## Carga de Content Script

Tenemos 2 formas de cargar nuestro content script dependiendo lo que querramos realizar.

La primer opcion es para ejecutar en situaciones especificas y en este caso debemos activar en los permisos del manifest `activeTab`:

```
"permissions": [
  "activeTab"
]
```


La segunda opcion es para ejecutar en URL especificas, en este caso tenemos que agregar la key `content_scripts` en el manifest, alli vamos a indicar en que url tiene que funcionar y que archivos debe ejecuar.

```
"content_scripts": [
  {
    "matches": ["http://*.test.com/*"],
    "js": ["contentScript.js"]
  }
]

```
Tenemos la opcion de indicarle urls individuales o a todas por medio de `<all_url>`

Una vez que agregamos nuestro content script a la extension vamos a tener acceso al DOM de la web y desde alli poder realizar nuestras acciones.

En nuestro bookmarklet del ejemplo 2 realizabamos cambios en todos los parrafos al momento de ejecutar nuestro vinculo, en esta caso vamos a poder realizar la misma accion de forma automatica cuando se cargue nuestra web.
para esto en nuestro `contentscript.js` vamos a agregar el siguiente codigo:

```
const cambiarTexto =  (nombre) => {
  const parrafos = document.getElementsByTagName('p');
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = nombre;
  }
}
cambiarTexto("Matias Blayer")
```

### ⏪ [Anterior: Manifest](./03_manifest.md)
### ⏩ [Siguiente: Background Script](./05_backgroundScript.md)