const nav_links = document.querySelector('.nav_links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    nav_links.style.display = 'flex';
    nav_links.style.top = '0';
}
function close(){
    nav_links.style.top = '-100%';
}
