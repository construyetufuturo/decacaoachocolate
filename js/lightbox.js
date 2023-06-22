// lightbox galeria start
const imagenes  = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const icon_menu1 = document.querySelector('.icon-menu');



imagenes.forEach(imagen =>{
   imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'));
    
   })
   
}

);
contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
       
        imagenesLight.classList.toggle('showImage');
        icon_menu1.style.opacity = '1';
       
    }
    
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    icon_menu1.style.opacity = '0';
    
}
// lighbox galeria end
// 
// disable right clic
// function disableIE() {
//     if (document.all) {
//         return false;
//     }
// }
// function disableNS(e) {
//     if (document.layers || (document.getElementById && !document.all)) {
//         if (e.which==2 || e.which==3) {
//             return false;
//         }
//     }
// }
// if (document.layers) {
//     document.captureEvents(Event.MOUSEDOWN);
//     document.onmousedown = disableNS;
// } 
// else {
//     document.onmouseup = disableNS;
//     document.oncontextmenu = disableIE;
// }
// document.oncontextmenu=new Function("return false");


// progress bar
// spanprogress.forEach((span)=>{
//     span.style.width = span.dataset.width;
//     span.innerHTML = span.dataset.width;
// })

// TOTAL SLIDER MESSAGE START
function contarSlider(){
    let perfil = document.getElementsByClassName("slide-cards");
    let logro = document.getElementsByClassName("slide-logro");
    console.log(perfil);
    console.log("logros=",logro);
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${perfil.length} </p> </div>`;
        perfil[i].innerHTML += elementohtml;
    }
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${logro.length} </p> </div>`;
        logro[i].innerHTML += elementohtml;
    }
    
}
contarSlider();
// TOTAL SLIDER MESSAGE END

// PROGRESS HORIZONTAL BAR START
const spanprogress = document.querySelectorAll('.progress-bar span');
const contenedorbar = document.getElementById('progress-bar-box-test');
const spandata = document.getElementById('spandata');

function mostrarprogressbar(){
  let scrollTop = document.documentElement.scrollTop;
  let alturaAnimado = contenedorbar.offsetTop;
  if(alturaAnimado+150<scrollTop){
    spanprogress.forEach((span)=>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
    })
    }
    
}

window.addEventListener('scroll',mostrarprogressbar);
function aumentadata(porentaje){
    spandata.dataset.width=`${porentaje}% `;
}
var porcentajevalor =68;
aumentadata(porcentajevalor);
var temporizador = setInterval(function(){
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado = contenedorbar.offsetTop;
    let valorscroll = scrollTop-alturaAnimado;
    console.log(valorscroll);
    if(porcentajevalor<87 && (0<valorscroll<500)){
        aumentadata(porcentajevalor);
        mostrarprogressbar();
        porcentajevalor++;
    }
},9000);

// PROGRESS HORIZONTAL BAR END

// HIDE MAIN TOGGLE START
var hidemain = document.querySelectorAll('#hidemain');
const activarhidemain = setTimeout(function(){
    hidemain.forEach((i)=>{
        i.classList.toggle('hidemain')
    });;
},65000);
// HIDE MAIN TOGGLE END



