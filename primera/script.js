let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

function cargar(element) {
    // Obtener detalles del producto seleccionado
    var imgSrc = element.querySelector('img').src;
    var modelo = element.querySelector('.descripcion').textContent;
    var precio = element.querySelector('.precio').textContent;

    // Mostrar detalles en el panel lateral
    document.getElementById('img').src = imgSrc;
    document.getElementById('modelo').textContent = modelo;
    document.getElementById('precio').textContent = precio;

    // Añadir la clase activa para iniciar el movimiento de deslizamiento
    const seleccionPanel = document.getElementById('seleccion');
    seleccionPanel.style.display = 'block'; // Hacerlo visible
    setTimeout(() => {
        seleccionPanel.classList.add('activa');
    }, 10); // Retraso para que el display none se retire antes del movimiento
 }

function cerrar() {
    // Remover la clase activa para iniciar el movimiento de deslizamiento de salida
    const seleccionPanel = document.getElementById('seleccion');
    seleccionPanel.classList.remove('activa');

    // Esperar a que la animación termine para ocultarlo
    setTimeout(() => {
        seleccionPanel.style.display = 'none';
    }, 500); // Tiempo correspondiente al `transition` en el CSS
  }