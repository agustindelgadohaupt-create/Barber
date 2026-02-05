function reservar() {

  let servicio = document.getElementById("servicio").value;

  let telefono = "5491123456789"; // CAMBIAR POR EL REAL

  let mensaje = `Hola! Quiero reservar turno para ${servicio}`;

  let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

/* CARROUSEL */

let index = 0;

function mover(direccion) {

  let slides = document.querySelector(".slides");
  let total = document.querySelectorAll(".slide").length;

  index += direccion;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

/* AUTO */

setInterval(() => {
  mover(1);
}, 3000);


