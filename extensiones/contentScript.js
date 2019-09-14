console.log('test')
const cambiarTexto =  (nombre) => {
  const parrafos = document.getElementsByTagName('p');
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = nombre;
  }
}

cambiarTexto("Matias Blayer")