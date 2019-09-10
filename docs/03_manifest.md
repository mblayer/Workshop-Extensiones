# Manifest

El archivo Manifest se va a encargar de darle la configuración al navegador sobre nuestra extensión. Este es un archivo `.json` con un objeto con varias propiedades, algunas obligatorias y otras no.


* **manifest_version:** Version y compatibilidad de nuestra extension con el navegador.
* **name:** nombre de nuestra extension.
* **version:** versión de nuestra extensión.

```
{
  "name": "Test",
  "description" : "Extension test",
  "manifest_version": 2,
  "version": "0.0.1"
}
```

Esta extension esta lista para ser instalada, pero la misma no hace nada, ahora tenemos que ir sumando las diferentes partes


### ⏩ [Siguiente: Background Script](../04_backgroundScript.md)