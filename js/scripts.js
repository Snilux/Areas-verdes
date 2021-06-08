// Forms
function vaciar(control) {
    control.value = '';
}
function llenar(control) {
    control.value = 'Buscar...';
}
// Temas
window.addEventListener("scroll", function(){
    if (window.scrollY > 0) {
        document.getElementById('icon').style.opacity = "0";   
        document.getElementById('box').style.opacity = "1";
        document.getElementById('box1').style.opacity = "0.8";
        document.getElementById('box2').style.opacity = "0.8";
        document.getElementById('box3').style.opacity = "0.8";
        document.getElementById('box4').style.opacity = "0.8";
            
    }
    if (window.scrollY == 0) {
        document.getElementById('icon').style.opacity = "1";
        document.getElementById('box').style.opacity = "0";
        document.getElementById('box1').style.opacity = "0";
        document.getElementById('box2').style.opacity = "0";
        document.getElementById('box3').style.opacity = "0";
        document.getElementById('box4').style.opacity = "0";
    }
})

// Menu
var btn = document.getElementById('btnMenu');
var menu = document.getElementById('menu');
var contador = 0;

function mostrar() {
    if (contador == 0) {
        menu.classList.add('mostrar');
        contador = 1;
    }
    else{
        menu.classList.remove('mostrar');
        contador = 0;
    }
}

btn.addEventListener('click', mostrar,true);