
function showModule(idmodulo,plus,minus) {
    let x = document.getElementById(idmodulo);
    let p = document.getElementById(plus);
    let m = document.getElementById(minus);
    if (x.style.display === "block") {
        x.style.display = "none";
        m.style.display = "none";
        p.style.display = "block";
      } else {
        x.style.display = "block";
        m.style.display = "block";
        p.style.display = "none";
        
      }
}
// var circularProgress = document.querySelector(".circular-progress");
// let   progressValue = document.querySelector(".progress-value");
// let progressStartValue =0,
//     progressEndValue = 87,
//     speed = 100;
// let progress = setInterval(()=>{
//     progressStartValue++;
//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(#485563 ${progressStartValue*3.6}deg, #ededed 0deg)`
//     if(progressStartValue == progressEndValue){
//         clearInterval(progress);
//     }
    
// },speed);

