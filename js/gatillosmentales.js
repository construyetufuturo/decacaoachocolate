var min = 148;
var max = 153;
var cantidadpersonas =getRndInteger(min, max);
var cantidadcompradores = 8;
var totalcupos=43;
function ExceptionUsuario(mensaje) {
  this.mensaje = mensaje;
  this.nombre = "ExceptionUsuario";
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// mostrarUbicacion(getRndInteger(min, max)  ,getCity())

async function getData(){
  try {
    // var ciudad="";
    // fetch("https://ipinfo.io/json")
    // fetch("https://ipinfo.io/json?token=c56d815590f46d")
    // fetch("https://ipwhois.app/json/")
    fetch("http://ip-api.com/json/?fields=61439")
    .then((response) => response.json())
    .then((data)=> {
          console.log("city: ", data.city);
          let city = data.city;
          return  city.toString();  
    })
    .catch(function(error) {
      console.log(error)
      
    });
    console.log(ciudad)
  } catch (error) {
    console.log(error);
  }
}

async function mostrargatillo1(cantidadpersonas,cantidadpersonascompra) {
  h2etiquetapart1 =`
            <h2> <span id="cantidad">${cantidadpersonas}</span> personas estan
            viendo esta oferta <span id="intensidad">AHORA</span> !
            </h2>
            `;
          const elementcantidadparte1 = document.querySelectorAll('#cantidadpersonasoferta')
          // foreach
          elementcantidadparte1.forEach((element)=>{
            element.innerHTML=h2etiquetapart1;
          });
          // foreach

          
  
}
async function mostrargatillo2(cantidadcompradores,totalcupos) {
    h2etiqueta =`
    <h2> ${cantidadcompradores} personas ya compraron el curso <span> HOY </span> Quedan <span> ${totalcupos-cantidadcompradores} </span> cupos disponibles !
    </h2>`;
    const element = document.getElementById('mensajecompraciudad');
    const cantidadpersonaslogrando = document.getElementById("cantidadpersonaslograndolo");
    element.innerHTML=h2etiqueta;
    console.log(522+cantidadcompradores)
    cantidadpersonaslogrando.innerHTML = `+${108+cantidadcompradores}`;
      
    }

    function resetar(cantidadcupos,funcionresetar){
      if(cantidadcupos==1){
        clearInterval(funcionresetar);
        cantidadcompradores=4;
        window.alert("Ampliamos los cupos hasta HOY!, no esperes más,");
    }
}

 // Llamada a la función getCity() para obtener la ciudad
mostrargatillo1(cantidadpersonas);
mostrargatillo2(cantidadcompradores,totalcupos);
const temporizadorcantidadpersonas = setInterval(function(){
mostrargatillo1(cantidadpersonas++);
 },5000);

var temporizadorcantidadcompradores = setInterval(function(){
  mostrargatillo2(cantidadcompradores,totalcupos);
  cantidadcompradores++;
  resetar(totalcupos-cantidadcompradores,mostrargatillo2(cantidadcompradores,totalcupos))
},48000);

//ubicacion
function ubicaciongatillo(){
  try {
    let contenedorubicacion = document.querySelectorAll("#ubicaciongatillo");
    fetch("https://ipwhois.app/json/")
    .then((response)=> response.json())
    .then((data)=>{
      contenedorubicacion.forEach(element =>{
        element.innerHTML=`<h2>En ${data.city}</h2>`;
      })
    })
  } catch (error) {
    
  }
}

// bandera
function ubicacionbandera(){
  try{
    let banderamsg = document.querySelector(".contenedorbandera");
    let oferta = " Oferta en ";
    fetch("https://ipwhois.app/json/")
    .then((response) => response.json())
    .then((data)=>{banderamsg.innerHTML='<font class="pais"><img decoding="async" src="'+ data.country_flag +'" width="17px"><span>'+oferta+'</span>'  + data.country + '</font>'})

  }catch{()=>{
    let banderamsg = document.querySelector(".contenedorbandera");
    banderamsg.innerHTML='<font > Oferta exclusiva </font>'
  }

  }
}
ubicaciongatillo();
ubicacionbandera();
function recargarpagina(){
  document.onkeydown = function(e){
    tecla = (document.all) ? e.keyCode : e.which;
    // alert(tecla)
    if (tecla == 116 || (e.keyCode == 82 && e.ctrlKey)){
      if (confirm("Si recargas la pagina podrias perder el bono de descuento") == true) {
         return true;
       } else {
         return false;
      }
    }
   }
   
}
// function NoBack(){
//   history.go(1)
//   }
recargarpagina();
// NoBack();

