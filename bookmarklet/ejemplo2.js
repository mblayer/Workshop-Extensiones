(function() {
  const nombre = "Matias Blayer"
  const parrafos = document.getElementsByTagName('p');
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = nombre;
  }
})();