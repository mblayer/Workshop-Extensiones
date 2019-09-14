chrome.runtime.onInstalled.addListener(() => {
  console.log("Iniciando extension.");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log('Nuevo favorito')
});


chrome.webNavigation.onCompleted.addListener(()=> {
  alert("This is my favorite website!");
}, {url: [{urlMatches : 'https://www.google.com/'}]});

chrome.runtime.onMessage.addListener(function(message) {
  if (message.data === 'hola') {
    console.log('El mensaje es hola');
  }else{
    console.log('Otro mensaje cualquiera');
  }
});

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log('hicimos click en el action icon')
}