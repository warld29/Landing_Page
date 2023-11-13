var bar = document.getElementsByClassName("bar");
var close = document.getElementsByClassName("close");
var navBar = document.getElementsByClassName("nav-bar")


if(bar){
  bar.addEventListener('click', () =>{
    navBar.classList.add('active')
  })
}
if(close){
  close.addEventListener('click', () =>{
    navBar.classList.remove('active')
  })
}