function reservar() {

    let servicio = document.getElementById("servicio").value;
  
    let telefono = "5491123456789"; // CAMBIAR
  
    let mensaje = `Hola! Quiero reservar turno para ${servicio}`;
  
    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
    window.open(url, "_blank");
  }
  