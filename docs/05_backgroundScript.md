# Background Script

En este paso vamos a sumar el Background Script que se encarga de la comunicacion con el navegador, es quien se entera que esta pasando en el mismo, ya sea que se abre o cierra una pestaña,  eliminar o agregar un favorito, etc.

El Background Scripts se carga unicamente cuando se tiene que utilizar y se descarga si no se utiliza. 

El Background Scripts es quien se va a encargar de comunicarse con la api del navegador o realizar una peticion de red

Dentro del `manifest.json` lo agregamos de la siguiente manera

```
{
  "name": "Test",
  "description" : "Extension test",
  "manifest_version": 2,
  "version": "0.0.1",
   "background": {
    "scripts": ["background.js"],
    "persistent": false
  }
}
```

Puedo tener mas de un background script, los cuales realizaran varias tareas.

```
{
  "name": "Test",
  "description" : "Extension test",
  "manifest_version": 2,
  "version": "0.0.1",
   "background": {
    "scripts": [
      "backgroundContextMenus.js",
      "backgroundOmniBox.js",
      "backgroundOauth.js"
    ],
    "persistent": false
  }
}
```

La única ocasión para mantener una secuencia de comandos de fondo permanentemente activa es si la extensión usa la API chrome.webRequest para bloquear o modificar solicitudes de red. La API webRequest es incompatible con páginas de fondo no persistentes.


Solo si queremos utilizar [chrome.webRequest](https://developer.chrome.com/extensions/webRequest)  para bloquear o modificar peticiones de red:
vamos a habilitar.

`"persistent": true`

## Iniciando Nuestra extension
Nuestra extensión ahora escaneará el archivo que indicamos en busca de eventos importantes que necesite escuchar, entre ellos tenemos [runtime.onInstalled ](https://developer.chrome.com/extensions/runtime#event-onInstalled) que se ejecuta al instalar por primera vez, cuando se actualiza o se actualiza la version del navegador.

```
chrome.runtime.onInstalled.addListener(()=> {
  console.log("Iniciando extension.");
});
```

Cuando cargamos la extension vamos a poder ver nuestro mensaje en la terminal que tenemos disponible para nuestro background script.

## Configurar Eventos

Algo que nos interesa hacer es poder configurar eventos, en este caso vamos a sumar una accion al agreagar un nuevo marcador favorito.

```
chrome.bookmarks.onCreated.addListener(() => {
  console.log('Nuevo favorito')
});
```

Para que nos permita utilizar en este caso `bookmarks` tenemos que darle permisos, para ello agregamos a nuestro manifest:

```
"permissions": [
  "bookmarks"
]
```
Segun vayamos agregando componentes tenemos que darle permiso para utilizarlos, podemos ver una lista detallada en la siguiente [Guia](https://developer.chrome.com/extensions/devguide)


## Filtros

Otra caracteristica muy importante del Background script es [filtrar eventos](https://developer.chrome.com/extensions/events#filtered) lo que nos va a permitir poder realizar acciones en determinadas web.

```
chrome.webNavigation.onCompleted.addListener(() => {
  alert("Bienvenidos a Google");
}, {url: [{urlMatches : 'https://www.google.com/'}]});
```

Que tendriamos que hacer para que funcione?

~~Asi es, agregarlo a los permisos del manifest~~


## Reaccionar frente a eventos

Por ultimo vamos a poder reaccionar frente a eventos.

```

chrome.runtime.onMessage.addListener(function(message callback) {
  if (message.data === 'hola') {
    console.log('El mensaje es hola');
  }else{
    console.log('Otro mensaje cualquiera');
  }
});
```


## Acciones del Navegador 

Las acciones del navegador y el icon action no pueden acceder al DOM en sí, sin embargo, pueden comunicarse con el contentsctipr a través de la API de `messaging` de Chrome. 
Una acción del navegador debe tener un icono (para el botón), así como un archivo JavaScript para el código.

Cuando el usuario hace clic en el botón, desencadena un evento "onClick". Este código iría en background.js.

```
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log('hicimos click en el action icon')
}
```

Para mandar un mensaje tenemos que modificar nuestra funcion:

```
function buttonClicked(tab) {
  var msg = {
    mensaje: "el usuario hizo click!"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
```

Para poder detectar esto desde el `contentScript`:

```
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  if (request.message === "el usuario hizo click!") {
    console.log('request.message')
  }
}
```


Este codigo que estamos ejecutando tiene su propia consola donde vamos a poder ver nuestro codigo en tiempo real.


### ⏪ [Anterior: Background Script](../contentScript.md)
### ⏩ [Siguiente: New Tabs](06_popups.md)
