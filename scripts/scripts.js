let body = document.querySelector('body');
let menu_icon = document.querySelector('header h1 i');
let menu_is_open = false;
let header = document.querySelector('header');
let data_menu = header.getAttribute('data-menu');

menu_icon.addEventListener('click', () => {
  menu_is_open = !menu_is_open;
  data_menu = menu_is_open ? 'open' : 'close';
  header.setAttribute('data-menu', data_menu);
  menu_icon.className = menu_is_open ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});


function scroll() {
  if (window.scrollY > 200) {
    header.style.background = 'rgba(10, 0, 25, 0.75)';
  } else {
    header.style.background = 'none';
  } 
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});