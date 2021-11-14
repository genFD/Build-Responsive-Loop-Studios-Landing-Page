/* 
=====================
header functionnality
====================
*/

const navbarmenubtn = document.querySelector('.menu');
const navbarclosebtn = document.querySelector('.close');

const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');
const banner = document.querySelector('.banner');

navbarmenubtn.addEventListener('click', () => {
  navbar.classList.add('nav-change');
  banner.classList.add('banner-change');
  navlinks.classList.add('nav-links-change');
  navbarmenubtn.classList.add('menu-change');
  navbarclosebtn.classList.add('close-change');
});
navbarclosebtn.addEventListener('click', () => {
  navbar.classList.remove('nav-change');
  banner.classList.remove('banner-change');
  navlinks.classList.remove('nav-links-change');
  navbarmenubtn.classList.remove('menu-change');
  navbarclosebtn.classList.remove('close-change');
});

window.addEventListener('resize', () => {
  let windowWidth = parseInt(window.innerWidth);
  if (windowWidth > 799) {
    navbar.classList.remove('nav-change');
    navlinks.classList.remove('nav-links-change');
    banner.classList.remove('banner-change');
    navbarclosebtn.classList.remove('close-change');
    navbarmenubtn.classList.remove('menu-change');
  }
});
