let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}



let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
}