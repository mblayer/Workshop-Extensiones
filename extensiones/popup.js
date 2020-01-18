const formulario = document.getElementById('formulario')
formulario.addEventListener("submit", ()=> {
  const color = formulario[0].value
  document.getElementsByTagName('body')[0].style['background-color'] = color;
  debugger;
  //alert(`soy un alert con el color ${color}`)
})