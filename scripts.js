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

