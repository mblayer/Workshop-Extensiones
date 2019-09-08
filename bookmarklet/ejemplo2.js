(()=> {
  var body = document.getElementsByTagName('body');
  const bodyColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  const fontColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  body[0].style['background-color'] = bodyColor;
  body[0].style['color'] = fontColor;
  console.log(`Colores combinados
    Body: ${bodyColor}
    Body: ${fontColor}
  `)
})();

