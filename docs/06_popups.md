# Pop Up

Una ventana emergente es un archivo HTML que se muestra en una ventana especial cuando el usuario hace clic en el icono de la barra de herramientas. Una ventana emergente funciona de manera muy similar a una página web; puede contener enlaces a hojas de estilo y script js.

```
"browser_action": {
  "default_title": "you can also add a tool tip here",
  "default_popup": "popup.html"
}
```

Esta ventana nos permite mostrar informacion o interactuar con la extension, tambien podemos comunicarnos `contentScript` por medio del mensajes como los que utilizamos en el `backgroundScript`

```
chrome.tabs.sendMessage(tabs[0].id, `{mensaje}`)
```

### ⏪ [Anterior: Background Script](../05_backgroundScript.md)
### ⏩ [Siguiente: New Tabs](07_newTabs.md)