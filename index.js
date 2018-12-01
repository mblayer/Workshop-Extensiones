(()=>{
  const username = document.getElementsByClassName('username u-dir u-textTruncate')
  const color = '#FFDF53';
  for (const element of username) {
    if(element.textContent === "@Meetupjs_ar"){
      element.parentElement.parentElement.parentElement.parentElement.parentElement.style.background = color
    }
  }
})()