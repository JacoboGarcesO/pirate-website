/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

document.addEventListener('DOMContentLoaded', () => {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
  navClose.addEventListener('click', hiddenMenu);
  navLinks.forEach(link => link.addEventListener('click', hiddenMenu))
  window.addEventListener('scroll', scrolling)
})

const hiddenMenu = () => {
  navMenu.classList.remove('show-menu');
}

const scrolling = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header')      
}