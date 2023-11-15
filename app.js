const open = document.getElementById("bar");
const closed = document.getElementById("close");
const navBar = document.getElementById("nav-bar")
const homelink = document.getElementById("homeLink")


if(open){
  open.addEventListener('click', () =>{
    navBar.classList.add('active')
  })
}
if(closed){
  closed.addEventListener('click', () =>{
    navBar.classList.remove('active')
  })
}

if(homelink){
  homelink.addEventListener(click, () =>{
    window.location.href ='index.html';
  })
}