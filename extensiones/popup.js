const formulario = document.getElementById('formulario')
formulario.addEventListener("submit", ()=> {
  debugger;
  const color = formulario[0].value
  alert(`soy un alert con el color ${color}`)
  document.getElementsByTagName('body')[0].style['background-color'] = color;
})