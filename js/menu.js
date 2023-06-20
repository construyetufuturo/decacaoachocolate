const icon_menu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu-nav');
console.log(icon_menu);
console.log(menu);
icon_menu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(menu.classList.contains("spread") && e.target != menu  && e.target != icon_menu){
        menu.classList.toggle('spread')
    }
})
