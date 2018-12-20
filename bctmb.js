(()=>{
  const username = document.getElementsByClassName('bA4')
  email=​"juanmartin.dominguez@gmail.com"
  const color = '#FFDF53';
  for (const element of username) {
    if(element.children[0].attributes.email.textContent === "dolores.martinsaravia@acamica.com"){
      element.parentElement.parentElement.parentElemen.style.background = color
    }
  }
})()